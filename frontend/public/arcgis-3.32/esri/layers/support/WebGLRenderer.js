// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/support/WebGLRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojox/gfx/matrix ../../kernel ../../lang ../../sniff ../../urlUtils ../../geometry/scaleUtils ../vectorTiles/core/promiseUtils ../vectorTiles/views/2d/engine/StageGL ../vectorTiles/views/2d/engine/webgl/WGLFeatureView ../vectorTiles/views/2d/layers/features/processors/SymbolProcessor ../vectorTiles/views/2d/layers/features/tileRenderers/SymbolTileRenderer ../vectorTiles/views/2d/support/HighlightOptions ../vectorTiles/layers/support/TileInfo ../vectorTiles/views/2d/tiling/TileInfoView ../vectorTiles/geometry/SpatialReference ../vectorTiles/geometry/support/spatialReferenceUtils ../vectorTiles/renderers/SimpleRenderer ../vectorTiles/renderers/ClassBreaksRenderer ../vectorTiles/renderers/UniqueValueRenderer".split(" "),
function(m,z,e,f,k,h,l,d,A,B,C,D,p,q,r,E,F,G,u,H,I,J,K){function v(a){Object.defineProperty(a,"width",{get:function(){return this.size[0]}});Object.defineProperty(a,"height",{get:function(){return this.size[1]}});Object.defineProperty(a,"center",{get:function(){var a=this.viewpoint.targetGeometry;return[a.x,a.y]}})}var L=p.default,M=q.SymbolProcessor,N=r.default,O=d("esri-will-change"),w=void 0===d("ie")&&7<=d("trident"),P=d("safari"),t=w||d("edge"),x=function(){var a,b=window.performance||{},c=b.now||
b.webkitNow||b.msNow||b.oNow||b.mozNow;if(void 0!==c)return function(){return c.call(b)};a=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime();return function(){return(new Date).getTime()-a}}();p=d("ff");q=d("ie");r=d("webkit");var Q=d("opera"),y=(new Date).getTime(),n=window.requestAnimationFrame;n||(n=window[(r&&"webkit"||p&&"moz"||Q&&"o"||q&&"ms")+"RequestAnimationFrame"])||(n=function(a){var b=
x(),c=Math.max(0,16-(b-y)),g=window.setTimeout(function(){a(x())},c);y=b+c;return g});m=m(null,{surfaceType:"webgl",surface:null,map:null,layer:null,updateOnPan:!1,renderOnNav:!1,_canvas:null,_mapSR4:null,_dprWatchDelay:2E3,_dprTimer:null,_rendererEvalTimer:null,_redrawPromises:null,_defaultTileSize:512,_tileInfo:null,_tileInfoView:null,_wglContainer:null,_wglView:null,_tileRenderer:null,_tileRendererProps:null,_layerListenerHandles:null,_mapListenerHandles:null,_symbolProcessor:null,_returnCentroid:null,
_started:!1,_renderRequested:!1,_updateRequested:!1,_frameRequested:!1,_frameHandle:null,_viewState:null,_renderParameters:null,_updateParameters:null,_zooming:!1,_panning:!1,_scaleMatrix:null,_defaultTransition:"transform 500ms ease",_panDx:0,_panDy:0,_clipRect:null,constructor:function(a){this._frame=this._frame.bind(this);this._evalRendererChange=this._evalRendererChange.bind(this);this._redrawPromises=new Map;l.mixin(this,a);this._setup()},destroy:function(){this._teardown()},getNode:function(){return this._canvas},
getEventSource:function(){return this.getNode()},setClip:function(a){this._clipRect=null;var b=t&&w?"rect(auto,auto,auto,auto)":null;if(a){var b=a.x,c=a.y,g=a.width;a=a.height;this._clipRect={x:b,y:c,width:g,height:a};var d=this.layer.getNavigationTransform(),b=b+d.dx,c=c+d.dy,b=t?this._getClipRect(b,c,g,a):this._getClipPath(b,c,g,a)}f.set(this.getNode(),t?"clip":"clip-path",b);P&&f.set(this.getNode(),"-webkit-clip-path",b)},start:function(){this._started=!0;this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=
window.devicePixelRatio;this._watchDPR();this._updateMapView(this.map.extent)},stop:function(){this._started=!1;this._unwatchDPR();this._stopFrame()},redraw:function(){this._handleRendererChange()},hitTest:function(a,b){return this.layer.suspended?C.resolve(null):this._wglView.hitTest(a,b).then(function(a){return 0===a.length?null:this.layer._mode._featureMap[a[0]]}.bind(this))},syncHitTest:function(a,b){var c=this._wglContainer.prepareChildrenRenderParameters(this._renderParameters),c=this._wglView.prepareChildrenRenderParameters(c);
a=this._wglView._hitTest(c,a,b);this._scheduleRender();return this.layer._mode._featureMap[a[0]]},_setup:function(){this._initState();this._createWGLContainer();this._createTileRenderer();this._applyLayerSettings();this._createMapListeners();this._setViewState();this._initRendering()},_teardown:function(){this._destroyRendering();this._destroyMapListeners();this._destroyLayerListeners();this._destroyTileRenderer();this._destroyWGLContainer();this.stop();this.surface.getEventSource().removeChild(this.getNode())},
_createWGLContainer:function(){this._wglContainer=new D;this._canvas=this._wglContainer.createElement();O&&f.set(this._canvas,"will-change","transform");this._wglContainer.setElement(this._canvas);this.surface.getEventSource().appendChild(this._canvas);this._wglContainer.parent={requestChildRender:this._scheduleRender.bind(this)};this._wglContainer.attach(this._renderParameters)},_destroyWGLContainer:function(){this._wglContainer.detach(this._renderParameters);this._wglContainer=null},_createTileRenderer:function(){var a=
this.layer;this._tileRendererProps={layerView:{requestUpdate:function(){this._scheduleUpdate()}.bind(this)},highlightOptions:new E,layer:{objectIdField:a.objectIdField,geometryType:this._getNormalizedGeometryType(a),spatialReference:new u(a.spatialReference.toJson()),fields:a.fields,typeIdField:a.typeIdField,types:e.map(a.types,function(a){return a.toJson()}),outFields:a.getOutFields(),definitionExpression:null,renderer:this._getRenderer4(),gdbVersion:null,historicMoment:null},tileInfoView:this._tileInfoView};
this._tileRenderer=new N(this._tileRendererProps);this._installTileRenderer(this._tileRenderer)},_installTileRenderer:function(a){this._wglView=new L({highlightOptions:a.highlightOptions,tileInfoView:a.tileInfoView,layer:this.layer});a._featuresView=this._wglView;this._wglContainer.addChild(this._wglView);this._wglView._container=this._wglContainer},_getNormalizedGeometryType:function(a){return a.hasXYFootprint()?"esriGeometryPolygon":a.geometryType},_destroyTileRenderer:function(){this._wglContainer.removeChild(this._wglView);
this._wglView.dispose();this._tileRendererProps=this._tileRenderer=this._wglView=this._wglView._container=null},_applyLayerSettings:function(){this._wglContainer.opacity=this.layer.opacity;this._wglContainer.visible=!this.layer.suspended;this._createLayerListeners()},_createLayerListeners:function(){this._destroyLayerListeners();var a=this.layer;this._layerListenerHandles=[a.on("opacity-change",function(){this._wglContainer.opacity=this.layer.opacity}.bind(this)),a.on("suspend",function(){this._wglContainer.visible=
!1}.bind(this)),a.on("resume",function(){this._wglContainer.visible=!0}.bind(this)),a.on("renderer-change",function(){this._handleRendererChange()}.bind(this))]},_destroyLayerListeners:function(){e.forEach(this._layerListenerHandles,function(a){a.remove()});this._layerListenerHandles=null},_createMapListeners:function(){this._destroyMapListeners();var a=this.map;this._mapListenerHandles=[a.on("pan-start",function(a){this._panning=!0;this.updateOnPan||this.renderOnNav||this._stopFrame()}.bind(this)),
a.on("pan",function(a){this._applyPanEvent(a)}.bind(this)),a.on("pan-end",function(a){this._panning=!1;this._applyPanEvent(a)}.bind(this)),a.on("extent-change",function(a){f.set(this.getNode(),h._css.names.transition,"none");this._updateMapView(a.extent)}.bind(this)),a.on("zoom-start",function(a){this._zooming=!0;this._stopFrame()}.bind(this)),a.on("zoom-end",function(a){this._zooming=!1}.bind(this)),a.on("scale",function(a){if(!this.renderOnNav){f.set(this.getNode(),h._css.names.transition,a.immediate?
"none":this._defaultTransition);var b=this.map.__visibleDelta,b=k.translate(-b.x,-b.y);this._scaleMatrix=a=k.multiply(k.invert(b),a.matrix,b);this._applyTransform(a)}}.bind(this))]},_destroyMapListeners:function(){e.forEach(this._mapListenerHandles,function(a){a.remove()});this._mapListenerHandles=null},_getRenderer4:function(a){if(a=a||this.layer._getRenderer()){a=this._fixImageUrl(a.toJson());var b;"simple"===a.type?b=I.fromJSON(a):"classBreaks"===a.type?b=J.fromJSON(a):"uniqueValue"===a.type?b=
K.fromJSON(a):console.error("WebGLRenderer: unsupported layer.renderer!");return b}},_fixImageUrl:function(a){var b=[];switch(a.type){case "simple":b.push(a.symbol);break;case "uniqueValue":b.push(a.defaultSymbol);b=b.concat(e.map(a.uniqueValueInfos,function(a){return a.symbol}));break;case "classBreaks":b.push(a.defaultSymbol),b=b.concat(e.map(a.classBreakInfos,function(a){return a.symbol}))}var b=e.filter(b,function(a){return!!a}),c=this.layer,g=c._url.path+"/images/",d=c._getToken();e.forEach(b,
function(a){var b=a.url;b&&(-1===b.search(/https?\:/)&&-1===b.indexOf("data:")&&(a.url=g+b),d&&-1!==a.url.search(/https?\:/)&&A.hasSameOrigin(a.url,c._url.path)&&(a.url+="?token\x3d"+d))});return a},_setRenderer:function(a){this._tileRendererProps.layer.renderer=a;a=this._tileRenderer.getProcessorConfiguration();var b=this._symbolProcessor;b.setConfiguration(a);this._returnCentroid=b._getReturnCentroid(b.getRendererInfo().renderer);return a},_handleRendererChange:function(){this._rendererEvalTimer||
(this._rendererEvalTimer=setTimeout(this._evalRendererChange,0))},_cancelRendererEval:function(){clearTimeout(this._rendererEvalTimer);this._rendererEvalTimer=null},_evalRendererChange:function(){this._cancelRendererEval();var a=this._returnCentroid,b=this._setRenderer(this._getRenderer4());this._cancelRedraw();this._tileRenderer.needsProcessorReconfiguration(b)?(this._tileRenderer.applyConfiguration(b,!0),a!==this._returnCentroid&&this._returnCentroid?this.layer._mode.refresh():this._redrawView()):
(this._tileRenderer.applyConfiguration(b,!1),this._scheduleUpdate())},_redrawView:function(){this._wglView.children.slice(0).forEach(function(a,b){b=a.key.id;var c=this.layer._mode._tileRequests.get(b);c&&(a=this._redrawTile(c.tsTile,a,c.featureSet),a.isFulfilled()||this._redrawPromises.set(b,a))}.bind(this))},_redrawTile:function(a,b,c){return this._symbolProcessor.getMeshData(a,c).then(function(a){var c=b.key.id;this._redrawPromises["delete"](c);this.layer._mode._tileRequests.get(c)&&this._repaintTile(b,
a.data)}.bind(this)).otherwise(function(a){this._redrawPromises["delete"](b.key.id)}.bind(this))},_repaintTile:function(a,b){this._wglView.removeChild(a);a.attached=!1;this._tileRenderer.onTileData({tileKey:a.key.id,data:b});this._wglView.addChild(a)},_cancelRedraw:function(a){a?(a=this._redrawPromises.get(a))&&a.cancel():this._redrawPromises.forEach(function(a,c){a.cancel()})},_initState:function(){this._mapSR4=new u(this.map.spatialReference.toJson());var a={};v(a);this._viewState=l.mixin(a,{scale:0,
size:[0,0],rotation:0,resolution:1,worldScreenWidth:0,spatialReference:this._mapSR4,viewpoint:{rotation:0,scale:0,targetGeometry:{x:0,y:0},camera:null,clone:function(){var a=l.mixin({},this);a.targetGeometry&&(a.targetGeometry=l.mixin({},a.targetGeometry));return a}},toScreen:function(a,c){var b=this.center[1]+this.resolution*this.height*.5;a[0]=(c[0]-(this.center[0]-this.resolution*this.width*.5))/this.resolution;a[1]=(b-c[1])/this.resolution;return a},toMap:function(a,c){var b=this.center[1]+this.resolution*
this.height*.5;a[0]=this.center[0]-this.resolution*this.width*.5+c[0]*this.resolution;a[1]=b-c[1]*this.resolution;return a},clone:function(){var a=l.mixin({},this);v(a);a.size&&(a.size=a.size.slice(0));a.viewpoint&&(a.viewpoint=a.viewpoint.clone());return a}});this._renderParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0};this._updateParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0};this._tileInfo=F.create({spatialReference:this._mapSR4,
size:this._defaultTileSize});this._tileInfoView=new G(this._tileInfo)},_initRendering:function(){var a=this._tileRendererProps.layer;this._symbolProcessor=new M({configuration:null,service:{fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,typeIdField:a.typeIdField,types:a.types},spatialReference:this._mapSR4,tileRenderer:this._tileRenderer});a=this._setRenderer(this._getRenderer4());this._tileRenderer.applyConfiguration(a,!0)},_destroyRendering:function(){this._symbolProcessor&&
this._symbolProcessor.destroy();this._cancelRendererEval();this._cancelRedraw()},_updateMapView:function(a){this._setViewState(a);this._scheduleUpdate();this._scheduleRender()},_setViewState:function(a){var b=this.map;if(b.loaded){a=a?a.getCenter():b.extent.getCenter();var c=this._viewState;c.viewpoint.targetGeometry=a.toJson();c.scale=c.viewpoint.scale=b.getScale();c.size=[b.width,b.height]}},_updateViewState:function(){var a=this._viewState;a.resolution=a.scale/(39.37*B.getUnitValueForSR(this.map.spatialReference)*
96);var b=0;a.spatialReference.isWrappable&&(b=H.getInfo(a.spatialReference),b=b.valid[1]-b.valid[0]);a.worldScreenWidth=Math.round(b/a.resolution)},_getClipPath:function(a,b,c,d){return"inset("+(b?b-this._panDy:b)+"px "+(this.map.width-(a+c)+this._panDx)+"px "+(this.map.height-(b+d)+this._panDy)+"px "+(a?a-this._panDx:a)+"px)"},_getClipRect:function(a,b,c,d){b-=this._panDy;a-=this._panDx;return"rect("+b+"px, "+(a+c)+"px, "+(b+d)+"px, "+a+"px)"},_stopFrame:function(){this._frameRequested=this._updateRequested=
this._renderRequested=!1;cancelAnimationFrame(this._frameHandle);this._frameHandle=null},_canRender:function(){return this.renderOnNav||!this._zooming&&!this._panning},_canUpdate:function(){return this.updateOnPan||!this._zooming&&!this._panning},_watchDPR:function(){this._unwatchDPR();this._dprTimer=setTimeout(function(){this._renderParameters.pixelRatio!==window.devicePixelRatio&&this._scheduleRender();this._watchDPR()}.bind(this),this._dprWatchDelay)},_unwatchDPR:function(){clearTimeout(this._dprTimer);
this._dprTimer=null},_scheduleRender:function(){this._started&&this._canRender()&&(this._renderRequested=!0,this._scheduleFrame())},_scheduleUpdate:function(){this._started&&this._canUpdate()&&(this._updateRequested=!0,this._scheduleFrame())},_scheduleFrame:function(){this._frameRequested||(this._frameRequested=!0,this._frameHandle=n(this._frame))},_frame:function(){this._frameRequested&&(this._frameRequested=!1,this._renderParameters.pixelRatio!==window.devicePixelRatio&&(this._renderParameters.pixelRatio=
this._updateParameters.pixelRatio=window.devicePixelRatio),this._updateParameters.stationary=this._renderParameters.stationary=!0,this._updateViewState(),this._renderRequested&&this._canRender()&&(this._renderRequested=!1,f.set(this._canvas,h._css.names.transition,"none"),this._applyTransform(),this._scaleMatrix=null,this._wglContainer.doRender(this._renderParameters)),this._updateRequested&&this._canUpdate()&&(this._updateRequested=!1,this.layer._mode.update(this._updateParameters)))},_applyPanEvent:function(a){if(!this.renderOnNav){this._panDx=
a.delta.x;this._panDy=a.delta.y;var b=k.translate(a.delta.x,a.delta.y),b=this._scaleMatrix?k.multiply(b,this._scaleMatrix):b;this._applyTransform(b)}(this.updateOnPan||this.renderOnNav)&&this._updateMapView(a.extent)},_applyTransform:function(a){a=a?h._css.matrix(a):"";f.set(this._canvas,h._css.names.transform,a);a||(this._panDx=this._panDy=0,this.setClip(this._clipRect))}});d("extend-esri")&&z.setObject("layers.support.WebGLRenderer",m,h);return m});