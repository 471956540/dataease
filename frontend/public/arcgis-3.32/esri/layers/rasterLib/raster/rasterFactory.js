// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/rasterFactory","require dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/config dojo/sniff dojo/when ../../../kernel ../../../Evented ../../../request ../../../deferredUtils ../../../urlUtils ./ImageServiceRaster ./TileServiceRaster ./TileRaster ./FunctionRaster".split(" "),function(h,A,e,l,B,C,t,q,u,D,v,w,x,y,r,z,n){h={customDrivers:[],create:function(a){if(a){var c,d,b;a.url&&(b=x.urlToObject(a.url),d=b.path,c=b.query);b=a.serviceInfo;
var g=a.rasterFxArgs||{},p=new l,f,k,m=e.hitch(this,function(c){console.error(c);this._trycustomDrivers(e.mixin({url:d},a),0,p)});if(d)if(-1===d.toLowerCase().indexOf("imageserver")&&-1===d.toLowerCase().indexOf("mapserver"))f=new z(e.mixin({},a,{url:d})),a.rasterFx&&(f=new n({rasterFx:a.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})})),k=f;else{k=new l;b=b||this._getServiceInfo(d,c);var h=e.hitch(this,function(b){b.bandCount?f=b.capabilities&&-1<b.capabilities.toLowerCase().indexOf("tileonly")?new r(e.mixin({},
{serviceInfo:b},c,a,{url:d})):new y(e.mixin({},{serviceInfo:b},c,a,{url:d})):b.tileInfo&&(f=new r(e.mixin({},{serviceInfo:b},c,this._options,{url:d})));a.rasterFx&&(f=new n({rasterFx:a.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})}));k.resolve(f)});q(b,h,m)}else k=f=new n({rasterFx:a.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})});q(k,e.hitch(this,function(a){a?a.open().then(e.hitch(this,function(b){p.resolve(a)}),m):m(Error("There is no raster to open"))}),m);return p.promise}},register:function(a){this.customDrivers=
this.customDrivers||[];0<this.customDrivers.filter(function(c){return c.sourceType===a.prototype.sourceType}).length||this.customDrivers.push(a)},_trycustomDrivers:function(a,c,d){d=d||new l;var b=this.customDrivers[c];if(b){var g=new b(a);g.open().then(e.hitch(this,function(a){d.resolve(g)}),e.hitch(this,function(b){this._trycustomDrivers(a,c+1,d)}))}else d.reject("cannot load layer "+(a&&a.url||""));return d.promise},_getServiceInfo:function(a,c){c=c||{};var d=c.bandIds;c=c.renderingRule;var b=
new l(w._dfdCanceller),e={f:"json"};d&&(e.bandIds=d);c&&(e.renderingRule=c.toJson?JSON.stringify(c.toJson()):JSON.stringify(c));b._pendingDfd=v({url:a,content:e,handleAs:"json",callbackParamName:"callback"});b._pendingDfd.then(function(a){b.callback(a)},function(a){b.errback(a)});return b.promise}};t("extend-esri")&&e.setObject("layers.rasterLib.raster.rasterFactory",h,u);return h});