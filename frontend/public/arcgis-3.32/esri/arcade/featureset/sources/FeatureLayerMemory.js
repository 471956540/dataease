// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var u=function(p,m){u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(m,n){m.__proto__=n}||function(m,n){for(var r in n)n.hasOwnProperty(r)&&(m[r]=n[r])};return u(p,m)};return function(p,m){function v(){this.constructor=p}u(p,m);p.prototype=null===m?Object.create(m):(v.prototype=m.prototype,new v)}}();
define("esri/arcade/featureset/sources/FeatureLayerMemory","require exports ../../../graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../polyfill/promiseUtils ../../../geometry/Geometry ../../../geometry/geometryEngineAsync ../../../geometry/jsonUtils ../../../layers/Field".split(" "),function(u,p,m,v,n,r,f,x,t,y,w){return function(p){function b(a){var c=p.call(this,a)||this;c.source=[];a.spatialReference&&(c.spatialReference=a.spatialReference);c.types=a.types;c.geometryType=a.geometryType;
c.typeIdField=a.typeIdField;c.objectIdField=a.objectIdField;c.fields=a.fields.slice(0);c.source=a.source;c._transparent=!0;c._maxProcessing=1E3;c._wset=null;return c}__extends(b,p);b.prototype._maxQueryRate=function(){return r.defaultMaxRecords};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=f.create(function(c,h){a._initialiseFeatureSet();c(a)}));return this._loadPromise};b.prototype._initialiseFeatureSet=function(){this._databaseType=r.FeatureServiceDatabaseType.Standardised};
b.prototype.optimisePagingFeatureQueries=function(a){};b.prototype.relationshipMetaData=function(){return[]};b.prototype.nativeCapabilities=function(){return{title:"",source:this,canQueryRelated:!1,capabilities:{query:{maxRecordCount:1E3},queryRelated:{supportsOrderBy:!1,supportsPagination:!1}},databaseType:this._databaseType,requestStandardised:!1}};b.prototype._allFeatures=function(){return this.source};b.prototype._isInFeatureSet=function(a){return r.IdState.InFeatureSet};b.prototype.isTable=function(){return null===
this.geometryType||""===this.geometryType};b.prototype._transformSetWithIdChanges=function(a){};b.prototype._candidateIdTransform=function(a){return a};b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):f.resolve(this._wset)};b.prototype._getFilteredSet=function(a,c,h,d,b){var k=this;try{return this._ensureLoaded().then(function(){if(k.isTable()&&c&&null!==a&&""!==
a)return new n([],[],!0,null);if(null===k._wset){var d=[];k._allFeatures().forEach(function(a){void 0===a.geometry&&(a.geometry=null);var c=a.attributes[k.objectIdField];d.push(c);k._featureCache[c]=a});k._wset=new n([],d,!1,null)}var z=k._wset._known.slice(0);k._checkCancelled(b);return k.fetchAndRefineFeaturesByWhere(z,h,b).then(function(d){k._checkCancelled(b);return null!==c?k.fetchAndRefineFeaturesSpatially(d,c,a,b).then(function(a){return new n([],a,!1,null)}):new n([],d,!1,null)})})}catch(e){return f.reject(e)}};
b.prototype.executeSpatialRelationTest=function(a,c,b,d){if(null===a.geometry)return f.resolve(!1);switch(c){case "esriSpatialRelEnvelopeIntersects":return c=r.shapeExtent(b),a=r.shapeExtent(a.geometry),t.intersects(c,a);case "esriSpatialRelIntersects":return t.intersects(b,a.geometry);case "esriSpatialRelContains":return t.contains(b,a.geometry);case "esriSpatialRelOverlaps":return t.overlaps(b,a.geometry);case "esriSpatialRelWithin":return t.within(b,a.geometry);case "esriSpatialRelTouches":return t.touches(b,
a.geometry);case "esriSpatialRelCrosses":return t.crosses(b,a.geometry);case "esriSpatialRelRelation":return t.relate(b,a.geometry,d)}};b.prototype.executeWhereTest=function(a,c){return c.testFeature(a)};b.prototype.fetchAndRefineFeaturesSpatially=function(a,c,b,d){var h=[];d=[];var k="";0<=b.indexOf("esriSpatialRelRelation")&&(k=b.split(":")[1],b="esriSpatialRelRelation");for(var e=0;e<a.length;e++){var l=this._featureFromCache(a[e]);d.push(this.executeSpatialRelationTest(l,b,c,k))}return 0===d.length?
f.resolve(h):f.all(d).then(function(c){for(var b=0;b<a.length;b++)!0===c[b]&&h.push(a[b]);return h})};b.prototype.fetchAndRefineFeaturesByWhere=function(a,c,b){b=[];if(null===c)return f.resolve(a);for(var d=0;d<a.length;d++){var h=this._featureFromCache(a[d]);this.executeWhereTest(h,c)&&b.push(a[d])}return f.resolve(b)};b.prototype._getFeatures=function(a,b,h,d){d=[];-1!==b&&void 0===this._featureCache[b]&&d.push(b);for(var c=a._lastFetchedIndex;c<a._known.length&&!(a._lastFetchedIndex+=1,void 0===
this._featureCache[a._known[c]]&&(a._known[c]!==b&&d.push(a._known[c]),d.length>h));c++);return 0===d.length?f.resolve("success"):f.reject(Error("Unaccounted for Features. Not in Feature Collection"))};b.prototype._refineSetBlock=function(a,b,h){return f.resolve(a)};b.prototype._stat=function(a,b,h,d,m,k,e){return f.resolve({calculated:!1})};b.prototype._canDoAggregates=function(a,b,h,d,m){return f.resolve(!1)};b._cloneAttr=function(a){var b={},h;for(h in a)b[h]=a[h];return b};b.create=function(a,
c){var h=c.toJson(),d=a.layerDefinition.objectIdField,f=a.layerDefinition.geometryType;void 0===f&&(f=a.featureSet.geometryType);void 0===f&&(f="");var k=a.featureSet.features;if(""===d||void 0===d){for(var e=!1,l=0,q=a.layerDefinition.fields;l<q.length;l++){var g=q[l];if("oid"===g.type||"esriFieldTypeOID"===g.type){d=g.name;e=!0;break}}if(!1===e){d="FID";e=!0;for(l=0;e;){for(var q=!0,n=0,p=a.layerDefinition.fields;n<p.length;n++)if(g=p[n],g.name===d){q=!1;break}!0===q?e=!1:(l++,d="FID"+l.toString())}a.layerDefinition.fields.push({type:"esriFieldTypeOID",
name:d,alias:d});g=[];for(e=0;e<k.length;e++)g.push({geometry:a.featureSet.features[e].geometry,attributes:a.featureSet.features[e].attributes?this._cloneAttr(a.featureSet.features[e].attributes):{}}),g[e].attributes[d]=e;k=g}}e=[];l=0;for(q=a.layerDefinition.fields;l<q.length;l++)g=q[l],g instanceof w?e.push(g):e.push(new w(g));l=[];for(q=0;q<k.length;q++)g=k[q],g.geometry&&!1===g.geometry instanceof x&&void 0===g.geometry.spatialReference&&(g.geometry.spatialReference=h),l.push(new m(null===g.geometry||
void 0===g.geometry?null:y.fromJson(g.geometry),null,g.attributes));return new b({source:l,types:a.types,typeIdField:a.typeIdField,fields:e,objectIdField:d,geometryType:f,spatialReference:c})};b.prototype.canBeBigDataFeatureSet=function(){return!1};b.prototype.shouldBeResolvedAsBigData=function(){return!1};b.prototype.queryAttachments=function(a,b,h,d){return f.resolve([])};b.prototype.getFeatureByObjectId=function(a,b){b=0;for(var c=this.source;b<c.length;b++){var d=c[b];if(d.attributes[this.objectIdField]===
a)return f.resolve(d)}return f.resolve(null)};return b}(v)});