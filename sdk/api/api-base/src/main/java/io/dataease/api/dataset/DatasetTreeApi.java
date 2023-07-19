package io.dataease.api.dataset;

import io.dataease.api.dataset.dto.DatasetNodeDTO;
import io.dataease.api.dataset.dto.DatasetTableDTO;
import io.dataease.api.dataset.union.DatasetGroupInfoDTO;
import io.dataease.api.dataset.vo.DataSetBarVO;
import io.dataease.model.BusiNodeRequest;
import io.dataease.model.BusiNodeVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface DatasetTreeApi {

    @PostMapping("save")
    DatasetNodeDTO save(@RequestBody DatasetGroupInfoDTO dto) throws Exception;

    @PostMapping("delete/{id}")
    void delete(@PathVariable Long id);


    @PostMapping("tree")
    List<BusiNodeVO> tree(@RequestBody BusiNodeRequest request);

    @GetMapping("/barInfo/{id}")
    DataSetBarVO barInfo(@PathVariable("id") Long id);

    @PostMapping("get/{id}")
    DatasetGroupInfoDTO get(@PathVariable Long id) throws Exception;

    @PostMapping("details/{id}")
    DatasetGroupInfoDTO details(@PathVariable Long id) throws Exception;

    @PostMapping("dsDetails")
    List<DatasetTableDTO> panelGetDsDetails(@RequestBody List<Long> ids) throws Exception;
}
