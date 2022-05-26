// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/Renderer","require exports ../../../core/libs/gl-matrix/mat4 ../GeometryUtils ./BackgroundRenderer ./CircleRenderer ./FadeRecorder ./FillRenderer ./LineRenderer ./SymbolRenderer ./TileInfoRenderer ../../webgl/FramebufferObject".split(" "),function(z,A,k,p,q,r,t,u,v,w,x,y){return function(){function g(){this._extrudeRotateVector=new Float32Array([0,0,1]);this._extrudeScaleVector=new Float32Array([1,1,1]);this._state={rotation:0,width:0,height:0};
this._cachedRotation=this._cachedHeight=this._cachedWidth=0}g.prototype.initialize=function(a,c,e){void 0===e&&(e=!0);this._SpriteMosaic=a;this._glyphMosaic=c;this._ignoreSpeed=!e;this._backgroundRenderer=new q;this._lineRenderer=new v;this._fillRenderer=new u;this._symbolRenderer=new w;this._circleRenderer=new r;this._tileInfoRenderer=new x;this._fadeRecorder=new t.FadeRecorder(300);this._extrudeMatrix=new Float32Array(16);this._extrudeNoRotationMatrix=new Float32Array(16);this._backgroundColor=
new Float32Array([1,0,0,1])};g.prototype.dispose=function(){this._backgroundRenderer&&(this._backgroundRenderer.dispose(),this._backgroundRenderer=null);this._lineRenderer&&(this._lineRenderer.dispose(),this._lineRenderer=null);this._fillRenderer&&(this._fillRenderer.dispose(),this._fillRenderer=null);this._symbolRenderer&&(this._symbolRenderer.dispose(),this._symbolRenderer=null);this._circleRenderer&&(this._circleRenderer.dispose(),this._circleRenderer=null);this._tileInfoRenderer&&(this._tileInfoRenderer.dispose(),
this._tileInfoRenderer=null);this._hittestFBO&&(this._hittestFBO.dispose(),this._hittestFBO=null)};g.prototype.setStateParams=function(a,c,e){this._fadeRecorder.recordLevel(e);this._state=a;if(this._state.width!==this._cachedWidth||this._state.height!==this._cachedHeight||this._state.rotation!==this._cachedRotation)this._extrudeScaleVector[0]=2/a.width,this._extrudeScaleVector[1]=-2/a.height,k.identity(this._extrudeMatrix),k.rotate(this._extrudeMatrix,this._extrudeMatrix,-a.rotation*p.C_DEG_TO_RAD,
this._extrudeRotateVector),k.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),k.transpose(this._extrudeMatrix,this._extrudeMatrix),k.identity(this._extrudeNoRotationMatrix),k.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),k.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation};g.prototype.drawClippingMasks=
function(a,c){if(0!==c.length){a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255);a.setClearStencil(0);a.clear(a.gl.STENCIL_BUFFER_BIT);for(var e=0;e<c.length;e++){var d=c[e];d.attached&&d.visible&&(a.setStencilFunctionSeparate(1032,519,d.stencilData.reference,d.stencilData.mask),this._backgroundRenderer.renderSolidColor(a,{u_matrix:d.tileTransform.transform,
u_normalized_origin:d.tileTransform.displayCoord,u_coord_range:d.coordRange,u_depth:0,u_color:this._backgroundColor}))}a.setColorMask(!0,!0,!0,!0);a.setBlendingEnabled(!0)}};g.prototype.renderDebug=function(a,c){var e=c.key;this._backgroundColor.set([e.col%2,e.row%2,0===e.col%2&&0===e.row%2?1:0,.5]);this._backgroundRenderer.renderSolidColor(a,{u_matrix:c.tileTransform.transform,u_normalized_origin:c.tileTransform.displayCoord,u_coord_range:c.coordRange,u_depth:0,u_color:this._backgroundColor})};g.prototype.renderBucket=
function(a,c,e,d,b,f,h,g){if(!(void 0!==h.minzoom&&h.minzoom>=e+1E-6||void 0!==h.maxzoom&&h.maxzoom<e-1E-6))switch(c.type){case 0:2!==b&&this._renderBackground(a,c,e,b,f,h,g);break;case 1:2!==b&&this._renderFill(a,c,e,b,f,h,g);break;case 2:1!==b&&3!==b||this._renderLine(a,c,e,b,f,h,g);break;case 3:2!==b&&3!==b||this._renderSymbol(a,c,e,b,d,f,h,g);break;case 4:2!==b&&3!==b||this._renderCircle(a,c,e,b,d,f,h,g)}};g.prototype.renderTileInfo=function(a,c){this._tileInfoRenderer.render(a,c)};g.prototype.needsRedraw=
function(){return this._fadeRecorder.needsRedraw()};g.prototype.hitTest=function(a,c,e,d,b,f,h){var g=[0,0],m=[0,0],k=a.state;k.toMap(g,[0,0]);k.toMap(m,[f,f]);c=d.filter(function(a){return!(g[0]>a.bounds[2]||m[0]<a.bounds[0]||g[1]<a.bounds[3]||m[1]>a.bounds[1])});if(0===c.length)return[];c.sort(function(a,b){return a.key.level-b.key.level});e=c.length;for(d=1;d<=e;d++){var l=c[d-1];l.attached&&(l.stencilData.reference=d,l.stencilData.mask=255)}h(k,b,c);b=a.context;this._hittestFBO||(this._hittestFBO=
y.create(b,{colorTarget:0,depthStencilTarget:3,width:f,height:f}));h=b.getViewport();k=b.getBoundFramebufferObject();b.bindFramebuffer(this._hittestFBO);b.setViewport(0,0,f,f);d=b.gl;b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);b.setClearColor(1,1,1,1);b.setClearDepth(1);b.setClearStencil(0);b.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT|d.STENCIL_BUFFER_BIT);b.setDepthWriteEnabled(!1);this.drawClippingMasks(b,c);b.setBlendingEnabled(!1);b.setStencilWriteMask(0);b.setStencilOp(7680,7680,7681);
b.setDepthFunction(515);b.setDepthTestEnabled(!0);b.setDepthWriteEnabled(!0);b.setStencilTestEnabled(!0);for(d=0;d<e;d++)l=c[d],l.attached&&l.doRender(a);b.setStencilTestEnabled(!1);b.setDepthTestEnabled(!1);this._readbackBuffer||(this._readbackBuffer=new Uint8Array(4*f*f),this._readbackBuffer32=new Uint32Array(this._readbackBuffer.buffer));this._hittestFBO.readPixels(0,0,f,f,6408,5121,this._readbackBuffer);a=new Set;f*=f;c=this._readbackBuffer32[Math.round(f/2)];4294967295!==c&&a.add(c);for(d=0;d<
f;d++)c=this._readbackBuffer32[d],4294967295!==c&&a.add(c);b.bindFramebuffer(k);b.setViewport(h.x,h.y,h.width,h.height);var n=[];a.forEach(function(a){n.push(a)});return n};g.prototype._renderBackground=function(a,c,e,d,b,f,h){this._backgroundRenderer.render(a,c,e,d,b,f,this._SpriteMosaic,this._SpriteMosaic.pixelRatio,h)};g.prototype._renderLine=function(a,c,e,d,b,f,h){this._lineRenderer.render(a,c,e,d,this._state,b,f,this._SpriteMosaic,this._extrudeMatrix,this._SpriteMosaic.pixelRatio,h)};g.prototype._renderFill=
function(a,c,e,d,b,f,h){this._fillRenderer.render(a,c,e,this._state.rotation,d,b,f,this._SpriteMosaic,this._extrudeMatrix,this._SpriteMosaic.pixelRatio,h)};g.prototype._renderCircle=function(a,c,e,d,b,f,h,g){var k=!0;b===f.key.level&&(k=!1);a.setStencilTestEnabled(k);this._circleRenderer.render(a,c,e,d,this._state.rotation,f,h,this._extrudeMatrix,g)};g.prototype._renderSymbol=function(a,c,e,d,b,f,g,k){var h=!0;b===f.key.level&&(h=!1);a.setStencilTestEnabled(h);this._symbolRenderer.render(a,c,e,d,
this._state.rotation,this._fadeRecorder.getFadeValues(this._ignoreSpeed),f,g,this._SpriteMosaic,this._glyphMosaic,this._extrudeMatrix,this._extrudeNoRotationMatrix,this._SpriteMosaic.pixelRatio,k)};return g}()});