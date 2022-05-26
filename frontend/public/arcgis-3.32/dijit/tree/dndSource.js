//>>built
define("dijit/tree/dndSource","dojo/_base/array dojo/_base/declare dojo/dnd/common dojo/dom-class dojo/dom-geometry dojo/_base/lang dojo/mouse dojo/on dojo/touch dojo/topic dojo/dnd/Manager ./_dndSelector".split(" "),function(p,u,v,t,w,l,x,z,A,m,k,y){return u("dijit.tree.dndSource",y,{isSource:!0,accept:["text","treeNode"],copyOnly:!1,dragThreshold:5,betweenThreshold:0,generateText:!0,constructor:function(a,b){b||(b={});l.mixin(this,b);a=b.accept instanceof Array?b.accept:["text","treeNode"];this.accept=
null;if(a.length)for(this.accept={},b=0;b<a.length;++b)this.accept[a[b]]=1;this.mouseDown=this.isDragging=!1;this.targetBox=this.targetAnchor=null;this.dropPosition="";this._lastY=this._lastX=0;this.sourceState="";this.isSource&&t.add(this.node,"dojoDndSource");this.targetState="";this.accept&&t.add(this.node,"dojoDndTarget");this.topics=[m.subscribe("/dnd/source/over",l.hitch(this,"onDndSourceOver")),m.subscribe("/dnd/start",l.hitch(this,"onDndStart")),m.subscribe("/dnd/drop",l.hitch(this,"onDndDrop")),
m.subscribe("/dnd/cancel",l.hitch(this,"onDndCancel"))]},checkAcceptance:function(){return!0},copyState:function(a){return this.copyOnly||a},destroy:function(){this.inherited(arguments);for(var a;a=this.topics.pop();)a.remove();this.targetAnchor=null},_onDragMouse:function(a,b){var c=k.manager(),g=this.targetAnchor,d=this.current,f=this.dropPosition,e="Over";d&&0<this.betweenThreshold&&(this.targetBox&&g==d||(this.targetBox=w.position(d.rowNode,!0)),a.pageY-this.targetBox.y<=this.betweenThreshold?
e="Before":a.pageY-this.targetBox.y>=this.targetBox.h-this.betweenThreshold&&(e="After"));if(b||d!=g||e!=f){g&&this._removeItemClass(g.rowNode,f);d&&this._addItemClass(d.rowNode,e);if(d)if(d==this.tree.rootNode&&"Over"!=e)c.canDrop(!1);else{b=a=!1;if(c.source==this){b="Over"===e;for(var h in this.selection){g=this.selection[h];if(g.item===d.item){a=!0;break}g.getParent().id!==d.id&&(b=!1)}}c.canDrop(!a&&!b&&!this._isParentChildDrop(c.source,d.rowNode)&&this.checkItemAcceptance(d.rowNode,c.source,
e.toLowerCase()))}else c.canDrop(!1);this.targetAnchor=d;this.dropPosition=e}},onMouseMove:function(a){if(!this.isDragging||"Disabled"!=this.targetState){this.inherited(arguments);var b=k.manager();if(this.isDragging)this._onDragMouse(a);else if(this.mouseDown&&this.isSource&&(Math.abs(a.pageX-this._lastX)>=this.dragThreshold||Math.abs(a.pageY-this._lastY)>=this.dragThreshold)){var c=this.getSelectedTreeNodes();if(c.length){if(1<c.length){var g=this.selection,d=0,f=[],e,h;a:for(;e=c[d++];){for(h=
e.getParent();h&&h!==this.tree;h=h.getParent())if(g[h.id])continue a;f.push(e)}c=f}c=p.map(c,function(a){return a.domNode});b.startDrag(this,c,this.copyState(v.getCopyKeyState(a)));this._onDragMouse(a,!0)}}}},onMouseDown:function(a){if("touchstart"==a.type||x.isLeft(a))this.mouseDown=!0,this.mouseButton=a.button,this._lastX=a.pageX,this._lastY=a.pageY;this.inherited(arguments)},onMouseUp:function(a){this.mouseDown&&(this.mouseDown=!1,this.inherited(arguments))},onMouseOut:function(){this.inherited(arguments);
this._unmarkTargetAnchor()},checkItemAcceptance:function(){return!0},onDndSourceOver:function(a){this!=a?(this.mouseDown=!1,this._unmarkTargetAnchor()):this.isDragging&&k.manager().canDrop(!1)},onDndStart:function(a,b,c){this.isSource&&this._changeState("Source",this==a?c?"Copied":"Moved":"");b=this.checkAcceptance(a,b);this._changeState("Target",b?"":"Disabled");this==a&&k.manager().overSource(this);this.isDragging=!0},itemCreator:function(a){return p.map(a,function(a){return{id:a.id,name:a.textContent||
a.innerText||""}})},onDndDrop:function(a,b,c){if("Over"==this.containerState){var g=this.tree,d=g.model,f=this.targetAnchor,e=!1;this.isDragging=!1;var h,n,k;h=f&&f.item||g.item;"Before"==this.dropPosition||"After"==this.dropPosition?(h=f.getParent()&&f.getParent().item||g.item,n=f.getIndexInParent(),"After"==this.dropPosition?(n=f.getIndexInParent()+1,k=f.getNextSibling()&&f.getNextSibling().item):k=f.item):(h=f&&f.item||g.item,e=!0);var l;p.forEach(b,function(e,g){e=a.getItem(e.id);if(-1!=p.indexOf(e.type,
"treeNode"))var m=e.data,q=m.item,r=m.getParent().item;a==this?("number"==typeof n&&h==r&&m.getIndexInParent()<n&&--n,d.pasteItem(q,r,h,c,n,k)):d.isItem(q)?d.pasteItem(q,r,h,c,n,k):(l||(l=this.itemCreator(b,f.rowNode,a)),d.newItem(l[g],h,n,k))},this);e&&this.tree._expandNode(f)}this.onDndCancel()},onDndCancel:function(){this._unmarkTargetAnchor();this.mouseDown=this.isDragging=!1;delete this.mouseButton;this._changeState("Source","");this._changeState("Target","")},onOverEvent:function(){this.inherited(arguments);
k.manager().overSource(this)},onOutEvent:function(){this._unmarkTargetAnchor();var a=k.manager();this.isDragging&&a.canDrop(!1);a.outSource(this);this.inherited(arguments)},_isParentChildDrop:function(a,b){if(!a.tree||a.tree!=this.tree)return!1;var c=a.tree.domNode;a=a.selection;for(b=b.parentNode;b!=c&&!a[b.id];)b=b.parentNode;return b.id&&a[b.id]},_unmarkTargetAnchor:function(){this.targetAnchor&&(this._removeItemClass(this.targetAnchor.rowNode,this.dropPosition),this.dropPosition=this.targetBox=
this.targetAnchor=null)},_markDndStatus:function(a){this._changeState("Source",a?"Copied":"Moved")}})});