//>>built
define("dojox/drawing/stencil/Rect",["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(d,b,e,f){b=b.declare(e,function(a){},{type:"dojox.drawing.stencil.Rect",anchorType:"group",baseRender:!0,dataToPoints:function(a){a=a||this.data;return this.points=[{x:a.x,y:a.y},{x:a.x+a.width,y:a.y},{x:a.x+a.width,y:a.y+a.height},{x:a.x,y:a.y+a.height}]},pointsToData:function(a){a=a||this.points;var c=a[0];a=a[2];return this.data={x:c.x,y:c.y,width:a.x-c.x,height:a.y-c.y,r:this.data.r||
0}},_create:function(a,c,b){this.remove(this[a]);this[a]=this.container.createRect(c).setStroke(b).setFill(b.fill);this._setNodeAtts(this[a])},render:function(){this.onBeforeRender(this);this.renderHit&&this._create("hit",this.data,this.style.currentHit);this._create("shape",this.data,this.style.current)}});d.setObject("dojox.drawing.stencil.Rect",b);f.register({name:"dojox.drawing.stencil.Rect"},"stencil");return b});