// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/PredictUsingTrendRaster.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"predictUsingTrendRasterIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.predictUsingTrendRaster}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.predictUsingTrendRaster}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e               \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e${i18n.toolDefine}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputMultidimensionalRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_variablesLabel"\x3e${i18n.variablesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"variables"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_variablesListLabel" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.variablesListLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv\x3e\r\n              \x3ctable class\x3d"esriFormTable"\x3e\r\n                \x3ctbody data-dojo-attach-point\x3d"_variablesList"\x3e\x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_dimensionDefinitionLabel"\x3e${i18n.dimensionDefinitionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimensionDefinition"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dimensionDefinitionSelect" data-dojo-attach-event\x3d"onChange:_handleDimensionDefinitionChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_dimensionValuesLabelRow" class\x3d"esriLeadingMargin1 dimValue"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel\x3e${i18n.dimensionValuesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimensionValues"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_dimensionIntervalLabelRow" class\x3d"esriLeadingMargin1 interval" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel\x3e${i18n.dimensionIntervalLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimensionInterval"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_startEndLabelRow" class\x3d"esriLeadingMargin1 interval" style\x3d"display:none;"\x3e\r\n          \x3ctd style\x3d"width:200px"\x3e\r\n            \x3clabel\x3e${i18n.startLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:200px"\x3e\r\n            \x3clabel\x3e${i18n.endLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_startEndValueRow" class\x3d"esriLeadingMargin1 interval" style\x3d"display:none;"\x3e\r\n          \x3ctd style\x3d"width:200px"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_startValue" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:200px"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_endValue" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalValueLabelRow" class\x3d"esriLeadingMargin1 interval" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel\x3e${i18n.intervalValueLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalValue"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalValueRow" class\x3d"interval" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_intervalValue" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalUnitLabelRow" class\x3d"esriLeadingMargin1 interval unit" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_intervalUnitLabel"\x3e${i18n.intervalUnitLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalUnit"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalUnitRow" class\x3d"interval unit" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_intervalUnitSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e         \r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e       \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/PredictUsingTrendRaster","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/connect dojo/has dojo/dom-class dojo/dom-style dojo/string dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/CheckBox dijit/form/TextBox ../../kernel ../../lang ./RasterAnalysisMixin ./utils ./AnalysisRegistry ./ItemTypes dojo/i18n!../../nls/jsapi dojo/i18n!./nls/PredictUsingTrendRaster dojo/text!./templates/PredictUsingTrendRaster.html".split(" "),
function(d,c,h,r,m,t,H,n,u,e,k,v,w,x,y,z,p,I,A,B,J,C,D,K,E,q,F,G){d=d([v,w,x,y,z,C],{declaredClass:"esri.dijit.analysis.PredictUsingTrendRaster",templateString:G,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,variables:null,variableList:null,dimensionDefinition:"BY_VALUE",dimensionValues:null,start:null,end:null,intervalValue:1,intervalUnit:"DAYS",toolName:"PredictUsingTrendRaster",helpFileName:"PredictUsingTrendRaster",toolNlsName:q.predictUsingTrendRasterTool,rasterGPToolName:"PredictUsingTrendRaster",
resultParameter:"outputMultidimensionalRaster",browseType:[E.IS],hasCustomCheck:!0,customCheckFailureMessage:q.customCheckFailureMessage.integerService,constructor:function(a,b){this._pbConnects=[];this._valueRows=[];a.containerNode&&(this.container=a.containerNode);a.rerun&&(a.inputMultidimensionalRaster=a.inputLayer)},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,F)},_getJobParameters:function(){var a=r.toJson(D.constructAnalysisInputLyrObj(this.get("inputLayer"))),
b=this.get("variables"),f=this._getDimensionValuesParam();return c.mixin({inputMultidimensionalRaster:a,variables:b},f)},_setDefaultInputs:function(){this.variables&&this._variables.set("value",this.variables);this.dimensionDefinition&&this._loadDimensionDefinition(!0);this.dimensionValues&&this._loadDimensionValues(!0);this.start&&this._startValue.set("value",this.start);this.end&&this._endValue.set("value",this.end);this.intervalValue&&this._intervalValue.set("value",this.intervalValue);this.intervalUnit&&
this._loadIntervalUnit()},_resetUI:function(){this.inputLayer&&(this.outputLayerName=u.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this.inputLayer.getMultidimensionalInfo().then(c.hitch(this,function(a){this.variableList=a.variables;this.set("variables",this.variableList);this._handleDimensionDefinitionChange(this.dimensionDefinition)})))},_loadDimensionDefinition:function(a){this._dimensionDefinitionSelect.removeOption(this._dimensionDefinitionSelect.getOptions());
a=a&&this.dimensionDefinition;this._dimensionDefinitionSelect.addOption([{value:"BY_VALUE",label:this.i18n.byValueLabel,selected:"BY_VALUE"===a},{value:"BY_INTERVAL",label:this.i18n.byIntervalLabel,selected:"BY_INTERVAL"===a}]);this._handleDimensionDefinitionChange(this.dimensionDefinition)},_loadDimensionValues:function(a){},_loadIntervalUnit:function(a){this._intervalUnitSelect.removeOption(this._intervalUnitSelect.getOptions());a=a&&this.intervalUnit;this._intervalUnitSelect.addOption([{value:"HOURS",
label:this.i18n.hours,selected:"HOURS"===a},{value:"DAYS",label:this.i18n.days,selected:"DAYS"===a},{value:"WEEKS",label:this.i18n.weeks,selected:"WEEKS"===a},{value:"MONTHS",label:this.i18n.months,selected:"MONTHS"===a},{value:"YEARS",label:this.i18n.years,selected:"YEARS"===a}])},_handleDimensionDefinitionChange:function(a){this.set("dimensionDefinition",a);var b="BY_VALUE"===a;!b||this._valueTextBox&&""===this._valueTextBox.get("value")||this._createValueRow();k(".interval",this.domNode).forEach(c.hitch(this,
function(a){this._showDiv(a,!b)}));k(".dimValue",this.domNode).forEach(c.hitch(this,function(a){this._showDiv(a,b)}));b||k(".unit",this.domNode).forEach(c.hitch(this,function(a){this._showDiv(a,this._enableUnit)}))},_showDiv:function(a,b){n.set(a,"display",b?"block":"none")},_getDimensionValuesParam:function(){var a=this.get("dimensionDefinition");if("BY_VALUE"===a)return{dimensionDefinition:a,dimensionValues:this.get("DimensionDefValues")};a={dimensionDefinition:a,start:this.get("start"),end:this.get("end"),
intervalValue:this.get("intervalValue")};return this._enableUnit?c.mixin(a,{intervalUnit:this.get("intervalUnit")}):a},_createValueRow:function(a){var b,f,l;a=e.create("tr",null,this._dimensionIntervalLabelRow,"before");b=e.create("td",null,a);b=new A({maxHeight:200,"class":"longInput esriLeadingMargin1 dimValue dimDefValue"},e.create("TextBox",null,b));m.connect(b,"onChange",this._handleDimensionValueChange);l=e.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},
a);f=e.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+require.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},l);m.connect(f,"onclick",c.hitch(this,this._removeValueRow,a));this._valueRows.push(a);b.set("removeTd",l);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);this._valueTextBox=b;return!0},_removeValueRow:function(a){h.forEach(p.findWidgets(a),function(a){a.destroyRecursive()});e.destroy(a)},_removeValueRows:function(){h.forEach(this._valueRows,
this._removeValueRow,this);this._valueRows=[]},_handleDimensionValueChange:function(a){0<a.length&&!this.get("isnewRowAdded")&&(a=this.get("removeTd"),n.set(a,"display","block"),a=this.get("referenceWidget"),c.hitch(a,a._createValueRow()),this.set("isnewRowAdded",!0))},_setInputLayersAttr:function(a){this.validateTrendInputLayers(a)},isMultidimensionalLayer:function(a){return a.hasMultidimensions},isValidInputLayer:function(a){return this.isTrendRasterLayer(a)},_getInputLayersAttr:function(){return this.inputLayers},
_setVariablesAttr:function(a){var b=" checked";this._variablesList.innerHTML="";this._enableUnit=!1;h.forEach(a,function(a){var c="",f,g;g=a.dimensions;var d=!1;g&&0<g.length&&(f=null,h.forEach(g,function(a){f=a.name+"\x3d"+a.values.length+",";c+=f;"StdTime"!==a.name||1!==a.values.length||d||(d=!0)}),c=c.slice(0,-1),g=a.name+" ["+c+"] ("+a.description+")",a=e.toDom("\x3ctr\x3e\x3ctd colspan\x3d'3'\x3e\x3clabel class\x3d'esriLeadingMargin1 esriSelectLabel'\x3e\x3cinput type\x3d'checkbox' data-dojo-type\x3d'dijit/form/CheckBox' value\x3d"+
a.name+b+"\x3e"+g+"\x3c/label\x3e\x3c/td\x3e\x3c/tr\x3e"),e.place(a,this._variablesList),b="");this._enableUnit=d},this);this._showDiv(this._variablesListLabel,0<this.variableList.length)},_getVariablesAttr:function(){var a=this._variablesList.querySelectorAll("input:checked");if(a&&0<a.length){var b=[];a.forEach(function(a){b.push(a.value)});return b.join(",")}return""},_setDimensionDefinitionAttr:function(a){this.dimensionDefinition=a},_getDimensionDefinitionAttr:function(){this._dimensionDefinitionSelect&&
this._dimensionDefinitionSelect.get("value")&&(this.dimensionDefinition=this._dimensionDefinitionSelect.get("value"));return this.dimensionDefinition},_getDimensionDefValuesAttr:function(){var a=[];k(".dimDefValue",this.domNode).forEach(function(b){b=p.byNode(b).get("value");0<b.length&&a.push(b)});return a},_setStartAttr:function(a){this.start=a;this._startValue.set("value",a)},_getStartAttr:function(){this._startValue&&this._startValue.get("value")&&(this.start=this._startValue.get("value"));return this.start},
_setEndAttr:function(a){this.end=a;this._endValue.set("value",a)},_getEndAttr:function(){this._endValue&&this._endValue.get("value")&&(this.end=this._endValue.get("value"));return this.end},_setIntervalValueAttr:function(a){this.intervalValue=a;this._intervalValue.set("value",a)},_getIntervalValueAttr:function(){this._intervalValue&&this._intervalValue.get("value")&&(this.intervalValue=this._intervalValue.get("value"));return this.intervalValue},_setIntervalUnitAttr:function(a){this.intervalUnit=
a},_getIntervalUnitAttr:function(){this._intervalUnitSelect&&this._intervalUnitSelect.get("value")&&(this.intervalUnit=this._intervalUnitSelect.get("value"));return this.intervalUnit},_setIntervalRangesAttr:function(a){this.intervalRanges=a}});t("extend-esri")&&c.setObject("dijit.analysis.PredictUsingTrendRaster",d,B);return d});