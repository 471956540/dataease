// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../lib/GLMaterial","./WaterTechnique"],function(f,h,d,k){d=function(g){function e(a){a=g.call(this,a)||this;a.updateParameters();return a}h._inheritsLoose(e,g);var b=e.prototype;b.updateParameters=function(a){this.technique=this.techniqueRep.acquireAndReleaseExisting(k.WaterTechnique,this.material.getTechniqueConfig(this.output,a),this.technique)};b.beginSlot=function(a){if(2===this.output)return 22===a;if(5===this.output)return null==
a;if(4===this.output)return 3===a;let c=3;this.material.params.transparent&&(c=this.material.params.writeDepth?5:8);return a===c};b.setElapsedTimeUniform=function(a){a.setUniform1f("timeElapsed",.001*this.material.animation.time*this.material.params.animationSpeed)};b._updateShadowState=function(a){a.shadowMappingEnabled!==this.material.params.receiveShadows&&this.material.setParameterValues({receiveShadows:a.shadowMappingEnabled})};b._updateSSRState=function(a){a.ssrEnabled!==this.material.params.ssrEnabled&&
this.material.setParameterValues({ssrEnabled:a.ssrEnabled})};b.ensureResources=function(a){return this.technique.ensureResource(a)};b.ensureParameters=function(a){0===this.output&&(this._updateShadowState(a),this._updateSSRState(a));this.updateParameters(a)};b.bind=function(a,c){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.params,c);2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)};return e}(d);f.WaterGLMaterial=d;Object.defineProperty(f,
"__esModule",{value:!0})});