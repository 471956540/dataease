// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/toolbar/ZoomSelect","dojo/_base/declare dojo/dom-construct esri/dijit/geoenrichment/lists/FlowListDefaultItemRenderer ./Select ./ZoomUtil esri/dijit/geoenrichment/utils/NodeLabelEditor dojo/i18n!esri/nls/jsapi".split(" "),function(e,k,g,f,l,m,b){b=b.geoenrichment.dijit.ReportPlayer.PlayerToolbar;var p=e(g,{createPresentation:function(a,n,e,g){var f=this,c=this.inherited(arguments);if(a.isCustomZoom){c.innerHTML="";var d=k.create("div",{"class":"esriGELink",
innerHTML:b.customZoom},c),h=new m({numericOnly:!0,onApply:function(a){f.onCustomZoomApplied(a);d.innerHTML=b.customZoom},onCancel:function(){d.innerHTML=b.customZoom}});d.addEventListener("click",function(){h.range={min:10,max:1E3};h.editNodeLabel(d,"")})}else this.selectPresentation(c,n);return c},onCustomZoomApplied:function(a){}});return e(f,{listClass:"esriGEOnDemandSelectUnlimitedTallList esriGEOnDemandSelectSpacedOut",buildRendering:function(){var a=this;this.inherited(arguments);this.itemRenderer=
new p({onCustomZoomApplied:function(b){a.set("value",b);a.onChange({value:b});a.closePopup()}})},postCreate:function(){this.inherited(arguments);var a=l.getOptions().slice();a.push({isCustomZoom:!0,enabled:!1});this.set("options",a);this.set("value",100)}})});