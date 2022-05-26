// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/JsonXmlTypedConverter",["dojo/_base/declare","./RegExpUtil"],function(f,l){var m=f(null,{parseJson:function(c,d){function h(a,b){if("string"===typeof a)e+="\x3c"+b+' type\x3d"string"\x3e'+l.encodeXML(a,!1)+"\x3c/"+b+"\x3e";else if("number"===typeof a)e+="\x3c"+b+' type\x3d"number"\x3e'+a+"\x3c/"+b+"\x3e";else if("boolean"===typeof a)e+="\x3c"+b+' type\x3d"boolean"\x3e'+a+"\x3c/"+b+"\x3e";else if(Array.isArray(a))k(a,b);else if(a&&"object"===typeof a){e+="\x3c"+
b+' type\x3d"object"\x3e';for(var g in a)h(a[g],g);e+="\x3c/"+b+"\x3e"}}function k(a,b){e+="\x3c"+b+' type\x3d"array"\x3e';a.forEach(function(g){h(g,"item")});e+="\x3c/"+b+"\x3e"}var f=d&&d.rootName||"root",e="";d&&d.addDocumentOptions&&(e+='\x3c?xml version\x3d"1.0" encoding\x3d"utf-8"?\x3e');h(c,f);return e=decodeURIComponent(encodeURIComponent(e).replace("%19",""))},parseXml:function(c){function d(g){if(!g.attributes)return null;for(var a=0;a<g.attributes.length;a++){var b=g.attributes[a];if("type"===
b.name)return b.value}return null}function h(a,b){if(b.childNodes)for(var g=0,c=b.childNodes.length;g<c;g++){var d=b.childNodes[g],e=k(d);void 0!==e&&(a[d.nodeName]=e)}return a}function k(a){var b=d(a);if(a.nodeName&&b)switch(b){case "string":return a.childNodes[0]?l.decodeXML(a.childNodes[0].nodeValue):"";case "number":return Number(a.childNodes[0].nodeValue);case "boolean":return"true"===a.childNodes[0].nodeValue;case "object":return h({},a);case "array":return f([],a)}}function f(a,b){if(b.childNodes)for(var c=
0,d=b.childNodes.length;c<d;c++)a[c]=k(b.childNodes[c]);return a}var e,a;c=(new DOMParser).parseFromString(c,"text/xml").childNodes;for(var b=0;b<c.length;b++)if(1===c[b].nodeType){a=c[b];break}a&&(c=d(a),"object"===c?h(e={},a):"array"===c&&f(e=[],a));return e}});f=m();f.runTest=function(){console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------");var c={type:"uniqueValue",field1:"SubtypeCD",fieldDelimiter:", ",defaultSymbol:{type:"esriSLS",style:"esriSLSSolid",
color:[130,130,130,255],width:1},defaultLabel:"\x3cOther values\x3e",uniqueValueInfos:[{value:"1",label:"Duct Bank",description:"Duct Bank description",symbol:{type:"esriSLS",style:"esriSLSDash",color:[76,0,163,255],width:1}},{value:"2",label:"Trench",description:"Trench description",symbol:{type:"esriSLS",style:"esriSLSDot",color:[115,76,0,255],width:1}}],rotationType:"geographic",rotationExpression:"[Rotation] * 2"},d=new m,c=JSON.parse(JSON.stringify(c));console.log(JSON.stringify(c,void 0,4));
var h=d.parseJson(c);console.log(h);var f=d.parseXml(h);console.log(JSON.stringify(f,void 0,4));d=d.parseJson(f);console.log(d);console.log("Compare JSON1 and JSON2: "+(JSON.stringify(c)===JSON.stringify(f)));console.log("Compare XML1 and XML2: "+(h===d));console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------")};return f});