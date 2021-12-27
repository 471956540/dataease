package io.dataease.plugins.server;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import io.dataease.commons.utils.PageUtils;
import io.dataease.commons.utils.Pager;
import io.dataease.plugins.common.entity.XpackConditionEntity;
import io.dataease.plugins.common.entity.XpackGridRequest;
import io.dataease.plugins.config.SpringContextUtil;
import io.dataease.plugins.xpack.auth.dto.request.DataSetRowPermissionsDTO;
import io.dataease.plugins.xpack.auth.dto.request.DatasetRowPermissions;
import io.dataease.plugins.xpack.auth.service.RowPermissionService;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("plugin/dataset/rowPermissions")
public class RowPermissionsController {

    @ApiOperation("保存")
    @PostMapping("save")
    public void save(@RequestBody DatasetRowPermissions datasetRowPermissions) throws Exception {
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
        rowPermissionService.save(datasetRowPermissions);
    }

    @ApiOperation("查询")
    @PostMapping("/list")
    public List<DataSetRowPermissionsDTO> rowPermissions(@RequestBody DataSetRowPermissionsDTO request) {
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
       return rowPermissionService.searchRowPermissions(request);
    }

    @ApiOperation("删除")
    @PostMapping("/delete/{id}")
    public void dataSetRowPermissionInfo(@PathVariable String id) {
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
        rowPermissionService.delete(id);
    }

    @ApiOperation("分页查询")
    @PostMapping("/pageList/{datasetId}/{goPage}/{pageSize}")
    public Pager<List<DataSetRowPermissionsDTO>> rowPermissions(@PathVariable String datasetId, @PathVariable int goPage, @PathVariable int pageSize, @RequestBody XpackGridRequest request) {
        Page<Object> page = PageHelper.startPage(goPage, pageSize, true);
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
        List<XpackConditionEntity> conditionEntities = request.getConditions() == null ? new ArrayList<>() : request.getConditions();
        XpackConditionEntity entity = new XpackConditionEntity();
        entity.setField("dataset_row_permissions.dataset_id");
        entity.setOperator("eq");
        entity.setValue(datasetId);
        conditionEntities.add(entity);
        request.setConditions(conditionEntities);
        return PageUtils.setPageInfo(page, rowPermissionService.queryRowPermissions(request));
    }

    @ApiOperation("有权限的对象")
    @PostMapping("/authObjs")
    public List<Object> authObjs(@RequestBody DataSetRowPermissionsDTO request) {
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
        return (List<Object>) rowPermissionService.authObjs(request);
    }

    @ApiOperation("详情")
    @PostMapping("/dataSetRowPermissionInfo")
    public DataSetRowPermissionsDTO dataSetRowPermissionInfo(@RequestBody DataSetRowPermissionsDTO request) {
        RowPermissionService rowPermissionService = SpringContextUtil.getBean(RowPermissionService.class);
        return rowPermissionService.dataSetRowPermissionInfo(request);
    }

}
