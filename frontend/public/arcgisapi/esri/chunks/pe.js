// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ./_rollupPluginBabelHelpers ../core/has ../core/promiseUtils ../assets".split(" "),function(z,a,A,B,C,D){function w(){return!!a._pe}function x(){return!!B("esri-wasm")}function y(){return u?u:u=C.create((c,e)=>{(new Promise(function(h,g){z(["./pe-wasm"],h,g)})).then(function(h){return h.peWasm}).then(({default:h})=>{h({locateFile:g=>D.getAssetUrl(`esri/geometry/support/${g}`),onAbort:g=>{e(Error(g))}}).then(g=>{v(g);c()})})})}function v(c){function e(d,b,f){d[b]=f(d[b])}a._pe=
c;a.PeDefs.init();a.PeGTlistExtended.init();a.PeNotationMgrs.init();a.PeNotationUtm.init();a.PePCSInfo.init();a.PeGCSExtent=function(d){function b(){return d.apply(this,arguments)||this}A._inheritsLoose(b,d);b.prototype.destroy=function(){a._pe.destroy(this)};return b}(a._pe.PeGCSExtent);c=[a._pe.PeDatum,a._pe.PeGeogcs,a._pe.PeGeogtran,a._pe.PeObject,a._pe.PeParameter,a._pe.PePrimem,a._pe.PeProjcs,a._pe.PeSpheroid,a._pe.PeUnit];for(var h of c)e(h.prototype,"getName",d=>function(){return d.call(this,
Array(a.PeDefs.PE_NAME_MAX))});for(const d of[a._pe.PeGeogtran,a._pe.PeProjcs])e(d.prototype,"getParameters",b=>function(){const f=Array(a.PeDefs.PE_PARM_MAX);let k=b.call(this);for(let l=0;l<f.length;l++){const m=a._pe.getValue(k,"*");f[l]=m?a._pe.wrapPointer(m,a._pe.PeParameter):null;k+=Int32Array.BYTES_PER_ELEMENT}return f});e(a._pe.PeHorizon.prototype,"getCoord",d=>function(){const b=this.getSize();if(!b)return null;const f=[],k=d.call(this);q(f,b,k);return f});e(a._pe.PeGTlistExtendedEntry.prototype,
"getEntries",d=>{const b=a._pe._pe_getPeGTlistExtendedGTsSize();return function(){let f=null;var k=d.call(this);if(!a._pe.compare(k,a._pe.NULL)){f=[k];const l=this.getSteps();if(1<l){k=a._pe.getPointer(k);for(let m=1;m<l;m++)f.push(a._pe.wrapPointer(k+b*m,a._pe.PeGTlistExtendedGTs))}}return f}});const g=a._pe._pe_getPeHorizonSize();h=d=>function(){let b=this._cache;b||(this._cache=b=new Map);if(b.has(d))return b.get(d);let f=null;var k=d.call(this);if(!a._pe.compare(k,a._pe.NULL)){f=[k];const l=k.getNump();
if(1<l){k=a._pe.getPointer(k);for(let m=1;m<l;m++)f.push(a._pe.wrapPointer(k+g*m,a._pe.PeHorizon))}}b.set(d,f);return f};e(a._pe.PeProjcs.prototype,"horizonGcsGenerate",h);e(a._pe.PeProjcs.prototype,"horizonPcsGenerate",h);a._pe.PeObject.prototype.toString=function(d=a.PeDefs.PE_STR_OPTS_NONE){a._pe.ensureCache.prepare();const b=a._pe.getPointer(this),f=a._pe.ensureInt8(Array(a.PeDefs.PE_BUFFER_MAX));return a._pe.UTF8ToString(a._pe._pe_object_to_string_ext(b,d,f))}}function n(c){if(c){var e=a._pe.getClass(c);
e&&(e=a._pe.getCache(e))&&(c=a._pe.getPointer(c))&&delete e[c]}}function t(c,e){const h=[];e=Array(e);for(let g=0;g<c;g++)h.push(a._pe.ensureInt8(e));return h}function r(c){let e;Array.isArray(c[0])?(e=[],c.forEach(h=>{e.push(h[0],h[1])})):e=c;return e}function q(c,e,h,g=!1){if(g)for(g=0;g<2*e;g++)c[g]=a._pe.getValue(h+g*Float64Array.BYTES_PER_ELEMENT,"double");else{g=0===c.length;for(let d=0;d<e;d++)g&&(c[d]=Array(2)),c[d][0]=a._pe.getValue(h,"double"),c[d][1]=a._pe.getValue(h+Float64Array.BYTES_PER_ELEMENT,
"double"),h+=2*Float64Array.BYTES_PER_ELEMENT}}let u;a._pe=null;(function(c){function e(d,b,f){a._pe.ensureCache.prepare();var k=r(f);const l=f===k;k=a._pe.ensureFloat64(k);(d=a._pe._pe_geog_to_proj(a._pe.getPointer(d),b,k))&&q(f,b,k,l);return d}function h(d,b,f){return g(d,b,f,0)}function g(d,b,f,k){a._pe.ensureCache.prepare();var l=r(f);const m=f===l;l=a._pe.ensureFloat64(l);(d=a._pe._pe_proj_to_geog_center(a._pe.getPointer(d),b,l,k))&&q(f,b,l,m);return d}c.geogToProj=e;c.projGeog=function(d,b,
f,k){switch(k){case a.PeDefs.PE_TRANSFORM_P_TO_G:return h(d,b,f);case a.PeDefs.PE_TRANSFORM_G_TO_P:return e(d,b,f)}return 0};c.projToGeog=h;c.projToGeogCenter=g})(a.PeCSTransformations||(a.PeCSTransformations={}));(function(c){c.init=function(){c.PE_BUFFER_MAX=a._pe.PeDefs.prototype.PE_BUFFER_MAX;c.PE_NAME_MAX=a._pe.PeDefs.prototype.PE_NAME_MAX;c.PE_MGRS_MAX=a._pe.PeDefs.prototype.PE_MGRS_MAX;c.PE_USNG_MAX=a._pe.PeDefs.prototype.PE_USNG_MAX;c.PE_DD_MAX=a._pe.PeDefs.prototype.PE_DD_MAX;c.PE_DDM_MAX=
a._pe.PeDefs.prototype.PE_DDM_MAX;c.PE_DMS_MAX=a._pe.PeDefs.prototype.PE_DMS_MAX;c.PE_UTM_MAX=a._pe.PeDefs.prototype.PE_UTM_MAX;c.PE_PARM_MAX=a._pe.PeDefs.prototype.PE_PARM_MAX;c.PE_TYPE_NONE=a._pe.PeDefs.prototype.PE_TYPE_NONE;c.PE_TYPE_GEOGCS=a._pe.PeDefs.prototype.PE_TYPE_GEOGCS;c.PE_TYPE_PROJCS=a._pe.PeDefs.prototype.PE_TYPE_PROJCS;c.PE_TYPE_GEOGTRAN=a._pe.PeDefs.prototype.PE_TYPE_GEOGTRAN;c.PE_TYPE_COORDSYS=a._pe.PeDefs.prototype.PE_TYPE_COORDSYS;c.PE_TYPE_UNIT=a._pe.PeDefs.prototype.PE_TYPE_UNIT;
c.PE_STR_OPTS_NONE=a._pe.PeDefs.prototype.PE_STR_OPTS_NONE;c.PE_STR_AUTH_NONE=a._pe.PeDefs.prototype.PE_STR_AUTH_NONE;c.PE_STR_AUTH_TOP=a._pe.PeDefs.prototype.PE_STR_AUTH_TOP;c.PE_STR_NAME_CANON=a._pe.PeDefs.prototype.PE_STR_NAME_CANON;c.PE_PARM_X0=a._pe.PeDefs.prototype.PE_PARM_X0;c.PE_PARM_ND=a._pe.PeDefs.prototype.PE_PARM_ND;c.PE_TRANSFORM_1_TO_2=a._pe.PeDefs.prototype.PE_TRANSFORM_1_TO_2;c.PE_TRANSFORM_2_TO_1=a._pe.PeDefs.prototype.PE_TRANSFORM_2_TO_1;c.PE_TRANSFORM_P_TO_G=a._pe.PeDefs.prototype.PE_TRANSFORM_P_TO_G;
c.PE_TRANSFORM_G_TO_P=a._pe.PeDefs.prototype.PE_TRANSFORM_G_TO_P;c.PE_HORIZON_RECT=a._pe.PeDefs.prototype.PE_HORIZON_RECT;c.PE_HORIZON_POLY=a._pe.PeDefs.prototype.PE_HORIZON_POLY;c.PE_HORIZON_LINE=a._pe.PeDefs.prototype.PE_HORIZON_LINE;c.PE_HORIZON_DELTA=a._pe.PeDefs.prototype.PE_HORIZON_DELTA}})(a.PeDefs||(a.PeDefs={}));(function(c){function e(b,f){let k=null,l=g[b];l||(l={},g[b]=l);l.hasOwnProperty(String(f))?k=l[f]:(b=a._pe.PeFactory.prototype.factoryByType(b,f),a._pe.compare(b,a._pe.NULL)||(k=
b,l[f]=k));return k=h(k)}function h(b){if(b){const f=b.getType();switch(f){case a.PeDefs.PE_TYPE_GEOGCS:b=a._pe.castObject(b,a._pe.PeGeogcs);break;case a.PeDefs.PE_TYPE_PROJCS:b=a._pe.castObject(b,a._pe.PeProjcs);break;case a.PeDefs.PE_TYPE_GEOGTRAN:b=a._pe.castObject(b,a._pe.PeGeogtran);break;default:f&a.PeDefs.PE_TYPE_UNIT&&(b=a._pe.castObject(b,a._pe.PeUnit))}}return b}const g={},d={};c.initialize=function(){a._pe.PeFactory.prototype.initialize(null)};c.coordsys=function(b){return e(a.PeDefs.PE_TYPE_COORDSYS,
b)};c.factoryByType=e;c.fromString=function(b,f){let k=null,l=d[b];l||(l={},d[b]=l);l.hasOwnProperty(f)?k=l[f]:(b=a._pe.PeFactory.prototype.fromString(b,f),a._pe.compare(b,a._pe.NULL)||(k=b,l[f]=k));return k=h(k)};c.geogcs=function(b){return e(a.PeDefs.PE_TYPE_GEOGCS,b)};c.geogtran=function(b){return e(a.PeDefs.PE_TYPE_GEOGTRAN,b)};c.getCode=function(b){return a._pe.PeFactory.prototype.getCode(b)};c.projcs=function(b){return e(a.PeDefs.PE_TYPE_PROJCS,b)};c.unit=function(b){return e(a.PeDefs.PE_TYPE_UNIT,
b)}})(a.PeFactory||(a.PeFactory={}));a.PeGCSExtent=null;(function(c){let e;c.init=function(){c.PE_GTLIST_OPTS_COMMON=a._pe.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON;e=a._pe._pe_getPeGTlistExtendedEntrySize()};c.getGTlist=function(h,g,d,b,f,k){let l=null;const m=new a._pe.PeInteger(k);try{const p=a._pe.PeGTlistExtended.prototype.getGTlist(h,g,d,b,f,m);if(k=m.val)if(l=[p],1<k){const E=a._pe.getPointer(p);for(h=1;h<k;h++)l.push(a._pe.wrapPointer(E+e*h,a._pe.PeGTlistExtendedEntry))}}finally{a._pe.destroy(m)}return l}})(a.PeGTlistExtended||
(a.PeGTlistExtended={}));(function(c){c.destroy=function(e){if(e&&e.length){for(const h of e)n(h),h.getEntries().forEach(g=>{n(g);g=g.getGeogtran();n(g);g.getParameters().forEach(n);[g.getGeogcs1(),g.getGeogcs2()].forEach(d=>{n(d);const b=d.getDatum();n(b);n(b.getSpheroid());n(d.getPrimem());n(d.getUnit())})});a._pe.PeGTlistExtendedEntry.prototype.Delete(e[0])}}})(a.PeGTlistExtendedEntry||(a.PeGTlistExtendedEntry={}));(function(c){c.geogToGeog=function(e,h,g,d,b){a._pe.ensureCache.prepare();var f=
r(g);const k=g===f;f=a._pe.ensureFloat64(f);let l=0;d&&(l=a._pe.ensureFloat64(d));(e=a._pe._pe_geog_to_geog(a._pe.getPointer(e),h,f,l,b))&&q(g,h,f,k);return e}})(a.PeGTTransformations||(a.PeGTTransformations={}));(function(c){function e(g,d,b,f,k,l){a._pe.ensureCache.prepare();switch(g){case "dd":var m=a._pe._pe_geog_to_dd;var p=a.PeDefs.PE_DD_MAX;break;case "ddm":m=a._pe._pe_geog_to_ddm;p=a.PeDefs.PE_DDM_MAX;break;case "dms":m=a._pe._pe_geog_to_dms,p=a.PeDefs.PE_DMS_MAX}g=0;d&&(g=a._pe.getPointer(d));
d=r(f);d=a._pe.ensureFloat64(d);p=t(b,p);f=a._pe.ensureInt32(p);if(k=m(g,b,d,k,f))for(m=0;m<b;m++)l[m]=a._pe.UTF8ToString(p[m]);return k}function h(g,d,b,f,k){a._pe.ensureCache.prepare();switch(g){case "dd":var l=a._pe._pe_dd_to_geog;break;case "ddm":l=a._pe._pe_ddm_to_geog;break;case "dms":l=a._pe._pe_dms_to_geog}g=0;d&&(g=a._pe.getPointer(d));d=f.map(m=>a._pe.ensureString(m));f=a._pe.ensureInt32(d);d=a._pe.ensureFloat64(Array(2*b));(l=l(g,b,f,d))&&q(k,b,d);return l}c.geog_to_dms=function(g,d,b,
f,k){return e("dms",g,d,b,f,k)};c.dms_to_geog=function(g,d,b,f){return h("dms",g,d,b,f)};c.geog_to_ddm=function(g,d,b,f,k){return e("ddm",g,d,b,f,k)};c.ddm_to_geog=function(g,d,b,f){return h("ddm",g,d,b,f)};c.geog_to_dd=function(g,d,b,f,k){return e("dd",g,d,b,f,k)};c.dd_to_geog=function(g,d,b,f){return h("dd",g,d,b,f)}})(a.PeNotationDms||(a.PeNotationDms={}));(function(c){c.init=function(){c.PE_MGRS_STYLE_NEW=a._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW;c.PE_MGRS_STYLE_OLD=a._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD;
c.PE_MGRS_STYLE_AUTO=a._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO;c.PE_MGRS_180_ZONE_1_PLUS=a._pe.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS;c.PE_MGRS_ADD_SPACES=a._pe.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES};c.geog_to_mgrs_extended=function(e,h,g,d,b,f,k){a._pe.ensureCache.prepare();let l=0;e&&(l=a._pe.getPointer(e));e=r(g);g=a._pe.ensureFloat64(e);e=t(h,a.PeDefs.PE_MGRS_MAX);const m=a._pe.ensureInt32(e);if(d=a._pe._pe_geog_to_mgrs_extended(l,h,g,d,b,f,m))for(b=0;b<h;b++)k[b]=a._pe.UTF8ToString(e[b]);
return d};c.mgrs_to_geog_extended=function(e,h,g,d,b){a._pe.ensureCache.prepare();let f=0;e&&(f=a._pe.getPointer(e));e=g.map(k=>a._pe.ensureString(k));g=a._pe.ensureInt32(e);e=a._pe.ensureFloat64(Array(2*h));(d=a._pe._pe_mgrs_to_geog_extended(f,h,g,d,e))&&q(b,h,e);return d}})(a.PeNotationMgrs||(a.PeNotationMgrs={}));(function(c){c.geog_to_usng=function(e,h,g,d,b,f,k){a._pe.ensureCache.prepare();let l=0;e&&(l=a._pe.getPointer(e));e=r(g);g=a._pe.ensureFloat64(e);e=t(h,a.PeDefs.PE_MGRS_MAX);const m=
a._pe.ensureInt32(e);if(d=a._pe._pe_geog_to_usng(l,h,g,d,b,f,m))for(b=0;b<h;b++)k[b]=a._pe.UTF8ToString(e[b]);return d};c.usng_to_geog=function(e,h,g,d){a._pe.ensureCache.prepare();var b=0;e&&(b=a._pe.getPointer(e));e=g.map(f=>a._pe.ensureString(f));g=a._pe.ensureInt32(e);e=a._pe.ensureFloat64(Array(2*h));(b=a._pe._pe_usng_to_geog(b,h,g,e))&&q(d,h,e);return b}})(a.PeNotationUsng||(a.PeNotationUsng={}));(function(c){c.init=function(){c.PE_UTM_OPTS_NONE=a._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NONE;
c.PE_UTM_OPTS_ADD_SPACES=a._pe.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES;c.PE_UTM_OPTS_NS=a._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NS};c.geog_to_utm=function(e,h,g,d,b){a._pe.ensureCache.prepare();var f=0;e&&(f=a._pe.getPointer(e));e=r(g);g=a._pe.ensureFloat64(e);e=t(h,a.PeDefs.PE_UTM_MAX);const k=a._pe.ensureInt32(e);if(d=a._pe._pe_geog_to_utm(f,h,g,d,k))for(f=0;f<h;f++)b[f]=a._pe.UTF8ToString(e[f]);return d};c.utm_to_geog=function(e,h,g,d,b){a._pe.ensureCache.prepare();let f=0;e&&(f=a._pe.getPointer(e));
e=g.map(k=>a._pe.ensureString(k));g=a._pe.ensureInt32(e);e=a._pe.ensureFloat64(Array(2*h));(d=a._pe._pe_utm_to_geog(f,h,g,d,e))&&q(b,h,e);return d}})(a.PeNotationUtm||(a.PeNotationUtm={}));(function(c){const e=new Map;c.init=function(){c.PE_PCSINFO_OPTION_NONE=a._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE;c.PE_PCSINFO_OPTION_DOMAIN=a._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN;c.PE_POLE_OUTSIDE_BOUNDARY=a._pe.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY;c.PE_POLE_POINT=a._pe.PePCSInfo.prototype.PE_POLE_POINT};
c.generate=function(h,g=c.PE_PCSINFO_OPTION_DOMAIN){let d,b;e.has(h)&&(b=e.get(h),b[g]&&(d=b[g]));d||(d=a._pe.PePCSInfo.prototype.generate(h,g),b||(b=[],e.set(h,b)),b[g]=d);return d}})(a.PePCSInfo||(a.PePCSInfo={}));(function(c){c.version_string=function(){return a._pe.PeVersion.prototype.version_string()}})(a.PeVersion||(a.PeVersion={}));var F=Object.freeze({__proto__:null,get _pe(){return a._pe},isLoaded:w,isSupported:x,load:y,get PeCSTransformations(){return a.PeCSTransformations},get PeDefs(){return a.PeDefs},
get PeFactory(){return a.PeFactory},get PeGCSExtent(){return a.PeGCSExtent},get PeGTlistExtended(){return a.PeGTlistExtended},get PeGTlistExtendedEntry(){return a.PeGTlistExtendedEntry},get PeGTTransformations(){return a.PeGTTransformations},get PeNotationDms(){return a.PeNotationDms},get PeNotationMgrs(){return a.PeNotationMgrs},get PeNotationUsng(){return a.PeNotationUsng},get PeNotationUtm(){return a.PeNotationUtm},get PePCSInfo(){return a.PePCSInfo},get PeVersion(){return a.PeVersion},_init:v});
a._init=v;a.isLoaded=w;a.isSupported=x;a.load=y;a.pe=F});