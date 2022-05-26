// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/GlyphSource",["require","exports","../../../../request","../../../../core/pbf","../../../../core/promiseUtils"],function(u,v,n,p,q){var r=function(){function b(a){this._metrics=[];for(this._bitmaps=[];a.next();)switch(a.tag()){case 1:for(var c=a.getMessage();c.next();)switch(c.tag()){case 3:for(var d=c.getMessage(),b=void 0,e=void 0,g=void 0,h=void 0,k=void 0,l=void 0,m=void 0;d.next();)switch(d.tag()){case 1:b=d.getUInt32();break;case 2:e=d.getBytes();
break;case 3:g=d.getUInt32();break;case 4:h=d.getUInt32();break;case 5:k=d.getSInt32();break;case 6:l=d.getSInt32();break;case 7:m=d.getUInt32();break;default:d.skip()}b&&(this._metrics[b]={width:g,height:h,left:k,top:l,advance:m},this._bitmaps[b]=e);break;default:c.skip()}break;default:a.skip()}}b.prototype.getMetrics=function(a){return this._metrics[a]};b.prototype.getBitmap=function(a){return this._bitmaps[a]};return b}(),t=function(){function b(){this._ranges=[]}b.prototype.getRange=function(a){return this._ranges[a]};
b.prototype.addRange=function(a,c){this._ranges[a]=c};return b}();return function(){function b(a){this._glyphInfo={};this._baseURL=a}b.prototype.getRange=function(a,c){var b=this._getFontStack(a);if(b.getRange(c))return q.resolve();var f=256*c,e=f+255;a=this._baseURL.replace("{fontstack}",a).replace("{range}",f+"-"+e);return n(a,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(a){b.addRange(c,new r(new p(new Uint8Array(a.data),new DataView(a.data))))})};b.prototype.getGlyph=
function(a,b){if(a=this._getFontStack(a)){var c=Math.floor(b/256);if(!(256<c)&&(a=a.getRange(c)))return{metrics:a.getMetrics(b),bitmap:a.getBitmap(b)}}};b.prototype._getFontStack=function(a){var b=this._glyphInfo[a];b||(b=this._glyphInfo[a]=new t);return b};return b}()});