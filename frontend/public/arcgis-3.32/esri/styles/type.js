// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/styles/type","dojo/_base/array dojo/_base/lang dojo/has ../kernel ../Color ./colors".split(" "),function(m,p,t,u,h,v){function q(b,a){return m.map(b,function(b){b=new h(b);null!=a&&(b.a=a);return b})}function r(b,a,f){var c;if(b=v[b])switch(c={},c.colors=q(b.stops),c.noDataColor=new h(a.noDataColor),c.opacity=a.fillOpacity||1,f){case "point":c.outline={color:new h(a.outline.color),width:a.outline.width};c.size=a.size;break;case "line":c.width=a.width;break;case "polygon":c.outline={color:new h(a.outline.color),
width:a.outline.width}}return c}function w(b){if("esriGeometryPoint"===b||"esriGeometryMultipoint"===b)b="point";else if("esriGeometryPolyline"===b)b="line";else if("esriGeometryPolygon"===b||"esriGeometryMultiPatch"===b)b="polygon";return b}var k={color:[153,153,153,.25],width:1},e="tropical-bliss desert-blooms under-the-sea vibrant-rainbow ocean-bay prairie-summer pastel-chalk".split(" "),g="predominant-v1 predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" "),
l={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:k,size:8},primary:"cat-dark",secondary:["cat-light"].concat(e,g)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:1},size:8},primary:"cat-light",secondary:["cat-dark"].concat(e,
g)}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-dark",secondary:["cat-light"].concat(e,g)},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-light",secondary:["cat-dark"].concat(e,g)}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:k,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(e,g)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:1},fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(e,
g)}}}},n={};(function(){var b,a,f,c,d,h,e,g;for(b in l)for(c in a=l[b],f=a.basemapGroups,d=n[b]={basemaps:[].concat(f.light).concat(f.dark),point:{},line:{},polygon:{}},f)for(h=f[c],e=0;e<h.length;e++)g=h[e],a.pointSchemes&&(d.point[g]=a.pointSchemes[c]),a.lineSchemes&&(d.line[g]=a.lineSchemes[c]),a.polygonSchemes&&(d.polygon[g]=a.polygonSchemes[c])})();k={getAvailableThemes:function(b){var a=[],f,c,d;for(f in l)c=l[f],d=n[f],b&&-1===m.indexOf(d.basemaps,b)||a.push({name:c.name,label:c.label,description:c.description,
basemaps:d.basemaps.slice(0)});return a},getSchemes:function(b){var a=b.theme,f=b.basemap,c=w(b.geometryType);b=n[a];var d,e;(d=(d=b&&b[c])&&d[f])&&(e={primaryScheme:r(d.primary,d.common,c),secondarySchemes:m.map(d.secondary,function(a){return r(a,d.common,c)})});return e},cloneScheme:function(b){var a;b&&(a=p.mixin({},b),a.colors=q(a.colors),a.noDataColor&&(a.noDataColor=new h(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new h(a.outline.color),width:a.outline.width}));return a}};
t("extend-esri")&&p.setObject("styles.type",k,u);return k});