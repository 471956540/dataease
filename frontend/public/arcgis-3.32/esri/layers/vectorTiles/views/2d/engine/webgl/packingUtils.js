// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/packingUtils",["require","exports"],function(l,e){function g(a){return a-Math.floor(a)}Object.defineProperty(e,"__esModule",{value:!0});var h=[1,256,65536,16777216],k=[1/256,1/65536,1/16777216,1/4294967296],f=function(a,d){void 0===d&&(d=0);for(var c=0,b=0;4>b;b++)c+=a[d+b]*k[b];return c}(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=function(a,d,c){void 0===c&&(c=0);a=0>a?0:a>f?f:a;for(var b=0;4>b;b++)d[c+b]=Math.floor(256*g(a*h[b]))}});