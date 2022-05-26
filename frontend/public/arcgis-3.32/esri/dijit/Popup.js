// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/Popup","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/kernel dojo/has dojo/window dojo/Stateful dojo/query dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/registry ../kernel ../lang ../domUtils ../geometry/Polyline ../geometry/Polygon ../geometry/Multipoint ../geometry/normalizeUtils ../InfoWindowBase ../PopupBase dojo/i18n!../nls/jsapi dojo/NodeList-dom".split(" "),function(r,t,k,f,g,F,H,I,R,J,
v,e,x,G,m,K,L,y,M,S,T,N,w,O,P,Q){r=r([O,P,I],{declaredClass:"esri.dijit.Popup",offsetX:3,offsetY:3,zoomFactor:4,marginLeft:25,marginTop:25,highlight:!0,pagingControls:!0,pagingInfo:!0,keepHighlightOnHide:!1,popupWindow:!0,titleInBody:!0,anchor:"auto",visibleWhenEmpty:!0,hideDelay:1E3,location:null,constructor:function(a,b){this.initialize();t.mixin(this,a);this.domNode=J.byId(b);b=this._nls=t.mixin({},Q.widgets.popup);a=this.domNode;e.add(a,"esriPopup");(this._isRTL=!G.isBodyLtr())&&m.set(a,"direction",
"rtl");v.set(a,"innerHTML","\x3cdiv class\x3d'esriPopupWrapper' style\x3d'position: absolute;'\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'titlePane'\x3e\x3cdiv class\x3d'spinner hidden' title\x3d'"+b.NLS_searching+"...'\x3e\x3c/div\x3e\x3cdiv class\x3d'title'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton prev hidden' title\x3d'"+b.NLS_prevFeature+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton next hidden' title\x3d'"+b.NLS_nextFeature+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton maximize' title\x3d'"+
b.NLS_maximize+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton close' title\x3d'"+b.NLS_close+"'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer content'\x3e\x3cdiv class\x3d'contentPane'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'actionsPane'\x3e\x3cdiv class\x3d'actionList hidden'\x3e\x3ca title\x3d'"+b.NLS_zoomTo+"' class\x3d'action zoomTo' href\x3d'javascript:void(0);'\x3e\x3cspan\x3e"+b.NLS_zoomTo+"\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'pointer hidden'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'outerPointer hidden'\x3e\x3c/div\x3e");
this._sizers=g.query(".sizer",a);b=g.query(".titlePane",a)[0];this._title=g.query(".title",b)[0];this._prevFeatureButton=g.query(".prev",b)[0];this._nextFeatureButton=g.query(".next",b)[0];this._maxButton=g.query(".maximize",b)[0];this._spinner=g.query(".spinner",b)[0];this._contentPane=g.query(".contentPane",a)[0];this._positioner=g.query(".esriPopupWrapper",a)[0];this._pointer=g.query(".pointer",a)[0];this._outerPointer=g.query(".outerPointer",a)[0];this._actionList=g.query(".actionsPane .actionList",
a)[0];this._contentUpdateHandles={};this._eventConnections=[f.connect(g.query(".close",b)[0],"onclick",this,this.hide),f.connect(this._prevFeatureButton,"onclick",this,this.selectPrevious),f.connect(this._nextFeatureButton,"onclick",this,this.selectNext),f.connect(this._maxButton,"onclick",this,this._toggleSize),f.connect(g.query(".zoomTo",this._actionList)[0],"onclick",this,this._zoomToFeature),f.connect(this,"onClearFeatures",this,this._featuresCleared),f.connect(this,"onSelectionChange",this,this._featureSelected),
f.connect(this,"onDfdComplete",this,this._updateUI)];F("esri-touch")&&(a=M.setScrollable(this._contentPane),this._eventConnections.push(a[0],a[1]));this._toggleVisibility(!1)},onMaximize:function(){},onRestore:function(){},setMap:function(a){this.inherited(arguments);x.place(this.domNode,a.root);this.highlight&&this.enableHighlight(a);this._maxHeight=m.get(this._contentPane,"maxHeight")},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments)},setTitle:function(a){this.popupWindow&&
(y.isDefined(a)&&""!==a||(a="\x26nbsp;"),this.destroyDijits(this._title),this.place(a,this._title),this.isShowing&&(this.startupDijits(this._title),this.reposition()))},setContent:function(a){this.popupWindow&&(y.isDefined(a)&&""!==a||(a="\x26nbsp;"),this._destroyContent(),this.place(a,this._contentPane),this.isShowing&&(this._startupContent(),this.reposition()))},show:function(a,b){if(this.popupWindow)if(this._delayHide=!1,a){var c=this.map;a.spatialReference?(this.location=a,a=c.toScreen(a)):this.location=
c.toMap(a);var d=c._getFrameWidth();if(-1!==d&&(a.x%=d,0>a.x&&(a.x+=d),c.width>d))for(c=(c.width-d)/2;a.x<c;)a.x+=d;this._maximized?this.restore():this._setPosition(a);b&&b.closestFirst&&this.showClosestFirst(this.location);this.isShowing||(this._toggleVisibility(!0),this._followMap(),this.startupDijits(this._title),this._startupContent(),this.reposition(),this.showHighlight(),this.onShow())}else this._toggleVisibility(!0)},hide:function(){this.isShowing&&(this._toggleVisibility(!1),this._unfollowMap(),
this.keepHighlightOnHide||this.hideHighlight(),this.onHide())},resize:function(a,b){this.popupWindow&&(this._sizers.style({width:a+"px"}),m.set(this._contentPane,"maxHeight",b+"px"),this._maxHeight=b,this.isShowing&&this.reposition())},reposition:function(){this.popupWindow&&this.map&&this.location&&!this._maximized&&this.isShowing&&this._setPosition(this.map.toScreen(this.location))},addActions:function(a){return k.map(a,function(a){var b=x.create("a",{href:"javascript:void(0);",className:"action "+
a.className,title:a.title,innerHTML:a.title},this._actionList);f.connect(b,"onclick",a.callback);return{action:a,node:b}},this)},removeActions:function(a){k.forEach(a,function(a){x.destroy(a.node)})},getCurrentAnchor:function(){return this._anchor},maximize:function(){var a=this.map;if(a&&!this._maximized&&this.popupWindow){this._maximized=!0;var b=this._maxButton;e.remove(b,"maximize");e.add(b,"restore");v.set(b,"title",this._nls.NLS_restore);var b=this.marginLeft,c=this.marginTop,d=a.width-2*b,
a=a.height-2*c;m.set(this.domNode,{left:this._isRTL?null:b+"px",right:this._isRTL?b+"px":null,top:c+"px",bottom:null});m.set(this._positioner,{left:null,right:null,top:null,bottom:null});this._savedWidth=m.get(this._sizers[0],"width");this._savedHeight=m.get(this._contentPane,"maxHeight");this._sizers.style({width:d+"px"});m.set(this._contentPane,{maxHeight:a-65+"px",height:a-65+"px"});this._showPointer("");this._unfollowMap();e.add(this.domNode,"esriPopupMaximized");this.onMaximize()}},restore:function(){if(this.map&&
this._maximized&&this.popupWindow){this._maximized=!1;var a=this._maxButton;e.remove(a,"restore");e.add(a,"maximize");v.set(a,"title",this._nls.NLS_maximize);m.set(this._contentPane,"height",null);this.resize(this._savedWidth,this._savedHeight);this._savedWidth=this._savedHeight=null;this.show(this.location);this._followMap();e.remove(this.domNode,"esriPopupMaximized");this.onRestore()}},startup:function(){},destroy:function(){this.map&&this.unsetMap();this.cleanup();this.isShowing&&this.hide();this.destroyDijits(this._title);
this._destroyContent();k.forEach(this._eventConnections,f.disconnect);x.destroy(this.domNode);this._sizers=this._contentPane=this._actionList=this._positioner=this._pointer=this._outerPointer=this._title=this._prevFeatureButton=this._nextFeatureButton=this._spinner=this._eventConnections=this._pagerScope=this._targetLocation=this._nls=this._maxButton=null},selectNext:function(){this.select(this.selectedIndex+1)},selectPrevious:function(){this.select(this.selectedIndex-1)},setFeatures:function(a,b){this._transientAnchor=
b&&b.anchor;this.inherited(arguments);this._updateUI()},clearFeatures:function(a){a||(this._transientAnchor=null);this.inherited(arguments)},postscript:null,_highlightSetter:function(a){var b=this.highlight,c=this.map;this.highlight=a;if(c&&a!==b)if(a){if(this.enableHighlight(c),a=this.features&&this.features[this.selectedIndex])this.updateHighlight(c,a),this.showHighlight()}else this.disableHighlight(c)},_pagingControlsSetter:function(a){var b=this.pagingControls,c=this.map;this.pagingControls=a;
c&&a!==b&&this._updatePagingControls()},_pagingInfoSetter:function(a){var b=this.pagingInfo,c=this.map;this.pagingInfo=a;c&&a!==b&&this.features&&this.features.length&&this._updatePagingInfo()},_popupWindowSetter:function(a){var b=this.popupWindow,c=this.map;this.popupWindow=a;c&&a!==b&&(a?(this._updateUI(),this._updateWindow()):(this.hide(),this.showHighlight()))},_anchorSetter:function(a){var b=this.anchor;this.anchor=a;this.map&&a!==b&&this.reposition()},_startupContent:function(){var a=this._contentPane;
this.startupDijits(a);k.forEach(this._getPopupRendererDijits(a),function(a){if(!this._contentUpdateHandles[a.id]){var b=a.on("content-update",t.hitch(this,function(){this.reposition()}));this._contentUpdateHandles[a.id]=b}},this)},_destroyContent:function(){var a=this._contentPane;k.forEach(this._getPopupRendererDijits(a),function(a){var b=this._contentUpdateHandles[a.id];b&&(b.remove(),delete this._contentUpdateHandles[a.id])},this);this.destroyDijits(a)},_getPopupRendererDijits:function(a){a=this.getDijits(a);
return a=k.filter(a,function(a){return a&&a.set&&/_PopupRenderer/.test(a.declaredClass)})},_featuresCleared:function(){this.setTitle("\x26nbsp;");this.setContent("\x26nbsp;");this._setPagerCallbacks(this);this._updateUI();this.hideHighlight()},_featureSelected:function(){this._updateUI();this._updateWindow()},_updateWindow:function(){var a=this.selectedIndex;if(0<=a){var b=this.features[a].getContent();if(!this.titleInBody&&b&&t.isString(b.id)){var c=K.byId(b.id);c&&c.set&&/_PopupRenderer/.test(c.declaredClass)&&
c.set("showTitle",!1)}this.setContent(b);this.updateHighlight(this.map,this.features[a]);this.showHighlight()}},_toggleVisibility:function(a){this._setVisibility(a);this.isShowing=a},_setVisibility:function(a){e.toggle(this.domNode,"esriPopupVisible",a);e.toggle(this.domNode,"esriPopupHidden",!a)},_waitAndHide:function(a){var b=this;this._delayHide=!0;setTimeout(function(){b._delayHide&&(b._delayHide=!1,b.hide())},a)},_followMap:function(){this._unfollowMap();var a=this.map;this._handles=[f.connect(a,
"onPanStart",this,this._onPanStart),f.connect(a,"onPan",this,this._onPan),f.connect(a,"onZoomStart",this,this._onZoomStart),f.connect(a,"onExtentChange",this,this._onExtentChange)]},_unfollowMap:function(){var a=this._handles;a&&(k.forEach(a,f.disconnect),this._handles=null)},_onPanStart:function(){var a=this.domNode.style;this._panOrigin={left:a.left,top:a.top,right:a.right,bottom:a.bottom}},_onPan:function(a,b){var c=this._panOrigin;a=b.x;b=b.y;var d=c.left,e=c.top,f=c.right,c=c.bottom;d&&(d=parseFloat(d)+
a+"px");e&&(e=parseFloat(e)+b+"px");f&&(f=parseFloat(f)-a+"px");c&&(c=parseFloat(c)-b+"px");m.set(this.domNode,{left:d,top:e,right:f,bottom:c})},_onZoomStart:function(){this._setVisibility(!1)},_onExtentChange:function(a,b,c){c&&(this._setVisibility(!0),this.show(this._targetLocation||this.location));this._targetLocation=null},_toggleSize:function(){this._maximized?this.restore():this.maximize()},_getTargetAnchor:function(){return this._transientAnchor||this.anchor},_setPosition:function(a){var b=
a.x,c=a.y;a=this.offsetX||0;var d=this.offsetY||0,e=0,f=0,h=this.map,g=h.position.x,k=h.position.y,z=h.width,t=h.height,h="Left",l="bottom",n="right",q="top",u=G.getContentBox(this._positioner),r=u.w/2,x=u.h/2,v=m.get(this._sizers[0],"height")+this._maxHeight+m.get(this._sizers[2],"height"),y=v/2,w=0,C=0,D=z,E=t,A=b,B=c,p=this._getTargetAnchor().toLowerCase();if("auto"===p){if(p=H.getBox)p=p(),w=Math.max(p.l,g),D=Math.min(p.l+p.w,g+z),C=Math.max(p.t,k),E=Math.min(p.t+p.h,k+t),A+=g,B+=k;g=B-C>=v;k=
E-B>=v;z=D-A>=u.w;u=A-w>=u.w;B-C>y&&E-B>=y&&(z?(l="",h="Left",q="",n="right"):u&&(l="",h="Right",q="",n="left"));h&&l&&A-w>r&&D-A>=r&&(g?(h="",l="bottom",n="",q="top"):k&&(h="",l="top",n="",q="bottom"));h&&l&&(z&&g?(h="Left",l="bottom",n="right",q="top"):z&&k?(h="Left",l="top",n="right",q="bottom"):u&&k?(h="Right",l="top",n="left",q="bottom"):u&&g&&(h="Right",l="bottom",n="left",q="top"));this._anchor=q&&n?q+"-"+n:q||n}else l=h="",-1!==p.indexOf("top")?l="bottom":-1!==p.indexOf("bottom")&&(l="top"),
-1!==p.indexOf("left")?h="Right":-1!==p.indexOf("right")&&(h="Left"),this._anchor=this._getTargetAnchor();n=l+h;switch(n){case "top":case "bottom":f=14;break;case "Left":case "Right":e=13;break;case "topLeft":case "topRight":case "bottomLeft":case "bottomRight":f=14,e=-16}m.set(this.domNode,{left:b+"px",top:c+"px",right:null,bottom:null});b={left:null,right:null,top:null,bottom:null};h?b[h.toLowerCase()]=e+a+"px":b.left=-r+"px";l?b[l]=f+d+"px":b.top=-x+"px";m.set(this._positioner,b);this._showPointer(n)},
_showPointer:function(a){e.remove(this._pointer,"top bottom right left topLeft topRight bottomRight bottomLeft hidden".split(" "));e.remove(this._outerPointer,["right","left","hidden"]);"Right"===a||"Left"===a?(a=a.toLowerCase(),e.add(this._outerPointer,a)):e.add(this._pointer,a)},_setPagerCallbacks:function(a,b,c){if(this.pagingControls&&(a!==this||this._pagerScope&&this._pagerScope!==this)&&a!==this._pagerScope){this._pagerScope=a;a===this&&(b=this.selectPrevious,c=this.selectNext);var d=this._eventConnections;
f.disconnect(d[1]);f.disconnect(d[2]);b&&(d[1]=f.connect(this._prevFeatureButton,"onclick",a,b));c&&(d[2]=f.connect(this._nextFeatureButton,"onclick",a,c))}},_getLocation:function(a){var b,c,d=a&&a.geometry;if(d)switch(d.type){case "point":b=d;a.isAggregate()&&(a=a.getChildGraphics(),c=a[0],a=(c=c.geometry&&c.geometry.spatialReference)&&new N({points:k.map(a,function(a){a=a.geometry;return[a.x,a.y]}),spatialReference:c.toJson()}),c=w.getDenormalizedExtent(a));break;case "multipoint":b=d.getPoint(0);
c=w.getDenormalizedExtent(d);break;case "polyline":case "polygon":b=d.getPoint(0,0),c=w.getDenormalizedExtent(d)}return[b,c]},_zoomToFeature:function(a){a.preventDefault();var b=this.features,c=this.selectedIndex;a=this.map;if(b)if(c=this._getLocation(b[c]),b=c[0],c=c[1],b||(b=this.location),c&&c.intersects(this.location)||(this.location=b),c&&c.getWidth()&&c.getHeight())a.setExtent(c,!0);else{var d=a.getNumLevels(),c=a.getLevel(),e=a.getMaxZoom(),f=this.zoomFactor||1;0<d?c!==e&&(d=c+f,d>e&&(d=e),
a.navigationManager._wheelZoom({value:d-c,mapPoint:b},!0)):a.navigationManager._wheelZoom({value:1/Math.pow(2,f)*2,mapPoint:b},!0)}},_updatePagingControls:function(){var a=this._prevFeatureButton,b=this._nextFeatureButton,c=this.selectedIndex,d=this.features?this.features.length:0;this.pagingControls&&1<d?(0===c?e.add(a,"hidden"):e.remove(a,"hidden"),c===d-1?e.add(b,"hidden"):e.remove(b,"hidden")):(e.add(a,"hidden"),e.add(b,"hidden"))},_updatePagingInfo:function(){var a=this.features?this.features.length:
0,b=this._nls,c="\x26nbsp;";this.pagingInfo&&1<a&&b.NLS_pagingInfo&&(c=y.substitute({index:this.selectedIndex+1,total:a},b.NLS_pagingInfo));a&&(b=this.getSelectedFeature(),a=b.getInfoTemplate(),b=b.getTitle(),a&&!/esri\.InfoTemplate/.test(a.declaredClass)&&this.titleInBody||!b||(c=b+("\x26nbsp;"===c?"":" "+c)));this.setTitle(c)},_updateUI:function(){if(this.popupWindow){var a=this.features,b=this.deferreds,c=a?a.length:0,d=this._spinner,f=this._actionList,g=this._nls;this._updatePagingControls();
this._updatePagingInfo();c?e.remove(f,"hidden"):e.add(f,"hidden");b&&b.length?a?e.remove(d,"hidden"):this.setContent("\x3cdiv style\x3d'text-align: center;'\x3e"+g.NLS_searching+"...\x3c/div\x3e"):e.add(d,"hidden");c||b&&b.length?this._delayHide=!1:(this.setContent("\x3cdiv style\x3d'text-align: center;'\x3e"+g.NLS_noInfo+".\x3c/div\x3e"),this.visibleWhenEmpty||this._waitAndHide(this.hideDelay))}}});F("extend-esri")&&t.setObject("dijit.Popup",r,L);return r});