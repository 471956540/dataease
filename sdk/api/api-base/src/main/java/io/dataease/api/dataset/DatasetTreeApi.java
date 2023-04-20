package io.dataease.api.dataset;

import io.dataease.api.dataset.dto.DatasetNodeDTO;
import io.dataease.api.dataset.union.DatasetGroupInfoDTO;
import io.dataease.api.dataset.vo.DatasetTreeNodeVO;
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
    List<DatasetTreeNodeVO> tree(@RequestBody DatasetNodeDTO datasetNodeDTO);

    @PostMapping("get/{id}")
    DatasetGroupInfoDTO get(@PathVariable Long id) throws Exception;

    @PostMapping("details/{id}")
    DatasetGroupInfoDTO details(@PathVariable Long id) throws Exception;
}
