package io.dataease.datasource.server;

import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.dataease.api.dataset.dto.DatasetTableDTO;
import io.dataease.api.dataset.union.DatasetGroupInfoDTO;
import io.dataease.api.dataset.union.DatasetTableInfoDTO;
import io.dataease.api.dataset.union.UnionDTO;
import io.dataease.api.dataset.union.UnionParamDTO;
import io.dataease.api.ds.DatasourceApi;
import io.dataease.api.ds.vo.*;
import io.dataease.api.permissions.auth.api.InteractiveAuthApi;
import io.dataease.api.permissions.auth.dto.BusiResourceCreator;
import io.dataease.api.permissions.auth.dto.BusiResourceEditor;
import io.dataease.commons.constants.DataSourceType;
import io.dataease.commons.constants.TaskStatus;
import io.dataease.dataset.dto.DatasourceSchemaDTO;
import io.dataease.dataset.manage.DatasetDataManage;
import io.dataease.dataset.utils.TableUtils;
import io.dataease.datasource.dao.auto.entity.CoreDatasource;
import io.dataease.datasource.dao.auto.entity.CoreDatasourceTask;
import io.dataease.datasource.dao.auto.mapper.CoreDatasourceMapper;
import io.dataease.datasource.dto.DatasourceNodeBO;
import io.dataease.datasource.dto.DatasourceNodePO;
import io.dataease.api.dataset.dto.DsBusiNodeVO;
import io.dataease.datasource.ext.CoreDatasourceExtMapper;
import io.dataease.datasource.manage.DataSourceManage;
import io.dataease.datasource.manage.DatasourceSyncManage;
import io.dataease.datasource.provider.ApiUtils;
import io.dataease.datasource.provider.CalciteProvider;
import io.dataease.datasource.provider.ExcelUtils;
import io.dataease.datasource.request.DatasourceRequest;
import io.dataease.dto.dataset.DatasetTableFieldDTO;
import io.dataease.engine.constant.SQLConstants;
import io.dataease.exception.DEException;
import io.dataease.model.BusiNodeRequest;
import io.dataease.utils.BeanUtils;
import io.dataease.utils.IDUtils;
import io.dataease.utils.JsonUtil;
import io.dataease.utils.TreeUtils;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/datasource")
@Transactional
public class DatasourceServer implements DatasourceApi {
    @Resource
    private CoreDatasourceMapper datasourceMapper;
    @Resource
    private EngineServer engineServer;
    @Resource
    private Environment env;
    @Resource
    private DatasourceTaskServer datasourceTaskServer;
    @Resource
    private CalciteProvider calciteProvider;
    @Resource
    private DatasourceSyncManage datasourceSyncManage;

    @Autowired(required = false)
    private InteractiveAuthApi interactiveAuthApi;

    private static final String RESOURCE_FLAG = "datasource";

    private static ObjectMapper objectMapper = new ObjectMapper();

    @Resource
    private DataSourceManage dataSourceManage;

    @Resource
    private DatasetDataManage datasetDataManage;

    @Resource
    private CoreDatasourceExtMapper coreDatasourceExtMapper;


    @Override
    public List<DatasourceDTO> query(String keyWord) {
        return null;
    }

    public enum UpdateType {
        all_scope, add_scope
    }

    @Override
    public DatasourceDTO move(DatasourceDTO dataSourceDTO) throws Exception {
        switch (dataSourceDTO.getAction()){
            case "move":
            case "rename":
                checkName(dataSourceDTO.getName(), datasourceMapper.selectById(dataSourceDTO.getId()).getType(), dataSourceDTO.getId());
                UpdateWrapper<CoreDatasource> updateWrapper = new UpdateWrapper<>();
                updateWrapper.eq("id", dataSourceDTO.getId());
                CoreDatasource record = new CoreDatasource();
                record.setPid(dataSourceDTO.getPid());
                record.setName(dataSourceDTO.getName());
                datasourceMapper.update(record, updateWrapper);
                break;
            case "create":
                checkName(dataSourceDTO.getName(), dataSourceDTO.getNodeType(), dataSourceDTO.getId());
                CoreDatasource coreDatasource = new CoreDatasource();
                BeanUtils.copyBean(coreDatasource, dataSourceDTO);
                coreDatasource.setCreateTime(System.currentTimeMillis());
                coreDatasource.setUpdateTime(System.currentTimeMillis());
                coreDatasource.setTaskStatus(TaskStatus.WaitingForExecution.name());
                coreDatasource.setId(IDUtils.snowID());
                break;
            default:
                break;
        }
        return dataSourceDTO;
    }
    @Override
    public DatasourceDTO save(DatasourceDTO dataSourceDTO) throws Exception {
        if(StringUtils.isNotEmpty(dataSourceDTO.getAction())){
            move(dataSourceDTO);
            return dataSourceDTO;
        }
        if(StringUtils.isNotEmpty(dataSourceDTO.getNodeType()) && dataSourceDTO.getNodeType().equals("folder")){
            dataSourceDTO.setType("folder");
            dataSourceDTO.setConfiguration("");
        }
        if (dataSourceDTO.getId() != null && dataSourceDTO.getId() > 0) {
            return update(dataSourceDTO);
        }
        if (StringUtils.isNotEmpty(dataSourceDTO.getConfiguration())) {
            dataSourceDTO.setConfiguration(new String(Base64.getDecoder().decode(dataSourceDTO.getConfiguration())));
        }
        preCheckDs(dataSourceDTO);
        dataSourceDTO.setId(IDUtils.snowID());
        CoreDatasource coreDatasource = new CoreDatasource();
        BeanUtils.copyBean(coreDatasource, dataSourceDTO);
        coreDatasource.setCreateTime(System.currentTimeMillis());
        coreDatasource.setUpdateTime(System.currentTimeMillis());
        try {
            checkDatasourceStatus(coreDatasource);
        } catch (Exception ignore) {
        }
        coreDatasource.setTaskStatus(TaskStatus.WaitingForExecution.name());
        datasourceMapper.insert(coreDatasource);

        if (dataSourceDTO.getType().equals(DatasourceConfiguration.DatasourceType.Excel.name())) {
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            List<DatasetTableDTO> tables = ExcelUtils.getTables(datasourceRequest);
            for (DatasetTableDTO table : tables) {
                datasourceRequest.setTable(table.getTableName());
                List<TableField> tableFields = ExcelUtils.getTableFields(datasourceRequest);
                datasourceSyncManage.createEngineTable(datasourceRequest.getTable(), tableFields);
            }
            datasourceSyncManage.extractExcelData(coreDatasource.getId(), "all_scope");
        }
        if (dataSourceDTO.getType().equals(DatasourceConfiguration.DatasourceType.API.name())) {
            CoreDatasourceTask coreDatasourceTask = new CoreDatasourceTask();
            BeanUtils.copyBean(coreDatasourceTask, dataSourceDTO.getSyncSetting());
            coreDatasourceTask.setName(coreDatasource.getName() + "-task");
            coreDatasourceTask.setDsId(coreDatasource.getId());
            datasourceTaskServer.insert(coreDatasourceTask);
            datasourceSyncManage.addSchedule(coreDatasourceTask);
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            List<DatasetTableDTO> tables = ApiUtils.getTables(datasourceRequest);
            for (DatasetTableDTO api : tables) {
                datasourceRequest.setTable(api.getTableName());
                List<TableField> tableFields = ApiUtils.getTableFields(datasourceRequest);
                datasourceSyncManage.createEngineTable(datasourceRequest.getTable(), tableFields);
            }
        }
        if (ObjectUtils.isNotEmpty(interactiveAuthApi)) {
            BusiResourceCreator creator = new BusiResourceCreator();
            creator.setId(coreDatasource.getId());
            creator.setPid(0L);
            creator.setFlag(RESOURCE_FLAG);
            creator.setName(dataSourceDTO.getName());
            creator.setLeaf(true);
            creator.setExtraFlag(DataSourceType.valueOf(dataSourceDTO.getType()).getFlag());
            interactiveAuthApi.saveResource(creator);
        }
        calciteProvider.update(dataSourceDTO);
        return dataSourceDTO;
    }

    @Override
    public DatasourceDTO update(DatasourceDTO dataSourceDTO) throws Exception {

        Long pk = null;
        if (ObjectUtils.isEmpty(pk = dataSourceDTO.getId())) {
            return save(dataSourceDTO);
        }
        CoreDatasource sourceData = datasourceMapper.selectById(pk);
        dataSourceDTO.setConfiguration(new String(Base64.getDecoder().decode(dataSourceDTO.getConfiguration())));
        preCheckDs(dataSourceDTO);

        CoreDatasource coreDatasource = new CoreDatasource();
        BeanUtils.copyBean(coreDatasource, dataSourceDTO);
        coreDatasource.setUpdateTime(System.currentTimeMillis());
        try {
            checkDatasourceStatus(coreDatasource);
        } catch (Exception ignore) {
        }

        DatasourceRequest sourceTableRequest = new DatasourceRequest();
        sourceTableRequest.setDatasource(sourceData);
        DatasourceRequest coreDatasourceRequest = new DatasourceRequest();
        coreDatasourceRequest.setDatasource(coreDatasource);
        List<String> toCreateTables = new ArrayList<>();
        List<String> toDeleteTables = new ArrayList<>();
        if (dataSourceDTO.getType().equals(DatasourceConfiguration.DatasourceType.API.name())) {
            List<String> sourceTables = ApiUtils.getTables(sourceTableRequest).stream().map(DatasetTableDTO::getTableName).collect(Collectors.toList());
            List<String> tables = ApiUtils.getTables(coreDatasourceRequest).stream().map(DatasetTableDTO::getTableName).collect(Collectors.toList());
            toCreateTables = tables.stream().filter(table -> !sourceTables.contains(table)).collect(Collectors.toList());
            toDeleteTables = sourceTables.stream().filter(table -> !tables.contains(table)).collect(Collectors.toList());
            for (String table : tables) {
                for (String sourceTable : sourceTables) {
                    if (table.equals(sourceTable)) {
                        coreDatasourceRequest.setTable(table);
                        List<String> tableFields = ApiUtils.getTableFields(coreDatasourceRequest).stream().map(TableField::getName).sorted().collect(Collectors.toList());
                        sourceTableRequest.setTable(sourceTable);
                        List<String> sourceTableFields = ApiUtils.getTableFields(sourceTableRequest).stream().map(TableField::getName).sorted().collect(Collectors.toList());
                        if (!String.join(",", tableFields).equals(String.join(",", sourceTableFields))) {
                            toDeleteTables.add(table);
                            toCreateTables.add(table);
                        }
                    }
                }
            }
            CoreDatasourceTask coreDatasourceTask = new CoreDatasourceTask();
            BeanUtils.copyBean(coreDatasourceTask, dataSourceDTO.getSyncSetting());
            coreDatasourceTask.setName(coreDatasource.getName() + "-task");
            coreDatasourceTask.setDsId(coreDatasource.getId());
            datasourceTaskServer.update(coreDatasourceTask);
            for (String deleteTable : toDeleteTables) {
                datasourceSyncManage.dropEngineTable(deleteTable);
            }
            for (String toCreateTable : toCreateTables) {
                coreDatasourceRequest.setTable(toCreateTable);
                datasourceSyncManage.createEngineTable(toCreateTable, ApiUtils.getTableFields(coreDatasourceRequest));
            }
            datasourceMapper.updateById(coreDatasource);
            datasourceSyncManage.addSchedule(coreDatasourceTask);
        } else if (dataSourceDTO.getType().equals(DatasourceConfiguration.DatasourceType.Excel.name())) {
            List<String> sourceTables = ExcelUtils.getTables(sourceTableRequest).stream().map(DatasetTableDTO::getTableName).collect(Collectors.toList());
            List<String> tables = ExcelUtils.getTables(coreDatasourceRequest).stream().map(DatasetTableDTO::getTableName).collect(Collectors.toList());
            if (dataSourceDTO.getEditType() == 0) {
                toCreateTables = tables;
                toDeleteTables = sourceTables;
                for (String deleteTable : toDeleteTables) {
                    datasourceSyncManage.dropEngineTable(deleteTable);
                }
                for (String toCreateTable : toCreateTables) {
                    coreDatasourceRequest.setTable(toCreateTable);
                    datasourceSyncManage.createEngineTable(toCreateTable, ExcelUtils.getTableFields(coreDatasourceRequest));
                }
                datasourceMapper.updateById(coreDatasource);
                datasourceSyncManage.extractExcelData(coreDatasource.getId(), "all_scope");
            } else {
                datasourceMapper.updateById(coreDatasource);
                datasourceSyncManage.extractExcelData(coreDatasource.getId(), "add_scope");
            }
        } else {
            datasourceMapper.updateById(coreDatasource);
        }
        if (ObjectUtils.isNotEmpty(interactiveAuthApi) && ObjectUtils.isNotEmpty(sourceData) && !StringUtils.equals(dataSourceDTO.getName(), sourceData.getName())) {
            BusiResourceEditor editor = new BusiResourceEditor();
            editor.setId(pk);
            editor.setFlag(RESOURCE_FLAG);
            editor.setName(dataSourceDTO.getName());
            interactiveAuthApi.editResource(editor);
        }
        calciteProvider.update(dataSourceDTO);
        return dataSourceDTO;
    }

    private String excelDataTableName(String name) {
        return StringUtils.substring(name, 6, name.length() - 37);
    }

    @Override
    public List<DatasourceConfiguration.DatasourceType> datasourceTypes() {
        return Arrays.asList(DatasourceConfiguration.DatasourceType.values());
    }

    @Override
    public DatasourceDTO validate(DatasourceDTO dataSourceDTO) throws DEException {
        dataSourceDTO.setConfiguration(new String(Base64.getDecoder().decode(dataSourceDTO.getConfiguration())));
        CoreDatasource coreDatasource = new CoreDatasource();
        BeanUtils.copyBean(coreDatasource, dataSourceDTO);
        checkDatasourceStatus(coreDatasource);
        dataSourceDTO.setStatus(coreDatasource.getStatus());
        return dataSourceDTO;
    }

    @Override
    public List<String> getSchema(DatasourceDTO dataSourceDTO) throws Exception {
        dataSourceDTO.setConfiguration(new String(Base64.getDecoder().decode(dataSourceDTO.getConfiguration())));
        CoreDatasource coreDatasource = new CoreDatasource();
        BeanUtils.copyBean(coreDatasource, dataSourceDTO);
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setDatasource(coreDatasource);
        return calciteProvider.getSchema(datasourceRequest);
    }


    @Override
    public void delete(Long datasourceId) throws Exception {
        CoreDatasource coreDatasource = datasourceMapper.selectById(datasourceId);
        if (coreDatasource.getType().equals(DatasourceConfiguration.DatasourceType.Excel.name())) {
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            List<DatasetTableDTO> tables = ExcelUtils.getTables(datasourceRequest);
            for (DatasetTableDTO table : tables) {
                datasourceRequest.setTable(table.getTableName());
                datasourceSyncManage.dropEngineTable(datasourceRequest.getTable());
            }
        }
        if (coreDatasource.getType().equals(DatasourceConfiguration.DatasourceType.API.name())) {
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            List<DatasetTableDTO> tables = ApiUtils.getTables(datasourceRequest);
            for (DatasetTableDTO api : tables) {
                datasourceRequest.setTable(api.getTableName());
                datasourceSyncManage.dropEngineTable(datasourceRequest.getTable());
            }
            datasourceTaskServer.deleteByDSId(datasourceId);
        }
        datasourceMapper.deleteById(datasourceId);
    }

    @Override
    public DatasourceDTO validate(Long datasourceId) throws DEException {
        CoreDatasource coreDatasource = datasourceMapper.selectById(datasourceId);
        checkDatasourceStatus(coreDatasource);
        DatasourceDTO datasourceDTO = new DatasourceDTO();
        BeanUtils.copyBean(datasourceDTO, coreDatasource);
        return datasourceDTO;
    }

    @Override
    public List<DsBusiNodeVO> list(BusiNodeRequest request) {
        request.setBusyFlag(RESOURCE_FLAG);
        QueryWrapper queryWrapper = new QueryWrapper();
        if (ObjectUtils.isNotEmpty(request.getLeaf())) {
            if (request.getLeaf()) {
                queryWrapper.ne("type", "folder");
            } else {
                queryWrapper.eq("type", "folder");
            }
        }
        if(ObjectUtils.isNotEmpty(request.getId())){
            queryWrapper.ne("id", request.getId());
        }
        queryWrapper.orderByDesc("create_time");
        List<DatasourceNodePO> pos = coreDatasourceExtMapper.query(queryWrapper);

        List<DatasourceNodeBO> nodes = new ArrayList<>();
//        if (ObjectUtils.isEmpty(request.getLeaf()) || !request.getLeaf()) nodes.add(rootNode());
        List<DatasourceNodeBO> bos = pos.stream().map(this::convert).toList();
        if (CollectionUtil.isNotEmpty(bos)) {
            nodes.addAll(bos);
        }
        setDatasourceConfig(nodes);
        List<DsBusiNodeVO> dsBusiNodeVOs = TreeUtils.mergeTree(nodes, DsBusiNodeVO.class, false);
        return dsBusiNodeVOs;
    }

    private void setDatasourceConfig(List<DatasourceNodeBO> nodes) {
        TypeReference<List<ApiDefinition>> listTypeReference = new TypeReference<List<ApiDefinition>>() {
        };

        nodes.forEach(datasourceNodeBO -> {
            if (datasourceNodeBO.getLeaf()) {
                List<DatasourceConfiguration.DatasourceType> datasourceConfigurations = datasourceTypes();
                QueryWrapper<CoreDatasource> datasourceQueryWrapper = new QueryWrapper();
                datasourceMapper.selectList(datasourceQueryWrapper).forEach(coreDatasource -> {
                    if (coreDatasource.getId().equals(datasourceNodeBO.getId())) {
                        if (datasourceNodeBO.getType().equalsIgnoreCase(DatasourceConfiguration.DatasourceType.API.toString())) {
                            List<ApiDefinition> apiDefinitionList = JsonUtil.parseList(coreDatasource.getConfiguration(), listTypeReference);
                            List<ApiDefinition> apiDefinitionListWithStatus = new ArrayList<>();
                            int success = 0;
                            for (int i = 0; i < apiDefinitionList.size(); i++) {
                                String status = null;
                                if (StringUtils.isNotEmpty(coreDatasource.getStatus())) {
                                    JsonNode jsonNode = null;
                                    try {
                                        jsonNode = objectMapper.readTree(coreDatasource.getStatus());
                                    } catch (Exception e) {
                                        DEException.throwException(e);
                                    }
                                    if (jsonNode.get(apiDefinitionList.get(i).getName()) != null) {
                                        status = jsonNode.get(apiDefinitionList.get(i).getName()).asText();
                                    }
                                    apiDefinitionList.get(i).setStatus(status);
                                }
                                if (StringUtils.isNotEmpty(status) && status.equalsIgnoreCase("Success")) {
                                    success++;
                                }
                                apiDefinitionListWithStatus.add(apiDefinitionList.get(i));
                            }
                            datasourceNodeBO.setApiConfigurationStr(new String(Base64.getEncoder().encode(JsonUtil.toJSONString(apiDefinitionListWithStatus).toString().getBytes())));
                            if (success == apiDefinitionList.size()) {
                                datasourceNodeBO.setStatus("Success");
                            } else {
                                if (success > 0 && success < apiDefinitionList.size()) {
                                    datasourceNodeBO.setStatus("Warning");
                                } else {
                                    datasourceNodeBO.setStatus("Error");
                                }
                            }
                            CoreDatasourceTask coreDatasourceTask = datasourceTaskServer.selectByDSId(datasourceNodeBO.getId());
                            TaskDTO taskDTO = new TaskDTO();
                            BeanUtils.copyBean(taskDTO, coreDatasourceTask);
                            datasourceNodeBO.setSyncSetting(taskDTO);
                        }
                        datasourceNodeBO.setConfiguration(new String(Base64.getEncoder().encode(coreDatasource.getConfiguration().getBytes())));
                    }
                });
            }
        });
    }

    private DatasourceNodeBO rootNode() {
        DatasourceNodeBO bo = new DatasourceNodeBO();
        bo.setId(0L);
        bo.setName("root");
        bo.setLeaf(false);
        bo.setWeight(3);
        bo.setPid(-1L);
        bo.setExtraFlag(0);
        return bo;
    }

    private DatasourceNodeBO convert(DatasourceNodePO po) {
        DatasourceNodeBO bo = new DatasourceNodeBO();
        bo.setId(po.getId());
        bo.setName(po.getName());
        bo.setLeaf(!StringUtils.equals(po.getType(), "folder"));
        bo.setWeight(3);
        bo.setType(po.getType());
        bo.setPid(po.getPid());
        bo.setExtraFlag(0);
        return bo;
    }

    public List<DatasourceDTO> list() {
        List<DatasourceDTO> datasourceDTOS = new ArrayList<>();
        List<DatasourceConfiguration.DatasourceType> datasourceConfigurations = datasourceTypes();
        QueryWrapper<CoreDatasource> queryWrapper = new QueryWrapper();
        datasourceMapper.selectList(queryWrapper).forEach(coreDatasource -> {
            DatasourceDTO datasourceDTO = new DatasourceDTO();
            BeanUtils.copyBean(datasourceDTO, coreDatasource);
            datasourceConfigurations.forEach(datasourceConfiguration -> {
                if (StringUtils.equals(datasourceDTO.getType(), datasourceConfiguration.getType())) {
                    datasourceDTO.setTypeAlias(datasourceConfiguration.getName());
                    datasourceDTO.setCatalog(datasourceConfiguration.getCatalog());
                }
            });
            TypeReference<List<ApiDefinition>> listTypeReference = new TypeReference<List<ApiDefinition>>() {
            };
            if (datasourceDTO.getType().equalsIgnoreCase(DatasourceConfiguration.DatasourceType.API.toString())) {
                List<ApiDefinition> apiDefinitionList = JsonUtil.parseList(datasourceDTO.getConfiguration(), listTypeReference);
                List<ApiDefinition> apiDefinitionListWithStatus = new ArrayList<>();
                int success = 0;
                for (int i = 0; i < apiDefinitionList.size(); i++) {
                    String status = null;
                    if (StringUtils.isNotEmpty(datasourceDTO.getStatus())) {
                        JsonNode jsonNode = null;
                        try {
                            jsonNode = objectMapper.readTree(datasourceDTO.getStatus());
                        } catch (Exception e) {
                            DEException.throwException(e);
                        }
                        if (jsonNode.get(apiDefinitionList.get(i).getName()) != null) {
                            status = jsonNode.get(apiDefinitionList.get(i).getName()).asText();
                        }
                        apiDefinitionList.get(i).setStatus(status);
                    }
                    if (StringUtils.isNotEmpty(status) && status.equalsIgnoreCase("Success")) {
                        success++;
                    }
                    apiDefinitionListWithStatus.add(apiDefinitionList.get(i));
                }
                datasourceDTO.setApiConfigurationStr(new String(Base64.getEncoder().encode(JsonUtil.toJSONString(apiDefinitionListWithStatus).toString().getBytes())));
                if (success == apiDefinitionList.size()) {
                    datasourceDTO.setStatus("Success");
                } else {
                    if (success > 0 && success < apiDefinitionList.size()) {
                        datasourceDTO.setStatus("Warning");
                    } else {
                        datasourceDTO.setStatus("Error");
                    }
                }
                CoreDatasourceTask coreDatasourceTask = datasourceTaskServer.selectByDSId(datasourceDTO.getId());
                TaskDTO taskDTO = new TaskDTO();
                BeanUtils.copyBean(taskDTO, coreDatasourceTask);
                datasourceDTO.setSyncSetting(taskDTO);
            }
            datasourceDTO.setConfiguration(new String(Base64.getEncoder().encode(coreDatasource.getConfiguration().getBytes())));
            datasourceDTOS.add(datasourceDTO);
        });
        return datasourceDTOS;
    }

    @Override
    public List<DatasetTableDTO> getTables(String datasourceId) throws Exception {
        CoreDatasource coreDatasource = datasourceMapper.selectById(datasourceId);
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setDatasource(coreDatasource);
        if (coreDatasource.getType().equals("API")) {
            return ApiUtils.getTables(datasourceRequest);
        }
        if (coreDatasource.getType().equals("Excel")) {
            return ExcelUtils.getTables(datasourceRequest);
        }
        return calciteProvider.getTables(datasourceRequest);
    }

    @Override
    public List<TableField> getTableField(@PathVariable("datasourceId") String datasourceId, @PathVariable("tableName") String tableName) throws Exception {
        CoreDatasource coreDatasource = datasourceMapper.selectById(datasourceId);
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setDatasource(coreDatasource);
        if (coreDatasource.getType().equals("API") || coreDatasource.getType().equals("Excel")) {
            datasourceRequest.setDatasource(engineServer.getDeEngine());
            DatasourceSchemaDTO datasourceSchemaDTO = new DatasourceSchemaDTO();
            BeanUtils.copyBean(datasourceSchemaDTO, engineServer.getDeEngine());
            datasourceSchemaDTO.setSchemaAlias(String.format(SQLConstants.SCHEMA, datasourceId));
            datasourceRequest.setDsList(Map.of(datasourceSchemaDTO.getId(), datasourceSchemaDTO));
            datasourceRequest.setQuery(TableUtils.tableName2Sql(datasourceSchemaDTO, tableName));
            List<TableField> tableFields = (List<TableField>) calciteProvider.fetchResultField(datasourceRequest).get("fields");
            return tableFields.stream().filter(tableField -> {
                return !tableField.getOriginName().equalsIgnoreCase("dataease_uuid");
            }).collect(Collectors.toList());
        }

        DatasourceSchemaDTO datasourceSchemaDTO = new DatasourceSchemaDTO();
        BeanUtils.copyBean(datasourceSchemaDTO, coreDatasource);
        datasourceSchemaDTO.setSchemaAlias(String.format(SQLConstants.SCHEMA, datasourceId));
        datasourceRequest.setDsList(Map.of(datasourceSchemaDTO.getId(), datasourceSchemaDTO));
        datasourceRequest.setQuery(TableUtils.tableName2Sql(datasourceSchemaDTO, tableName));
        return (List<TableField>) calciteProvider.fetchResultField(datasourceRequest).get("fields");
    }

    public ExcelFileData excelUpload(@RequestParam("file") MultipartFile file, @RequestParam("id") long datasourceId, @RequestParam("editType") Integer editType) throws Exception {
        ExcelUtils excelUtils = new ExcelUtils();
        ExcelFileData excelFileData = excelUtils.excelSaveAndParse(file);
        if (editType == 1) { //追加，判断是否能追加成功，按照excel sheet 名称匹配
            CoreDatasource coreDatasource = datasourceMapper.selectById(datasourceId);
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            List<DatasetTableDTO> datasetTableDTOS = ExcelUtils.getTables(datasourceRequest);
            List<ExcelSheetData> excelSheetDataList = new ArrayList<>();
            for (ExcelSheetData sheet : excelFileData.getSheets()) {
                for (DatasetTableDTO datasetTableDTO : datasetTableDTOS) {
                    if (excelDataTableName(datasetTableDTO.getTableName()).equals(sheet.getTableName())) {
                        sheet.setDeTableName(datasetTableDTO.getTableName());
                        excelSheetDataList.add(sheet);
                    }
                }

            }
            if (CollectionUtils.isEmpty(excelSheetDataList)) {
                DEException.throwException("无匹配的Sheet页!");
            }
            excelFileData.setSheets(excelSheetDataList);
        }
        return excelFileData;
    }


    public ApiDefinition checkApiDatasource(@RequestBody Map<String, String> request) throws DEException {
        ApiDefinition apiDefinition = JsonUtil.parseObject(new String(java.util.Base64.getDecoder().decode(request.get("data"))), ApiDefinition.class);
        String response = ApiUtils.execHttpRequest(apiDefinition, 10);
        return ApiUtils.checkApiDefinition(apiDefinition, response);
    }

    private void preCheckDs(DatasourceDTO datasource) throws DEException {
        if (!datasourceTypes().stream().map(DatasourceConfiguration.DatasourceType::getType).collect(Collectors.toList()).contains(datasource.getType())) {
            DEException.throwException("Datasource type not supported.");
        }
        checkName(datasource.getName(), datasource.getType(), datasource.getId());
    }

    private void checkName(String name, String type, Long id) throws DEException {
        QueryWrapper<CoreDatasource> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("name", name);
        queryWrapper.eq("type", type);
        if (id != null && id != 0) {
            queryWrapper.ne("id", id);
        }
        if (!CollectionUtils.isEmpty(datasourceMapper.selectList(queryWrapper))) {
            DEException.throwException("ds_name_exists");
        }
    }

    public void checkDatasourceStatus(CoreDatasource coreDatasource) throws DEException {
        if (coreDatasource.getType().equals(DatasourceConfiguration.DatasourceType.Excel.name()) || coreDatasource.getType().equals(DatasourceConfiguration.DatasourceType.folder.name())) {
            return;
        }
        try {
            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDatasource(coreDatasource);
            String status = null;
            if (coreDatasource.getType().equals("API")) {
                status = ApiUtils.checkStatus(datasourceRequest);
            } else {
                status = calciteProvider.checkStatus(datasourceRequest);
            }
            coreDatasource.setStatus(status);
        } catch (Exception e) {
            coreDatasource.setStatus("Error");
            DEException.throwException("校验失败: " + e.getMessage());
        }
    }


    public void updateDemoDs() {
    }

    @Override
    public Map<String, Object> previewDataWithLimit(Map<String, Object> req) throws Exception {
        String tableName = req.get("table").toString();
        DatasetGroupInfoDTO datasetGroupInfoDTO = new DatasetGroupInfoDTO();
        CoreDatasource coreDatasource = engineServer.getDeEngine();
        DatasourceSchemaDTO datasourceSchemaDTO = new DatasourceSchemaDTO();
        BeanUtils.copyBean(datasourceSchemaDTO, coreDatasource);
        datasourceSchemaDTO.setSchemaAlias(String.format(SQLConstants.SCHEMA, 0));
        List<DatasetTableFieldDTO> list = null;
        List<TableField> tableFields = null;
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setDsList(Map.of(datasourceSchemaDTO.getId(), datasourceSchemaDTO));
        datasourceRequest.setQuery(TableUtils.tableName2Sql(datasourceSchemaDTO, tableName));
        tableFields = (List<TableField>) calciteProvider.fetchResultField(datasourceRequest).get("fields");
        list = datasetDataManage.transFields(tableFields, true);
        datasetGroupInfoDTO.setAllFields(list);
        List<UnionDTO> unionDTOS = new ArrayList<>();
        UnionDTO unionDTO = new UnionDTO();
        DatasetTableDTO datasetTableDTO = new DatasetTableDTO();
        datasetTableDTO.setTableName(tableName);
        DatasetTableInfoDTO tableInfoDTO = new DatasetTableInfoDTO();
        tableInfoDTO.setTable(tableName);
        datasetTableDTO.setInfo(JsonUtil.toJSONString(tableInfoDTO).toString());
        unionDTO.setCurrentDs(datasetTableDTO);
        unionDTO.setCurrentDsFields(list);
        UnionParamDTO unionParamDTO= new UnionParamDTO();
        unionParamDTO.setUnionType("left");
        unionDTO.setUnionToParent(unionParamDTO);
        unionDTOS.add(unionDTO);
        datasetGroupInfoDTO.setUnion(unionDTOS);
        return datasetDataManage.previewDataWithLimit(datasetGroupInfoDTO, 0, 100);
    }

}
