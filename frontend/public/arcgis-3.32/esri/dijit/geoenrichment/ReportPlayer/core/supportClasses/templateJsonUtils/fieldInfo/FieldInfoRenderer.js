// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer",["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],function(g,h,k,d){var n=d.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,p=d.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;d=d.geoenrichment.dijit.ReportPlayer.VariableStates;var e={},f={renderPreview:function(a,c){return c.fieldData?k.getValueFromFieldData(a,
c):h.getValuePreview(a,c)},tryProvideConditionalStylePreview:function(a,c,b){a.isUnavailableData||a.conditionalStyle||b.fieldData||!(c=h.getConditionalStylePreview(c,b))||(a.conditionalStyle=b.previewConditionalStyle?c:!1)},tryProvideRangeFilterPreview:function(a,c){a.isUnavailableData||a.modifiedValue||c.fieldData||!c.presetFilter||(a.modifiedValue=h.getRangeFilterPreview(c))},tryProvideSortingPreview:function(a,c){a.isUnavailableData||c.fieldData||!c.presetSorting||(a.modifiedValue=h.getSortingPreview(c))}},
l={buildVariableLabel:function(a){function c(a,b){return!a||a.length<=b?a:a.substr(0,b-3)+"..."}function b(a,b){switch(b){case "p":b=d.statePercent_short;break;case "a":b=d.stateAverage_short;break;case "i":b=d.stateIndex_short;break;case "r":b=d.stateReliability_short;break;default:return a}return a+" ("+b+")"}return"["+(a.isWebMap?c(a.webMapFieldName,15)+"(WebMap)":a.isSiteAttribute?c(a.alias,15)+"(SiteAttribute)":a.isDataLayerAttribute?c(a.alias,15)+"(NearbyLocations)":a.isCustomDataCollection?
c(a.alias,15)+"(CustomData)":b(a.variableID,a.statefulName&&a.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(a){return"["+g.name.renderScriptName(a.name)+"]"}},m={renderRichTextFieldInfoInTableCell:function(a,c){return g.richText.createRichTextFromFieldInfo(a,function(b){var a=e.renderFieldInfoInTableCell(b,c),d=a.formattedValue;c&&c.isBenchmarked&&(b=c.getBenchmarkInfo(a.value,b),d+=" ("+(b.isGreater?"+":"-")+b.formattedValue+")");return d},function(a){return e.renderFieldInfoInTableCell(a,
c).formattedValue})}};e.renderFieldInfoInTableCell=function(a,c){c=c||{};var b={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,modifiedValue:null};if(a.isRichText)return b.formattedValue=m.renderRichTextFieldInfoInTableCell(a,c),b;if(a.isMissing)return b.formattedValue=n,b.isUnavailableData=!0,b;if(a.isUnsupportedContent)return b.formattedValue=p,b.isUnavailableData=!0,b;c.previewValues?b=f.renderPreview(a,c):b.formattedValue=a.hasVariable?l.buildVariableLabel(a):
a.script?l.buildScriptLabel(a.script):"["+a.alias+"]";if(a.hasVariable||a.script)if(f.tryProvideConditionalStylePreview(b,a,c),f.tryProvideRangeFilterPreview(b,c),f.tryProvideSortingPreview(b,c),b.formattedValue=g.format.providePercentCurrencySymbols(b.formattedValue,a,{placePercentCurrencyInFront:!c.previewValues}),b.formatFunction){var d=b.formatFunction;b.formatFunction=function(b){return g.format.providePercentCurrencySymbols(d(b),a,{placePercentCurrencyInFront:!c.previewValues})};b.conditionalStyle&&
void 0===b.conditionalStyle.formattedValue&&(b.conditionalStyle.formattedValue=b.formatFunction(b.conditionalStyle.value));b.modifiedValue&&void 0===b.modifiedValue.formattedValue&&(b.modifiedValue.formattedValue=b.formatFunction(b.modifiedValue.value))}return b};e.getConditionalStylePreview=function(a,c){var b={};f.tryProvideConditionalStylePreview(b,a,{rowIndex:c,previewConditionalStyle:!0});return b.conditionalStyle};e.renderRichTextFieldInfoInTableCell=m.renderRichTextFieldInfoInTableCell;e.getValueFromFieldData=
k.getValueFromFieldData;e.getFieldDataValue=k.getFieldDataValue;return e});