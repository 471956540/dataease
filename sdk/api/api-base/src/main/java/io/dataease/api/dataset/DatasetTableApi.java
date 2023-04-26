package io.dataease.api.dataset;

import io.dataease.api.dataset.dto.DatasetTableFieldDTO;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

/**
 * @Author Junjun
 */
public interface DatasetTableApi {

    @PostMapping("save")
    DatasetTableFieldDTO save(@RequestBody DatasetTableFieldDTO datasetTableFieldDTO) throws Exception;

    @PostMapping("get/{id}")
    DatasetTableFieldDTO get(@PathVariable Long id);

    @PostMapping("listByDatasetGroup/{id}")
    List<DatasetTableFieldDTO> listByDatasetGroup(@PathVariable Long id);

    @PostMapping("delete/{id}")
    void delete(@PathVariable Long id);

    @PostMapping("listByDQ/{id}")
    Map<String, List<DatasetTableFieldDTO>> listByDQ(@PathVariable Long id);
}
