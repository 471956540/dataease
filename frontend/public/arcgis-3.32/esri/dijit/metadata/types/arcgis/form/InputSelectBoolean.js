// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputSelectBoolean","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/has ../../../../../kernel ../../../form/InputSelectOne ../../../form/Option dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(c,f,g,h,k,l,d,e){c=c([l],{allInline:!0,serializeIfFalse:!1,falseLabel:e.booleanOptions._false,trueLabel:e.booleanOptions._true,falseValue:"False",trueValue:"True",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var a=new g,
b=[];b.push(new d({label:this.falseLabel,value:this.falseValue}));b.push(new d({label:this.trueLabel,value:this.trueValue}));a.resolve(b);return a},getXmlValue:function(){var a=this.inherited(arguments);return null===a||this.serializeIfFalse||a!==this.falseValue?a:null},importValue:function(a,b){if("undefined"!==typeof b&&null!==b&&b.toLowerCase)if(a=b.toLowerCase(),"true"===a||"1"===a)b=this.trueValue;else if("false"===a||"0"===a)b=this.falseValue;this.setInputValue(b)}});h("extend-esri")&&f.setObject("dijit.metadata.types.arcgis.form.InputSelectBoolean",
c,k);return c});