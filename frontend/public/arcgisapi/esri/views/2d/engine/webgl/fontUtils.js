// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function e(a){a=a.toLowerCase().split(" ").join("-");switch(a){case "serif":return"noto-serif";case "sans-serif":return"arial-unicode-ms";case "monospace":return"ubuntu-mono";case "fantasy":return"cabin-sketch";case "cursive":return"redressed";default:return a}}c.getFontDecorationTop=function(a){switch(a){case "underline":return-26;case "line-through":return-18}return NaN};c.getFullyQualifiedFontName=function(a){a:{if(a.weight)switch(a.weight.toLowerCase()){case "bold":case "bolder":var b=
"-bold";break a}b=""}a:{if(a.style)switch(a.style.toLowerCase()){case "italic":case "oblic":var d="-italic";break a}d=""}b+=d;return e(a.family)+(0<b.length?b:"-regular")};Object.defineProperty(c,"__esModule",{value:!0})});