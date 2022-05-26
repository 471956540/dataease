// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/DataResource","dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./UniversalClient ./FileContent ./BinaryData ./ErrorUtil".split(" "),function(l,f,g,h,d,m,e){function k(b,a){a=a||function(a){return a};return g(b,function(b){if(b instanceof Error)return a(e.makeError(b));"object"===typeof b&&b.hasOwnProperty("result")||(b={taskName:"executeTask",result:b});return a(b)},function(b){return a(e.makeError(b))})}return l(null,
{url:null,allowProxy:!1,data:null,constructor:function(b){"string"==typeof b?this.url=b:void 0!==b&&(this.data=b)},_fileContentPromise:null,getFileContent:function(b){var a=this._fileContentPromise;if(!a||b){var c=new f,a=c.promise;b||(this._fileContentPromise=a);this.getResource("bin",this._getFileContent.bind(this,c))}return a},_getFileContent:function(b,a){if(a instanceof Error)b.reject(a);else{a=a.result;if(a instanceof m){var c=a.type;a=a.data}"string"===typeof a?b.resolve(new d(a,c)):window.Blob&&
a instanceof Blob?d.fromBlob(a,c).then(b.resolve,b.reject):window.ArrayBuffer&&a instanceof ArrayBuffer?b.resolve(d.fromArrayBuffer(a,c)):a instanceof d?b.resolve(a):b.reject(e.makeError("The resource data isn't binary."))}},getResource:function(b,a){b||(b="json");if(this.data){var c="function"==typeof this.data?this.data(b):this.data;return k(c,a)}if(this.url){var d=this,c=h.request(this.url,{handleAs:b}).otherwise(function(a){return d.allowProxy?h.request(this.url,{handleAs:b,useProxy:!0}):new f.reject(a)});
return k(c,a)}c=e.makeError("Missing data and url.");return g(a?a(c):c)}})});