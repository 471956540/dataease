// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","./treeAnalysis","./lib/esprima"],function(f,g,m){f.extractFieldLiterals=function(a,b){return g.findFieldLiterals(a)};f.parseScript=function(a,b=[]){a=m.parse("function _() { "+a+"\n}");if(null===a.body||void 0===a.body)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if("BlockStatement"!==a.body[0].body.type)throw Error("Invalid formula content.");const h=g.validateLanguage(a);if(""!==
h)throw Error(h);g.findScriptDependencies(a,b);return a};f.referencesFunction=function(a,b){return g.referencesFunction(a,b)};f.referencesMember=function(a,b){return g.referencesMember(a,b)};f.scriptCheck=function(a,b,h,n,p){const k=[];a="function _() { \n"+a+"\n}";try{const c=m.parse(a,{tolerant:!0,loc:!0,range:!0}),e=c.errors;if(0<e.length)for(let l=0;l<e.length;l++)k.push({line:e[l].lineNumber-2,character:e[l].column,reason:e[l].description});const d=g.checkScript(c,b,h,n,p);for(b=0;b<d.length;b++)d[b].line-=
2,d[b].range&&(d[b].range=[d[b][0]-15,d[b][1]-15]),d[b].loc&&(d[b].loc.start.line-=2,d[b].loc.end.line-=2),k.push(d[b])}catch(c){try{if("Unexpected token }"===c.description){const e=a.split("\n").length;c.lineNumber===e?(c.index=a.length-1,k.push({line:c.lineNumber-4,character:c.column,reason:"Unexpected end of script"})):(c.index=a.length-1,k.push({line:c.lineNumber-2,character:c.column,reason:"Unexpected end of script"}))}else k.push({line:c.lineNumber-2,character:c.column,reason:c.description})}catch(e){}}return k};
f.validateScript=function(a,b,h){return g.validateScript(a,b,h)};Object.defineProperty(f,"__esModule",{value:!0})});