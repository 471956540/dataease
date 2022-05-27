//>>built
define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Line"],function(h,d,k,l){d=d.declare(l,function(){},{draws:!0,showAngle:!0,onTransformEnd:function(a){this._toggleSelected();if(this.getRadius()<this.minimumSize)a=this.points,this.setPoints([{x:a[0].x,y:a[0].y},{x:a[0].x,y:a[0].y}]);else{a=this.data;var b=this.util.snapAngle({start:{x:a.x1,y:a.y1},x:a.x2,y:a.y2},this.angleSnap/180);this.setPoints([{x:a.x1,y:a.y1},{x:b.x,y:b.y}]);this._isBeingModified=!1;this.onModify(this)}},
onDrag:function(a){if(!this.created){var b=a.start.x,f=a.start.y,e=a.x,c=a.y;this.keys.shift&&(c=this.util.snapAngle(a,.25),e=c.x,c=c.y);if(this.keys.alt){a=e>b?(e-b)/2:(b-e)/-2;var g=c>f?(c-f)/2:(f-c)/-2;b-=a;e-=a;f-=g;c-=g}this.setPoints([{x:b,y:f},{x:e,y:c}]);this.render()}},onUp:function(a){if(!this.created&&this._downOnCanvas){this._downOnCanvas=!1;if(!this.shape){var b=a.start;this.setPoints([{x:b.x,y:b.y+4*this.minimumSize},{x:b.x,y:b.y}]);this.render()}else if(this.getRadius()<this.minimumSize){this.remove(this.shape,
this.hit);return}a=this.util.snapAngle(a,this.angleSnap/180);b=this.points;this.setPoints([{x:b[0].x,y:b[0].y},{x:a.x,y:a.y}]);this.renderedOnce=!0;this.onRender(this)}}});h.setObject("dojox.drawing.tools.Line",d);d.setup={name:"dojox.drawing.tools.Line",tooltip:"Line Tool",iconClass:"iconLine"};k.register(d.setup,"tool");return d});