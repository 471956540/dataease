// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./PointSizeAlgorithm".split(" "),function(a,h,b,n,p,q,f,k,l,r,t,u,m){var d;a.PointSizeFixedSizeAlgorithm=
d=function(g){function e(){var c=g.apply(this,arguments)||this;c.type="fixed-size";c.size=0;c.useRealWorldSymbolSizes=null;return c}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})};return e}(m["default"]);b.__decorate([k.enumeration({pointCloudFixedSizeAlgorithm:"fixed-size"})],a.PointSizeFixedSizeAlgorithm.prototype,"type",void 0);b.__decorate([f.property({type:Number,nonNullable:!0,json:{write:!0}})],a.PointSizeFixedSizeAlgorithm.prototype,
"size",void 0);b.__decorate([f.property({type:Boolean,json:{write:!0}})],a.PointSizeFixedSizeAlgorithm.prototype,"useRealWorldSymbolSizes",void 0);a.PointSizeFixedSizeAlgorithm=d=b.__decorate([l.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],a.PointSizeFixedSizeAlgorithm);a.default=a.PointSizeFixedSizeAlgorithm;Object.defineProperty(a,"__esModule",{value:!0})});