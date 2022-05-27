// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../geometry/Point ../../../../core/mathUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../geometry/projectionEllipsoid ../debugFlags ../PropertiesPool ./PointOfInterest".split(" "),
function(d,l,f,E,F,G,h,H,t,I,J,K,u,n,m,e,v,w,x,y){const z=Array;d.CenterOnSurface=function(p){function k(a){a=p.call(this,a)||this;a._propertiesPool=new x.PropertiesPool({location:u,renderLocation:z},l._assertThisInitialized(a));a._currentSurfaceAltitude=0;a._latestSurfaceAltitude=0;a.distance=0;a.renderLocation=m.create();a.updating=!1;return a}l._inheritsLoose(k,p);var g=k.prototype;g.initialize=function(){this._frameWorker=this.scheduler.registerTask(this.task,()=>this._measureSurfaceAltitude(),
()=>this.updating);this._measureSurfaceAltitude()};g.destroy=function(){this._frameWorker&&(this._frameWorker.remove(),this._frameWorker=null);this._propertiesPool.destroy();this._propertiesPool=null};g.updateRenderLocation=function(){this._set("updating",!0);this._updateRenderLocation()};g.update=function(){this._measureSurfaceAltitude();this._updateRenderLocation()};g._measureSurfaceAltitude=function(){this._latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter();this._updateRenderLocation();
this._set("updating",!1)};g._updateRenderLocation=function(){const a=A;var b=this.calculateSurfaceIntersection(this._currentSurfaceAltitude,a),c=this._currentSurfaceAltitude!==this._latestSurfaceAltitude;!b&&c&&(b=this.calculateSurfaceIntersection(this._latestSurfaceAltitude,a))&&(this._currentSurfaceAltitude=this._latestSurfaceAltitude);c=B;b&&this.latestSurfaceAltitudeChangesDistanceSignificantly(a,c)&&(e.copy(a,c),this._currentSurfaceAltitude=this._latestSurfaceAltitude);b?(b=e.distance(this.state.camera.eye,
a),b!==this._get("distance")&&this._set("distance",b)):(b=this.state.camera,e.scale(a,b.viewForward,this._get("distance")),e.add(a,a,b.eye));e.exactEquals(this._get("renderLocation"),a)||this._set("renderLocation",e.copy(this._propertiesPool.get("renderLocation"),a))};g.calculateSurfaceIntersection=function(a,b){var c=this.state.camera;if(!this.renderCoordsHelper.intersectManifold(c.ray,a,b))return!1;if(this.state.isGlobal){const q=v.getReferenceEllipsoid(this.renderCoordsHelper.spatialReference).radius;
a=q+a;const r=e.squaredLength(c.eye),C=r<a*a,D=e.distance(c.eye,b);C&&D>q/4&&(e.scale(b,c.viewForward,a-Math.sqrt(r)),e.add(b,b,c.eye))}else if(c=this.surface.ready&&this.surface.extent)b[0]=n.clamp(b[0],c[0],c[2]),b[1]=n.clamp(b[1],c[1],c[3]);return!0};g.latestSurfaceAltitudeChangesDistanceSignificantly=function(a,b){if(this._latestSurfaceAltitude===this._currentSurfaceAltitude||null==a)return!1;if(this.calculateSurfaceIntersection(this._latestSurfaceAltitude,b)){const c=this.state.camera.eye;a=
e.distance(c,a);b=e.distance(c,b);if(w.TESTS_DISABLE_UPDATE_THRESHOLDS||.05<Math.abs(b-a)/a)return!0}return!1};l._createClass(k,[{key:"location",get:function(){const a=this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,a,this.state.spatialReference);return a}},{key:"estimatedSurfaceAltitude",get:function(){return this._latestSurfaceAltitude}}]);return k}(y.PointOfInterest);f.__decorate([h.property({constructOnly:!0})],d.CenterOnSurface.prototype,"scheduler",
void 0);f.__decorate([h.property({constructOnly:!0})],d.CenterOnSurface.prototype,"task",void 0);f.__decorate([h.property({readOnly:!0})],d.CenterOnSurface.prototype,"distance",void 0);f.__decorate([h.property({constructOnly:!0})],d.CenterOnSurface.prototype,"estimateSurfaceAltitudeAtCenter",void 0);f.__decorate([h.property({readOnly:!0,dependsOn:["renderLocation"]})],d.CenterOnSurface.prototype,"location",null);f.__decorate([h.property({readOnly:!0})],d.CenterOnSurface.prototype,"renderLocation",
void 0);f.__decorate([h.property({readOnly:!0})],d.CenterOnSurface.prototype,"updating",void 0);d.CenterOnSurface=f.__decorate([t.subclass("esri.views.3d.support.CenterOnSurface")],d.CenterOnSurface);const A=m.create(),B=m.create();d.default=d.CenterOnSurface;Object.defineProperty(d,"__esModule",{value:!0})});