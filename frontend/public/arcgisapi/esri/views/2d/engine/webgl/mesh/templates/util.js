// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(a,c){return Math.sqrt(a*a+c*c)}b.dist=function(a,c){return d(a[0]-c[0],a[1]-c[1])};b.getLimitCosine=function(a){return 1/Math.max(a,1)};b.isExtent=function(a){return void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax};b.isFunction=function(a){return"function"===typeof a};b.isMultipoint=function(a){return void 0!==a.points};b.isPoint=function(a){return void 0!==a.x&&void 0!==a.y};b.isPolygon=function(a){return void 0!==a.rings};b.isPolyline=
function(a){return void 0!==a.paths};b.len=d;b.normalize=function(a){const c=d(a[0],a[1]);a[0]/=c;a[1]/=c};b.sub=function(a,c,e){a[0]=c[0]-e[0];a[1]=c[1]-e[1];return a};Object.defineProperty(b,"__esModule",{value:!0})});