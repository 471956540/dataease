// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../lib/StencilUtils ../../../../chunks/NativeLine.glsl".split(" "),
function(v,q,r,h,t,e,n,f,w,x,m,u,y,z,p,A){n=function(k){function g(b,a){a=k.call(this,b,a)||this;a.stipplePattern=null;a.stippleTextureBind=null;a.stippleTextureRepository=b.stippleTextureRepository;return a}r._inheritsLoose(g,k);var d=g.prototype;d.initializeProgram=function(b){var a=g.shader.get();const c=this.configuration;a=a.build({output:c.output,attributeColor:c.vertexColors,slicePlaneEnabled:c.slicePlaneEnabled,sliceHighlightDisabled:c.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,
stippleEnabled:c.stippleEnabled,stippleOffColorEnabled:c.stippleOffColorEnabled,stippleUVMaxEnabled:!1,stippleIntegerRepeatsEnabled:c.stippleIntegerRepeatsEnabled});return new x(b.rctx,a.generateSource("vertex"),a.generateSource("fragment"),w.Default3D)};d.dispose=function(){k.prototype.dispose.call(this);this.stippleTextureRepository.release(this.stipplePattern);this.stippleTextureBind=this.stipplePattern=null};d.bindPass=function(b,a,c){u.View.bindProjectionMatrix(this.program,c.camera.projectionMatrix);
if(this.stipplePattern!==a.stipplePattern){var l=a.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,l);this.stipplePattern=l}this.configuration.stippleEnabled&&(l=t.isSome(this.stippleTextureBind)?this.stippleTextureBind(b,0)*c.camera.pixelRatio:1,this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/l),this.program.setUniform2f("ndcToPixel",c.camera.fullViewport[2]/2,c.camera.fullViewport[3]/2));
this.program.setUniform4fv("constantColor",a.color);this.program.setUniform1f("alphaCoverage",Math.min(1,a.width*c.camera.pixelRatio));this.configuration.stippleOffColorEnabled&&(a=t.unwrap(a.stippleOffColor),this.program.setUniform4f("stippleOffColor",a[0],a[1],a[2],3<a.length?a[3]:1));4===this.configuration.output&&z.OutputHighlight.bindOutputHighlight(b,this.program,c)};d.bindDraw=function(b){u.View.bindView(this.program,b);y.Slice.bindUniformsWithOrigin(this.program,this.configuration,b)};d.initializePipeline=
function(){const b=this.configuration,a=m.separateBlendingParams(770,1,771,771),c=(l,B=null,C=null)=>m.makePipelineState({blending:B,depthTest:p.depthCompareLess,depthWrite:C,colorWrite:m.defaultColorWriteParams,stencilWrite:b.sceneHasOcludees?p.stencilWriteMaskOn:null,stencilTest:b.sceneHasOcludees?l?p.stencilToolMaskBaseParams:p.stencilBaseAllZerosParams:null});return 0===b.output?(this._occludeePipelineState=c(!0,b.transparent||b.stippleEnabled?a:null,m.defaultDepthWriteParams),c(!1,b.transparent||
b.stippleEnabled?a:null,m.defaultDepthWriteParams)):c(!1)};d.getPipelineState=function(b){return b?this._occludeePipelineState:this.pipeline};r._createClass(g,[{key:"primitiveType",get:function(){return 1}}]);return g}(n.ShaderTechnique);n.shader=new e.ReloadableShaderModule(A.NativeLineShader,()=>new Promise(function(k,g){v(["./NativeLine.glsl"],k,g)}));e=function(k){function g(){var d=k.apply(this,arguments)||this;d.output=0;d.slicePlaneEnabled=!1;d.sliceHighlightDisabled=!1;d.vertexColors=!1;d.transparent=
!1;d.stippleEnabled=!1;d.stippleOffColorEnabled=!1;d.stippleIntegerRepeatsEnabled=!1;d.sceneHasOcludees=!1;return d}r._inheritsLoose(g,k);return g}(f.ShaderTechniqueConfiguration);h.__decorate([f.parameter({count:8})],e.prototype,"output",void 0);h.__decorate([f.parameter()],e.prototype,"slicePlaneEnabled",void 0);h.__decorate([f.parameter()],e.prototype,"sliceHighlightDisabled",void 0);h.__decorate([f.parameter()],e.prototype,"vertexColors",void 0);h.__decorate([f.parameter()],e.prototype,"transparent",
void 0);h.__decorate([f.parameter()],e.prototype,"stippleEnabled",void 0);h.__decorate([f.parameter()],e.prototype,"stippleOffColorEnabled",void 0);h.__decorate([f.parameter()],e.prototype,"stippleIntegerRepeatsEnabled",void 0);h.__decorate([f.parameter()],e.prototype,"sceneHasOcludees",void 0);q.NativeLineTechnique=n;q.NativeLineTechniqueConfiguration=e;Object.defineProperty(q,"__esModule",{value:!0})});