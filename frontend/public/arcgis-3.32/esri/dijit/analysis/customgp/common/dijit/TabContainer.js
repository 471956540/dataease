// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/common/dijit/TabContainer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin ./ViewStack".split(" "),function(e,f,d,c,g,h,k,l,m){return e([k,l,h],{baseClass:"jimu-tab",declaredClass:"esri.dijit.analysis.customgp.common.dijit.TabContainer",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"control" data-dojo-attach-point\x3d"controlNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
postCreate:function(){this.inherited(arguments);if(0!==this.tabs.length){this.controlNodes=[];this.viewStack=new m(null,this.containerNode);var a=1/this.tabs.length*100;this.isNested&&c.addClass(this.domNode,"nested");d.forEach(this.tabs,function(b){this._createTab(b,a)},this)}},startup:function(){this.selected?this.selectTab(this.selected):0<this.tabs.length&&this.selectTab(this.tabs[0].title)},_createTab:function(a,b){b=c.create("div",{innerHTML:a.title,"class":"tab jimu-vcenter-text",style:{width:this.isNested?
"auto":b+"%"},label:a.title},this.controlNode);this.viewStack.viewType=a.content.domNode?"dijit":"dom";a.content.label=a.title;this.viewStack.addView(a.content);this.own(g(b,"click",f.hitch(this,this.onSelect,a.title)));b.label=a.title;this.controlNodes.push(b)},onSelect:function(a){this.selectTab(a)},selectTab:function(a){this._selectControl(a);this.viewStack.switchView(a);this.emit("tabChanged",a)},_selectControl:function(a){d.forEach(this.controlNodes,function(b){c.removeClass(b,"jimu-state-selected");
b.label===a&&c.addClass(b,"jimu-state-selected")})}})});