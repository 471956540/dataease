// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/LayerInfoLoader",["esri/dijit/geoenrichment/utils/requests/UniversalClient","../WebMapsUtil"],function(c,d){return{_cache:{},getInfo:function(a){this._cache[a]||(this._cache[a]=c.request(a).otherwise(function(){return d.executeItemUrl({url:a})}).then(function(b){return{url:a,name:b.name,rendererJson:b.drawingInfo&&b.drawingInfo.renderer,geometryType:b.geometryType}}).otherwise(function(a){console.log(a);return null}));return this._cache[a]}}});