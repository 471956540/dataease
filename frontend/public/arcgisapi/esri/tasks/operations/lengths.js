// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../core/jsonMap"],function(c,g){const h=new g.JSONMap({preserveShape:"preserve-shape"});c.lengthsToRESTParameters=function(a){const {polylines:k,lengthUnit:d,geodesic:e,calculationType:f}=a.toJSON(),b={};b.polylines=JSON.stringify(k);a=a.polylines[0].spatialReference;b.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON());d&&(b.lengthUnit=d);e&&(b.geodesic=e);f&&(b.calculationType=h.toJSON(f));return b};Object.defineProperty(c,"__esModule",{value:!0})});