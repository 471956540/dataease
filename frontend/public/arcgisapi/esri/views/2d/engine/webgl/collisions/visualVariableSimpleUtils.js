// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/mathUtils","../../../../../renderers/support/lengthUtils"],function(h,k,n){function l(a,b){switch(b.transformationType){case "additive":var c=e(b.minSize,a);return a+=c||b.minDataValue;case "constant":return c=(c=b.stops)&&c.length&&c[0].size,null==c&&(c=b.minSize),a=e(c,a);case "clamped-linear":c=(a-b.minDataValue)/(b.maxDataValue-b.minDataValue);var d=e(b.minSize,a),g=e(b.maxSize,a);a=a<=b.minDataValue?d:a>=b.maxDataValue?g:d+c*(g-d);return a;case "proportional":return c=
a/b.minDataValue,d=e(b.minSize,a),a=e(b.maxSize,a),a=k.clamp(c*d,d,a);case "stops":{const [f,m,p]=q(a,b.cache.ipData);f===m?a=e(b.stops[f].size,a):(c=e(b.stops[f].size,a),a=e(b.stops[m].size,a),a=c+(a-c)*p)}return a;case "real-world-size":{c=n.meterIn[b.valueUnit];d=e(b.minSize,a);g=e(b.maxSize,a);({valueRepresentation:b}=b);let f=null;f="area"===b?2*Math.sqrt(a/r)/c:"radius"===b||"distance"===b?2*a/c:a/c;a=k.clamp(f,d,g)}return a;case "identity":return a;case "unknown":return null}}function e(a,
b){return"number"===typeof a?a:l(b,a)}function q(a,b){if(b){var c=0,d=b.length-1;b.some((g,f)=>{if(a<g)return d=f,!0;c=f;return!1});return[c,d,(a-b[c])/(b[d]-b[c])]}}const r=Math.PI;h.getSizeForValueSimple=l;Object.defineProperty(h,"__esModule",{value:!0})});