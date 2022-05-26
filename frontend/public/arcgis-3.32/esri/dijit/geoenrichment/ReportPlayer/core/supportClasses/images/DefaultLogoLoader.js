// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/images/DefaultLogoLoader",["require","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/utils/ColorUtil"],function(c,d,b){return{_identifyDefaultLogoBackground:function(a){return!a||b.isTransparent(a.backgroundColor)?"transparent":b.isLightColor(a.backgroundColor)?"light":"dark"},_loadLogo:function(a){var b=new d;c(["./"+a],function(a){b.resolve(a)});return b.promise},getDefaultLogo:function(a){switch(this._identifyDefaultLogoBackground(a)){case "light":return this._loadLogo("DefaultLogoGraphicReportDark");
case "dark":return this._loadLogo("DefaultLogoGraphicReportLight");default:return this._loadLogo("DefaultLogoGraphicReportGeneric")}}}});