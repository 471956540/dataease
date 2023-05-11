package io.dataease.visualization.server;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.dataease.api.visualization.DataVisualizationApi;
import io.dataease.api.visualization.request.DataVisualizationBaseRequest;
import io.dataease.api.visualization.vo.DataVisualizationVO;
import io.dataease.chart.manage.ChartViewManege;
import io.dataease.commons.constants.DataVisualizationConstants;
import io.dataease.commons.exception.DataEaseException;
import io.dataease.utils.BeanUtils;
import io.dataease.utils.IDUtils;
import io.dataease.visualization.dao.auto.entity.DataVisualizationInfo;
import io.dataease.visualization.dao.auto.mapper.DataVisualizationInfoMapper;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/dataVisualization")
public class DataVisualizationServer implements DataVisualizationApi {

    @Resource
    private DataVisualizationInfoMapper visualizationInfoMapper;

    @Resource
    private ChartViewManege chartViewManege;

    @Override
    public DataVisualizationVO findById(Long dvId) {
        QueryWrapper<DataVisualizationInfo> wrapper = new QueryWrapper<>();
        wrapper.eq("delete_flag", 0);
        wrapper.eq("id", dvId);
        DataVisualizationInfo visualizationInfo = visualizationInfoMapper.selectOne(wrapper);
        if (visualizationInfo != null) {
            DataVisualizationVO result = new DataVisualizationVO();
            BeanUtils.copyBean(result, visualizationInfo);
            //获取视图信息
            result.setChartViewInfo(chartViewManege.listBySceneId(dvId));
            //获取视图基本信息
            return result;
        } else {
            DataEaseException.throwException("Can not find any data visualization info...");
        }
        return null;
    }

    @Override
    public void save(DataVisualizationBaseRequest request) {
        DataVisualizationInfo visualizationInfo = new DataVisualizationInfo();
        BeanUtils.copyBean(visualizationInfo, request);
        visualizationInfo.setDeleteFlag(DataVisualizationConstants.DELETE_FLAG.AVAILABLE);
        visualizationInfo.setId(IDUtils.snowID());
        visualizationInfo.setNodeType(DataVisualizationConstants.NODE_TYPE.DV);
        visualizationInfo.setCreateBy("");
        visualizationInfo.setCreateTime(System.currentTimeMillis());
        visualizationInfoMapper.insert(visualizationInfo);
    }

    @Override
    public void update(DataVisualizationBaseRequest request) {
        if (request.getId() != null) {
            request.setUpdateBy("");
            request.setUpdateTime(System.currentTimeMillis());
            DataVisualizationInfo visualizationInfo = new DataVisualizationInfo();
            BeanUtils.copyBean(visualizationInfo, request);
            visualizationInfoMapper.updateById(visualizationInfo);
        } else {
            DataEaseException.throwException("Id can not be null");
        }
    }

    @Override
    public void deleteLogic(Long dvId) {
        DataVisualizationInfo visualizationInfo = new DataVisualizationInfo();
        visualizationInfo.setDeleteBy("");
        visualizationInfo.setDeleteTime(System.currentTimeMillis());
        visualizationInfo.setDeleteFlag(DataVisualizationConstants.DELETE_FLAG.DELETED);
        visualizationInfo.setId(dvId);
        visualizationInfoMapper.updateById(visualizationInfo);
    }
}
