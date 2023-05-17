package io.dataease.api.visualization;

import io.dataease.api.visualization.request.DataVisualizationBaseRequest;
import io.dataease.api.visualization.vo.DataVisualizationBaseVO;
import io.dataease.api.visualization.vo.DataVisualizationVO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface DataVisualizationApi {
    /**
     * 查询数据可视化大屏
     * @return
     */
    @GetMapping("/findById/{dvId}")
    DataVisualizationVO findById(@PathVariable("dvId") Long dvId);

    @PostMapping("/save")
    void save(@RequestBody DataVisualizationBaseRequest request);

    @PostMapping("/update")
    void update(@RequestBody DataVisualizationBaseRequest request);

    @DeleteMapping("/deleteLogic/{dvId}")
    void deleteLogic(@PathVariable("dvId") Long dvId);

    @PostMapping("/findTree")
    List<DataVisualizationBaseVO> findTree(@RequestBody DataVisualizationBaseRequest request);

    @PostMapping("/savaOrUpdateBase")
    void savaOrUpdateBase(@RequestBody DataVisualizationBaseRequest request);

}
