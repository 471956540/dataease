//>>built
define(["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/dom-construct","./common"],function(e,g,c,h,d){return e(null,{postCreate:function(){this.inherited(arguments);!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},_setTextDirAttr:function(b){!b||this._created&&this.textDir===b||(this.textDir=b,this._setTextDirToNodes(this.textDir))},_setTextDirToNodes:function(b){c.forEach(this.panelNodes,function(f){c.forEach(f.childNodes,
function(a,k){a.innerHTML=d.removeUCCFromText(a.innerHTML);a.innerHTML=d.enforceTextDirWithUcc(a.innerHTML,this.textDir);a.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left"},this)},this)}})});