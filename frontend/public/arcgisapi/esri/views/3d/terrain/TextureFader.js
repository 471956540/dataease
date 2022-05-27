// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec4f64"],function(g,k,b,l){let p=function(){function e(a){this._getFadeDuration=a;this._delayedTime=this._fadeStart=0}var f=e.prototype;f.clear=function(){this._current=b.destroyMaybe(this._current);this._next=b.destroyMaybe(this._next);this._waiting=b.destroyMaybe(this._waiting);this._delayed=b.destroyMaybe(this._delayed)};f.push=function(a,c,d,m,n=0){this._delayed=b.destroyMaybe(this._delayed);
a=b.isSome(a)?new h(a,c,d,m):null;this._push(a,n)};f._push=function(a,c){this._isFading||this.clear();if(b.isNone(this._current))this._current=a;else{var d=performance.now();0!==c?(this._delayed=a,this._delayedTime=d+c):b.isNone(this._next)?(this._next=a,this._fadeStart=d):b.isNone(a)||(b.destroyMaybe(this._waiting),this._waiting=a)}};k._createClass(e,[{key:"current",get:function(){if(b.isNone(this._current))return null;if(!this._isFading){var a=this._delayed||this._waiting||this._next||this._current;
a!==this._current&&(this._current=null,this.clear(),this._current=a)}a=performance.now();b.isSome(this._delayed)&&a>=this._delayedTime&&(this._push(this._delayed,0),this._delayed=null);b.isSome(this._next)&&a-this._fadeStart>=this._fadeDuration&&(b.destroyMaybe(this._current),this._current=this._next,this._next=this._waiting,this._waiting=null,this._fadeStart=a);return this._current}},{key:"next",get:function(){return this._next}},{key:"fadeFactor",get:function(){if(b.isNone(this._next))return 1;
const a=performance.now()-this._fadeStart,c=this._fadeDuration;return a>c?0:1-a/c}},{key:"isFading",get:function(){return b.isSome(this._next)||b.isSome(this._delayed)}},{key:"_fadeDuration",get:function(){return b.isNone(this._waiting)?this._getFadeDuration():.5*this._getFadeDuration()}},{key:"_isFading",get:function(){return 0<this._getFadeDuration()}}]);return e}(),h=function(){function e(f,a,c,d){this.texture=f;f.retain();this.offsetAndScale=l.fromValues(a,c,d,d)}e.prototype.destroy=function(){this.texture.release()};
return e}();g.TextureReference=h;g.default=p;Object.defineProperty(g,"__esModule",{value:!0})});