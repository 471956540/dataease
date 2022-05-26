// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/geometry/Polyline","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ./Point ./Extent ../srUtils".split(" "),function(c,l,e,C,B,h,k,D,y,z,E){function A(){}function f(){}k={type:"polyline",paths:null};c=c(D,{declaredClass:"esri.geometry.Polyline",type:"polyline",paths:null,constructor:function(a){this.paths=[];this._path=0;a&&(e.isArray(a)?this.paths=e.isArray(a[0][0])?a:[a]:a.paths?h.mixin(this,a):this.spatialReference=a,this.spatialReference&&
(this.spatialReference=E.createSpatialReference(this.spatialReference)));this.verifySR()},addPath:function(a){this.clearCache();this._path=this.paths.length;this.paths[this._path]=[];e.isArray(a[0])?l.forEach(a,this._addPointArr,this):l.forEach(a,this._addPoint,this);return this},_addPointArr:function(a){this.paths[this._path].push(a)},_addPoint:function(a){this.paths[this._path].push([a.x,a.y])},_insertPoints:function(a,b){this.clearCache();this._path=b;this.paths[this._path]||(this.paths[this._path]=
[]);l.forEach(a,this._addPoint,this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.paths.length)||null!==b&&void 0!==a&&(0>b||b>=this.paths[a].length)?!1:!0},getPoint:function(a,b){if(this._validateInputs(a,b))return new y(this.paths[a][b],this.spatialReference)},setPoint:function(a,b,d){if(this._validateInputs(a,b))return this.clearCache(),this.paths[a][b]=[d.x,d.y],this},insertPoint:function(a,b,d){if(this._validateInputs(a)&&null!=b&&0<=b&&b<=this.paths[a].length)return this.clearCache(),
this.paths[a].splice(b,0,[d.x,d.y]),this},removePath:function(a){if(this._validateInputs(a,null)){this.clearCache();a=this.paths.splice(a,1)[0];var b,d=a.length,g=this.spatialReference;for(b=0;b<d;b++)a[b]=new y(a[b],g);return a}},removePoint:function(a,b){if(this._validateInputs(a,b))return this.clearCache(),new y(this.paths[a].splice(b,1)[0],this.spatialReference)},getExtent:function(){var a;a=this.getCacheValue("_extent");var b=this.getCacheValue("_partwise");if(a)return a=new z(a),a._partwise=
b,a;a=this.paths;var d=a.length;if(d&&a[0].length){var g,c,m,e,f,n,p,l,h=e=a[0][0][0],k=f=a[0][0][1],q=Math.min,r=Math.max,t=this.spatialReference,b=[],u,v,w,x;for(n=0;n<d;n++){g=a[n];u=v=g[0]&&g[0][0];w=x=g[0]&&g[0][1];l=g.length;for(p=0;p<l;p++)c=g[p],m=c[0],c=c[1],h=q(h,m),k=q(k,c),e=r(e,m),f=r(f,c),u=q(u,m),w=q(w,c),v=r(v,m),x=r(x,c);b.push(new z({xmin:u,ymin:w,xmax:v,ymax:x,spatialReference:t?t.toJson():null}))}a={xmin:h,ymin:k,xmax:e,ymax:f,spatialReference:t?t.toJson():null};b=1<b.length?b:
null;this.setCacheValue("_extent",a);this.setCacheValue("_partwise",b);a=new z(a);a._partwise=b;return a}},toJson:function(){var a={paths:h.clone3DArray(this.paths)},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});A.prototype=c.prototype;f.prototype=new A;Object.defineProperty(f.prototype,"paths",{get:function(){this._unquantizeFn&&(this._pathsVal=this._unquantizeFn({paths:h.clone3DArray(this._pathsVal)}).paths,this._unquantizeFn=null);return this._pathsVal},set:function(a){this._pathsVal=
a}});f.prototype.setupLazyUnquantization=function(a,b){this._unquantizeFn=a;this._pathsVal=b.paths};c.simpleConstructor=A;c.accessorConstructor=f;c.defaultProps=k;C("extend-esri")&&(e.setObject("geometry.Polyline",c,B),B.geometry.defaultPolyline=k);return c});