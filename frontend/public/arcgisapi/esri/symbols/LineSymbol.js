// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./Symbol ../core/screenUtils".split(" "),function(f,c,a,n,p,g,h,k,q,r,t,l,m){a=function(e){function d(b){b=e.call(this,b)||this;b.type="simple-line";b.width=.75;return b}f._inheritsLoose(d,
e);d.prototype.hash=function(){return`${this.type}.${this.width}`};return d}(l);c.__decorate([h.enumeration({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([g.property({type:Number,cast:m.toPt,json:{write:!0}})],a.prototype,"width",void 0);return a=c.__decorate([k.subclass("esri.symbols.LineSymbol")],a)});