package io.dataease.engine.trans;

import io.dataease.api.chart.dto.ChartViewFieldDTO;
import io.dataease.dataset.dao.auto.entity.CoreDatasetTableField;
import io.dataease.engine.constant.DeTypeConstants;
import io.dataease.engine.constant.ExtFieldConstant;
import io.dataease.engine.constant.SQLConstants;
import io.dataease.engine.model.SQLMeta;
import io.dataease.engine.model.SQLObj;
import io.dataease.engine.utils.Utils;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author Junjun
 */
public class Dimension2SQLObj {

    public static void dimension2sqlObj(SQLMeta meta, List<ChartViewFieldDTO> fields, List<CoreDatasetTableField> calcFields) {
        SQLObj tableObj = meta.getTable();
        if (ObjectUtils.isEmpty(tableObj)) {
            return;
        }
        List<SQLObj> xFields = new ArrayList<>();
        List<SQLObj> xOrders = new ArrayList<>();
        if (!CollectionUtils.isEmpty(fields)) {
            for (int i = 0; i < fields.size(); i++) {
                ChartViewFieldDTO x = fields.get(i);
                String originField;
                if (ObjectUtils.isNotEmpty(x.getExtField()) && x.getExtField() == ExtFieldConstant.EXT_CALC) {
                    // 解析origin name中有关联的字段生成sql表达式
                    originField = Utils.calcFieldRegex(x.getOriginName(), tableObj, calcFields);
                } else if (ObjectUtils.isNotEmpty(x.getExtField()) && x.getExtField() == ExtFieldConstant.EXT_COPY) {
                    originField = String.format(SQLConstants.FIELD_NAME, tableObj.getTableAlias(), x.getDataeaseName());
                } else {
                    originField = String.format(SQLConstants.FIELD_NAME, tableObj.getTableAlias(), x.getDataeaseName());
                }
                String fieldAlias = String.format(SQLConstants.FIELD_ALIAS_X_PREFIX, i);
                // 处理横轴字段
                xFields.add(getXFields(x, originField, fieldAlias));

                // 处理横轴排序
                if (StringUtils.isNotEmpty(x.getSort()) && Utils.joinSort(x.getSort())) {
                    xOrders.add(SQLObj.builder()
                            .orderField(originField)
                            .orderAlias(fieldAlias)
                            .orderDirection(x.getSort())
                            .build());
                }
            }
        }
        meta.setXFields(xFields);
        meta.setXOrders(xOrders);
    }

    private static SQLObj getXFields(ChartViewFieldDTO x, String originField, String fieldAlias) {
        String fieldName = "";
        if (x.getDeExtractType() == 1) {
            if (x.getDeType() == 2 || x.getDeType() == 3) {
                fieldName = String.format(SQLConstants.UNIX_TIMESTAMP, originField) + "*1000";
            } else if (x.getDeType() == 1) {
                String format = Utils.transDateFormat(x.getDateStyle(), x.getDatePattern());
                if (StringUtils.equalsIgnoreCase(x.getDateStyle(), "y_Q")) {
                    fieldName = String.format(format,
                            String.format(SQLConstants.DATE_FORMAT, originField, "%Y"),
                            String.format(SQLConstants.QUARTER, originField));
                } else {
                    fieldName = String.format(SQLConstants.DATE_FORMAT, originField, format);
                }
            } else {
                fieldName = originField;
            }
        } else {
            if (x.getDeType() == 1) {
                String format = Utils.transDateFormat(x.getDateStyle(), x.getDatePattern());
                if (x.getDeExtractType() == 0) {
                    if (StringUtils.equalsIgnoreCase(x.getDateStyle(), "y_Q")) {
                        fieldName = String.format(format,
                                String.format(SQLConstants.DATE_FORMAT, String.format(SQLConstants.STR_TO_DATE, originField, SQLConstants.DEFAULT_DATE_FORMAT), "%Y"),
                                String.format(SQLConstants.QUARTER, String.format(SQLConstants.STR_TO_DATE, originField, SQLConstants.DEFAULT_DATE_FORMAT)));
                    } else {
                        fieldName = String.format(SQLConstants.DATE_FORMAT, originField, format);
                    }
                } else {
                    String cast = String.format(SQLConstants.CAST, originField, SQLConstants.DEFAULT_INT_FORMAT) + "/1000";
                    String from_unixtime = String.format(SQLConstants.FROM_UNIXTIME, cast, SQLConstants.DEFAULT_DATE_FORMAT);
                    if (StringUtils.equalsIgnoreCase(x.getDateStyle(), "y_Q")) {
                        fieldName = String.format(format,
                                String.format(SQLConstants.DATE_FORMAT, from_unixtime, "%Y"),
                                String.format(SQLConstants.QUARTER, from_unixtime));
                    } else {
                        fieldName = String.format(SQLConstants.DATE_FORMAT, from_unixtime, format);
                    }
                }
            } else if (x.getDeType() == 0 && x.getDeExtractType() == 0) {
                fieldName = String.format(SQLConstants.CAST, originField, SQLConstants.CHAR);
            } else {
                if (x.getDeType() == DeTypeConstants.DE_INT) {
                    fieldName = String.format(SQLConstants.CAST, originField, SQLConstants.DEFAULT_INT_FORMAT);
                } else if (x.getDeType() == DeTypeConstants.DE_FLOAT) {
                    fieldName = String.format(SQLConstants.CAST, originField, SQLConstants.DEFAULT_FLOAT_FORMAT);
                } else {
                    fieldName = originField;
                }
            }
        }
        return SQLObj.builder()
                .fieldName(fieldName)
                .fieldAlias(fieldAlias)
                .build();
    }

}
