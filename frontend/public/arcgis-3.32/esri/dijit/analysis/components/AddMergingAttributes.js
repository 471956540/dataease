// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/components/AddMergingAttributes","../../../kernel ../../../lang dijit/registry dijit/form/Select dijit/form/ValidationTextBox dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/dom-construct dojo/has dojo/on dojo/Evented dojo/i18n!../../../nls/jsapi dojo/i18n!../nls/AddMergingAttributes".split(" "),function(n,p,q,k,r,h,t,l,u,g,v,f,w,x,y,z,A){h=u([h,t,y],{declaredClass:"esri.dijit.analysis.components.AddMergingAttributes",
mergeLayer:null,inputLayer:null,restDelimiter:" ",summaryFields:[],showGeoAnalyticsParams:null,allowStringType:!0,allowDateType:!0,emptyValue:"",i18n:z.common,rows:[],includedFields:{},totalFieldsCount:0,trueCount:0,triggerChange:!0,inputLayerFields:{},removeAllBool:!1,inputSelectTdWidth:"85%",removeTdWidth:"2%",allowedTypes:{esriFieldTypeSmallInteger:"number",esriFieldTypeInteger:"number",esriFieldTypeSingle:"number",esriFieldTypeDouble:"number",esriFieldTypeString:"string",esriFieldTypeDate:"date"},
constructor:function(a){this.templateString=!0===a.addAsRow?"\x3ctr data-dojo-attach-point\x3d'_emptyMergeFieldsRow'\x3e\x3ctd colspan\x3d'3' class\x3d'clear'\x3e\x3c/td\x3e\x3c/tr\x3e":"\x3ctable class\x3d'fullSpread'\x3e\x3ctr data-dojo-attach-point\x3d'_emptyMergeFieldsRow'\x3e\x3ctd colspan\x3d'3' class\x3d'clear'\x3e\x3c/tr\x3e\x3c/table\x3e"},postMixInProperties:function(){this.inherited(arguments);g.mixin(this.i18n,A)},postCreate:function(){this.inherited(arguments)},destroy:function(){this.inherited(arguments)},
_createRow:function(){var a,b,d,c,e,m;if(!this.inputLayer||!this.mergeLayer)return!1;a=f.create("tr",null,this._emptyMergeFieldsRow,"before");b=f.create("td",{style:{width:this.inputSelectTdWidth},colspan:2},a);d=f.create("td",{"class":"removeTd",style:{width:this.removeTdWidth,maxWidth:"12px",paddingLeft:"0.35em"}},a);c=this._createAttrSelect(b);e=this._createStatsSelect(b);m=this._createAttrRenameBox(b);b=this._createAttrMatchSelect(b);d=this._createRemoveIcon(d,a);this._linkChildComponents({attrSelect:c,
statsSelect:e,attrRenameBox:m,attrMatchSelect:b,removeIcon:d},a);this.rows.push(a);return!0},_createAttrSelect:function(a){var b;a=new k({maxHeight:200,"class":"esriLeadingMargin1 mediumInput attrSelect esriTrailingMargin05",style:{overflowX:"hidden",tableLayout:"fixed",display:"inline-block",width:"29%"}},f.create("select",null,a));b=this._getFilteredAttrOptions(this.emptyValue);a.addOption(b);b=a.watch("value",this._handleAttrSelectUpdate);this.own(b);return a},_createStatsSelect:function(a){var b;
a=new k({maxHeight:200,"class":"mediumInput statsSelect esriTrailingMargin05",style:{overflowX:"hidden",tableLayout:"fixed",display:"inline-block",width:"28.5%"}},f.create("select",null,a));b=a.on("change",this._handleStatsValueChange);this.own(b);this._addOperationOptions({selectWidget:a,emptyValue:this.emptyValue});return a},_createAttrRenameBox:function(a){return new r({maxHeight:200,"class":"attrSelect",style:{overflow:"hidden",tableLayout:"fixed",display:"none",width:"29%"}},f.create("validationtextbox",
null,a))},_createAttrMatchSelect:function(a){a=new k({maxHeight:200,"class":"mediumInput attrSelect",style:{overflowX:"hidden",tableLayout:"fixed",display:"none",width:"29%"}},f.create("select",null,a));this._addAttributeSelectOptions({selectWidget:a,layer:this.inputLayer,emptyValue:this.emptyValue});return a},_createRemoveIcon:function(a,b){a=f.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+require.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e",
style:{visibility:"hidden"}},a);b=x(a,"click",g.hitch(this,this._remove,b));this.own(b);return a},_addAttributeSelectOptions:function(a){var b=[],d,c,e;b.push({value:a.emptyValue,label:this.i18n.attribute});if(void 0!==a.layer&&""!==a.layer)for(d=0;d<a.layer.fields.length;d++)c=a.layer.fields[d],void 0!==this.allowedTypes[c.type]&&c.name!==a.layer.objectIdField&&(e=this.allowedTypes[c.type],b.push({value:c.name,label:c.alias&&""!==c.alias?c.alias:c.name,type:e}));void 0!==a.selectWidget&&(a.selectWidget.options=
[],a.selectWidget.addOption(b),a.selectWidget.set("value",a.emptyValue));return b},_addOperationOptions:function(a){var b=a.selectWidget,d=[{value:"Rename",label:this.i18n.rename},{value:"Remove",label:this.i18n.remove},{value:"Match",label:this.i18n.match}];a=p.isDefined(a.emptyValue)?a.emptyValue:"0";b.addOption({value:a,label:this.i18n.operation});b.addOption(d);b.set("value",a)},_linkChildComponents:function(a,b){for(var d in a)a[d].childComponents=a,a[d].referenceWidget=this;this._currentChildComponents=
b.childComponents=a},_getMergingAttributesAttr:function(){var a=[],b,d,c,e,f;for(b=0;b<this.rows.length;b++)d=this.rows[b].childComponents,c=d.attrSelect,e=d.statsSelect,f=d.attrRenameBox,d=d.attrMatchSelect,""!==c.get("value")&&""!==e.get("value")&&(c=c.get("value")+this.restDelimiter+e.get("value"),"Remove"===e.get("value")?a.push(c):"Rename"===e.get("value")?a.push(c+this.restDelimiter+f.get("value")):"Match"===e.get("value")&&a.push(c+this.restDelimiter+d.get("value")));return this.showGeoAnalyticsParams?
this._stringToGax(a):a},loadOptions:function(a){var b,d,c;this._resetOptions();this.triggerChange=!1;for(b=0;b<a.length;b++){d=a[b];c;"string"===typeof d&&(c=d.split(" "));this._currentChildComponents.attrSelect.set("value",c?c[0]:d.mergeLayerField);this._currentChildComponents.statsSelect.set("value",c?c[1]:d.mergeType,!1);this._currentChildComponents.attrSelect.set("required",!0);this._currentChildComponents.statsSelect.set("required",!0);if(c&&"Rename"===c[1]||"Rename"===d.mergeType)this._currentChildComponents.attrRenameBox.set("value",
c?c[2]:d.mergeValue),this._currentChildComponents.attrRenameBox.domNode.style.display="inline-block",this._currentChildComponents.attrRenameBox.set("required",!0);else if(c&&"Match"===c[1]||"Match"===d.mergeType)this._updateAttrMatchSelectOptions(this._currentChildComponents.attrSelect,this._currentChildComponents.attrMatchSelect),this._currentChildComponents.attrMatchSelect.set("value",c?c[2]:d.mergeValue,!1),this._currentChildComponents.attrMatchSelect.domNode.style.display="inline-block",this._currentChildComponents.attrMatchSelect.set("required",
!0);this.includedFields[c?c[0]:d.mergeLayerField].included=!0;this.trueCount+=1;this._appendRow()}this._updateAttrSelectOptions();this.triggerChange=!0},_stringToGax:function(a){var b,d,c;for(b=0;b<a.length;b++)d=a[b].split(this.restDelimiter),c={},c.mergeLayerField=d[0],c.mergeType=d[1],3===d.length&&(c.mergeValue=d[2]),a[b]=c;return a},_handleAttrSelectUpdate:function(a,b,d){var c,e;a=this.get("childComponents").statsSelect;c=this.get("childComponents").attrMatchSelect;e=this.get("referenceWidget");
!1!==e.triggerChange&&(""!==b&&e._refreshOptions(b,!1),e._refreshOptions(d,!0),""!==d?a.set("required",!0):a.set("required",!1),""!==d&&""!==a.get("value")&&("Match"===a.get("value")&&e._updateAttrMatchSelectOptions(this,c),e._appendRow()))},_handleStatsValueChange:function(a){var b,d,c,e;d=this.get("childComponents").attrSelect;c=d.get("childComponents").attrMatchSelect;e=d.get("childComponents").attrRenameBox;b=this.get("referenceWidget");"Rename"===a?(e.domNode.style.display="inline-block",c.domNode.style.display=
"none",e.set("required",!0),c.set("required",!1)):"Remove"===a||""===a?(e.domNode.style.display="none",c.domNode.style.display="none",e.set("required",!1),c.set("required",!1)):"Match"===a&&(c.domNode.style.display="inline-block",e.domNode.style.display="none",e.set("required",!1),c.set("required",!0));""!==a?d.set("required",!0):d.set("required",!1);""!==d.get("value")&&""!==a&&("Match"===this.get("value")&&b._updateAttrMatchSelectOptions(d,c),b._appendRow())},_appendRow:function(){this.trueCount<
this.totalFieldsCount&&!this._hasUnassignedRow()&&(v.set(this._currentChildComponents.removeIcon,"visibility","visible"),this._createRow())},_setMergeLayerAttr:function(a){this.mergeLayer=a;this.includedFields=this._createFieldsDictionary(this.mergeLayer,!0);this._refreshTotalFieldsCount();this.mergeLayer?this._resetOptions():this._removeAll()},_setInputLayerAttr:function(a){this.inputLayer=a;this.inputLayerFields=this._createFieldsDictionary(this.inputLayer,!1);this.inputLayer?this._resetOptions():
this._removeAll()},_refreshTotalFieldsCount:function(){var a,b;this.totalFieldsCount=0;if(void 0!==this.mergeLayer&&""!==this.mergeLayer)for(a=0;a<this.mergeLayer.fields.length;a++)b=this.mergeLayer.fields[a].type,void 0!==this.allowedTypes[b]&&(this.totalFieldsCount+=1)},_createFieldsDictionary:function(a,b){var d={},c=[],e,f;if(void 0!==a&&""!==a)for(c=this._addAttributeSelectOptions({layer:a,emptyValue:this.emptyValue}),a=0;a<c.length;a++)e=c[a].value,f=c[a],!0===b&&(f.included=!1),d[e]=f;return d},
_resetOptions:function(){this._removeAll();this._createRow()},_removeAll:function(){this.removeAllBool=!0;l.forEach(this.rows,this._remove,this);this.rows=[];this.trueCount=0;this.removeAllBool=!1},_remove:function(a){var b;b=this._destroyRow(a);this.removeAllBool||(a=this.rows.indexOf(a),this.rows.splice(a,1),this._refreshOptions(b,!1))},_destroyRow:function(a){var b=a.childComponents.attrSelect.get("value");l.forEach(q.findWidgets(a),function(a,b){a.destroyRecursive()},this);f.destroy(a);return b},
_refreshOptions:function(a,b){this._toggleIsIncluded(a,b);this._updateAttrSelectOptions()},_toggleIsIncluded:function(a,b){a!==this.emptyValue&&(a=this.includedFields[a],!0===b&&!0!==a.included?(this.trueCount+=1,a.included=b):!1===b&&!1!==a.included&&(--this.trueCount,a.included=b))},_updateAttrSelectOptions:function(){var a,b,d;for(a=0;a<this.rows.length;a++)b=this.rows[a].childComponents.attrSelect,d=b.get("value"),b.options=[],d=this._getFilteredAttrOptions(d),b.addOption(d)},_getFilteredAttrOptions:function(a){var b=
[],d,c;for(d in this.includedFields)c=g.clone(this.includedFields[d]),d===a?(c.selected=!0,b.push(c)):!1!==c.included&&d!==this.emptyValue||b.push(c);return b},_updateAttrMatchSelectOptions:function(a,b){a=a.get("value");a=this.includedFields[a].type;var d=[],c,e;b.options=[];for(c in this.inputLayerFields)e=g.clone(this.inputLayerFields[c]),e.type!==a&&e.value!==this.emptyValue||d.push(e);b.addOption(d)},_hasUnassignedRow:function(){return l.some(this.rows,function(a){var b;b=a.childComponents;a=
b.attrSelect;b=b.statsSelect;return""===a.get("value")||""===b.get("value")})}});w("extend-esri")&&g.setObject("dijit.analysis.components.AddMergingAttributes",h,n);return h});