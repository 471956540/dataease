// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/FeatureRecordSetLayer",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../tasks/DataFile","../../kernel"],function(b,c,d,e,f){b=b(e,{declaredClass:"esri.dijit.analysis.FeatureRecordSetLayer",constructor:function(a){a&&c.mixin(this,a)},toJson:function(){var a={};this.url&&(a.url=this.url);this.filter&&(a.filter=this.filter);this.serviceToken&&(a.serviceToken=this.serviceToken);this.featureSet&&(a.featureSet=this.featureSet);this.layerDefinition&&(a.layerDefinition=
this.layerDefinition);this.time&&(a.time=this.time);return a}});d("extend-esri")&&c.setObject("dijit.analysis.FeatureRecordSetLayer",b,f);return b});