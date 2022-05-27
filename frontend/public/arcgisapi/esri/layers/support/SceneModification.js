// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/Warning ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/decorators/persistable ../../core/JSONSupport ../../geometry/Polygon ../../geometry ../../geometry/projection".split(" "),function(t,d,c,u,z,
A,k,B,v,w,x,l,y,m,C,n){var e;c=e=function(p){function f(b){b=p.call(this,b)||this;b.geometry=null;b.type="clip";return b}t._inheritsLoose(f,p);var q=f.prototype;q.writeGeometry=function(b,g,h,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!n.canProjectWithoutEngine(b.spatialReference,a.layer.spatialReference)){a&&a.messages&&a.messages.push(new v("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",
{modification:this,spatialReference:a.layer.spatialReference,context:a}));return}const r=new m;n.projectPolygon(b,r,a.layer.spatialReference);g[h]=r.toJSON(a)}else g[h]=b.toJSON(a);delete g[h].spatialReference};q.clone=function(){return new e({geometry:u.clone(this.geometry),type:this.type})};return f}(y.JSONSupport);d.__decorate([k.property({type:m}),l.persistable()],c.prototype,"geometry",void 0);d.__decorate([x.writer(["web-scene","portal-item"],"geometry")],c.prototype,"writeGeometry",null);d.__decorate([k.property({type:["clip",
"mask","replace"],nonNullable:!0}),l.persistable()],c.prototype,"type",void 0);return c=e=d.__decorate([w.subclass("esri.layers.support.SceneModification")],c)});