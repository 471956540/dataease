// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/locator/LocatorPointsBuilder","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when esri/graphic esri/layers/GraphicsLayer esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/symbols/jsonUtils esri/geometry/jsonUtils esri/dijit/PopupTemplate ./DefaultSymbolRenderer ../_HeatMapSupport ../LayerInfoLoader ../../Projector ../../symbols/HighlightedSymbolGenerator ../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder dojo/i18n!esri/nls/jsapi".split(" "),
function(x,n,p,r,y,t,z,A,B,C,l,D,E,u,F,G,k){var H=x([y,D]);k=k.geoenrichment.dijit.ReportPlayer.ReportPlayer;var q={addLocatorPoints:function(b,a){b.locatorPointsControllers&&b.locatorPointsControllers.forEach(function(f){var d=f.getCalculatorDataArray();if(d&&d.length){var g=f.getRendererJson(b.calculatorFieldName),c=new H,e=g?z.fromJson(n.clone(g)):new t(l.getDefaultLocatorSymbol());c.setRenderer(e);var m=[],v=[],w=g?"simple"===g.type&&A.fromJson(n.clone(g.symbol)):l.getDefaultLocatorSymbol();d.forEach(function(a,
d){if(a.Point||a.Polygon){var g={},e,l,k=f.getVariableObjects().map(function(b,m){var c=b.fieldName.toLowerCase();-1!==c.indexOf("coname")&&(l=!0,e=b.fieldName);l||-1===c.indexOf("name")||(e=b.fieldName);e||0!==m||(e=b.fieldName);g[b.fieldName]=b.alias;return{label:b.alias,value:a[b.fieldName]}}),k=new C({title:"",fieldInfos:[],description:G.buildAttributesTable(null,k)}),h=n.mixin({},a);delete h.Point;delete h.Polygon;h.__pointIndex=d;h.__nameField=e;h.__fieldAliases=g;d=B.fromJson(JSON.parse(a.Point||
a.Polygon));h=new r({attributes:h});u.needProject(d,b.map)?(m.push(h),v.push(d)):(h.setGeometry(d),c.add(h));w&&h.setSymbol(w);h.setInfoTemplate(k)}});q._registerLayer(c,b.map,f,b);a.registerLayerInfo({layer:c,type:a.LOCATOR_POINTS,preferredIndex:f.getLayerIndex(b.calculatorFieldName),geometryType:d[0].Point?"esriGeometryPoint":"esriGeometryPolygon"});q._provideNameForLayer(c,f,b);p(u.projectGeometries(v,b.map),function(b){b.forEach(function(b,a){a=m[a];a.setGeometry(b);c.add(a)})})}})},_registerLayer:function(b,
a,f,d){var g=f.getRendererJson(d.calculatorFieldName);F.getHighlightSymbol({rendererJson:g,defaultHighlightSymbol:l.getDefaultLocatorSymbolHighlighted(),graphicsLayer:b}).then(function(c){var e;c&&c.frameSymbol&&(e=new r,e.setSymbol(c.frameSymbol));f.setLocatorPointsLayer(d.calculatorFieldName,b,a,{getPointIndexForGraphicFunc:function(b){return b.attributes&&b.attributes.__pointIndex},getGraphicForPointAtFunc:function(a){var c;b.graphics.some(function(b){if(b.attributes&&b.attributes.__pointIndex===
a)return c=b,!0});return c},setGraphicHighlightedFunc:function(a,d){c&&(e&&b.remove(e),!d&&a.__isHighlighted?(a.setSymbol(a.__originalSymbol),delete a.__originalSymbol,delete a.__isHighlighted):d&&!a.__isHighlighted&&(a.__originalSymbol=a.symbol,a.__isHighlighted=!0,a.setSymbol(c.getSymbol?c.getSymbol(a):c.symbol),b.remove(a),e&&(e.setGeometry(a.geometry),b.add(e)),b.add(a)))}})})},_provideNameForLayer:function(b,a,f){var d=a.getLayerUrl(),g=a.getLayerID();a=(a=a.getLayerName(f.calculatorFieldName))&&
{name:a};d?p(a||E.getInfo(d),function(a){b.name=a&&a.name||k.locatorLayerLegendTitle;b.onVisibilityChange()}):p(a||f.geClient&&f.geClient.getLayerInfo(f.countryID,g),function(a){b.name=a&&a.name||k.locatorLayerLegendTitle;b.onVisibilityChange()})},getDefaultLocatorRenderer:function(){return new t(l.getDefaultLocatorSymbol())}};return q});