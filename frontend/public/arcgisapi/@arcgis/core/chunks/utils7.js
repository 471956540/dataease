/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import{u as n}from"../core/scheduling.js";import{c as t,a as l}from"./number.js";import i from"../renderers/visualVariables/support/ColorStop.js";import{f as o,r as a}from"./numberUtils.js";const r=e.getLogger("esri.renderers.support.utils"),s="<",u=">",d="%",f="–",m={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},p={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"},c=t("short-date");function y(e){const{values:n,colors:t,labelIndexes:a,isDate:r,dateFormatOptions:d}=e;return n.map(((e,f)=>{let m=null;if(!a||a.indexOf(f)>-1){let t;t=r?l(e,d):o(e),t&&(m=function(e,n,t){let l="";return 0===n?l=s+" ":n===t&&(l=u+" "),l+e}(t,f,n.length-1))}return new i({value:e,color:t[f],label:m})}))}function h(e){let n=e.minValue,t=e.maxValue;const l=e.isFirstBreak?"":u+" ",i="percent-of-total"===e.normalizationType?d:"";return n=null==n?"":o(n),t=null==t?"":o(t),l+n+i+" "+f+" "+t+i}function g(e){const n=e.classBreakInfos,t=e.normalizationType;let l=[];if(n&&n.length)if("standard-deviation"!==e.classificationMethod)if(e.round){l.push(n[0].minValue);for(const e of n)l.push(e.maxValue);l=a(l),n.forEach(((e,n)=>{e.label=h({minValue:0===n?l[0]:l[n],maxValue:l[n+1],isFirstBreak:0===n,normalizationType:t})}))}else n.forEach(((e,n)=>{e.label=h({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===n,normalizationType:t})}));else r.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.")}function b(e){const n=e.map((e=>new Date(e))),t=n.length;let l=1/0,i=null;for(let e=0;e<t-1;e++){const o=n[e];let a=1/0,r=null;for(let l=e+1;l<t;l++){const e=n[l],t=(o.getFullYear()!==e.getFullYear()?"year":o.getMonth()!==e.getMonth()&&"month")||o.getDate()!==e.getDate()&&"day"||o.getHours()!==e.getHours()&&"hour"||o.getMinutes()!==e.getMinutes()&&"minute"||o.getSeconds()!==e.getSeconds()&&"second"||"millisecond",i=m[t];i<a&&(a=i,r=t)}a<l&&(l=a,i=r)}return i}function x(e){const{value:n,domain:i,fieldInfo:a,dateFormatInterval:r}=e;let s=String(n);const u=i&&"codedValues"in i&&i.codedValues?i.getName(n):null;return u?s=u:"number"==typeof n&&(s=a&&"date"===a.type?l(n,r&&t(p[r])):o(n)),s}function F(e,n){return"normalizationField"in e&&e.normalizationField?(t=e.field,l=e.normalizationField,{type:"normalized-field",field:t,normalizationField:l}):"field"in e&&e.field?v(e.field):"valueExpression"in e&&e.valueExpression?(i=e.valueExpression,o=e.valueExpressionTitle,{type:"expression",expression:i,title:o,returnType:n}):null;var t,l,i,o}function v(e){return{type:"field",field:e}}function z(e,t){const l=[];if("class-breaks"===e.type||"heatmap"===e.type)l.push(F(e,"number"));else if("unique-value"===e.type){const n=e.authoringInfo;if(n&&"relationship"===n.type){if(n.field1&&n.field2){const e=n.field1.field,t=n.field2.field,i=n.field1.normalizationField,o=n.field2.normalizationField;l.push(F({field:e,normalizationField:i})),l.push(F({field:t,normalizationField:o}))}}else{const n=e.uniqueValueInfos[0];let t=null;if(n&&n.value){const n=typeof e.uniqueValueInfos[0].value;"string"!==n&&"number"!==n||(t=n)}l.push(F(e,t)),[e.field2,e.field3].forEach((e=>e&&l.push(v(e))))}}else"dot-density"===e.type&&e.attributes.forEach((e=>l.push(F(e,"number"))));const i=t?t(e):"visualVariables"in e?e.visualVariables:null;return i&&i.forEach((e=>l.push(F(e,"number")))),n(l.filter(Boolean),((e,n)=>"field"===e.type&&"field"===n.type?e.field===n.field:"normalized-field"===e.type&&"normalized-field"===n.type?e.field===n.field&&e.normalizationField===n.normalizationField:"expression"===e.type&&"expression"===n.type&&e.expression===n.expression))}export{x as a,b,y as c,z as g,g as s,c as t};
