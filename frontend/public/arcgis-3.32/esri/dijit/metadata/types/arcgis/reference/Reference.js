// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/reference/templates/Reference.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n  \r\n    \x3c!-- spatial reference --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/SpatialReference"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.refSysInfo.caption}\'"\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3c!-- application schema --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/AppSchema"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.appSchInfo.caption}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- portrayal catalogue --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/PortrayalCatalogue"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.porCatInfo.caption}\'"\x3e\r\n    \x3c/div\x3e\r\n      \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/reference/Reference","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Reference.html ./SpatialReference ./AppSchema ./PortrayalCatalogue".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.reference.Reference",a,d);return a});