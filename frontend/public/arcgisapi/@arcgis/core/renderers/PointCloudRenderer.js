/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as e}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{a as s}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import{s as i,J as n}from"../chunks/jsonMap.js";import{e as l}from"../chunks/enumeration.js";import"../chunks/resourceExtension.js";import{P as p,a as u}from"../chunks/PointSizeSplatAlgorithm.js";var a;let c=a=class extends s{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new a({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};o([t({type:String,json:{write:!0}})],c.prototype,"field",void 0),o([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),o([t({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=a=o([r("esri.renderers.support.pointCloud.ColorModulation")],c);var d,m=c;let h=d=class extends p{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new d({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};o([l({pointCloudFixedSizeAlgorithm:"fixed-size"})],h.prototype,"type",void 0),o([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"size",void 0),o([t({type:Boolean,json:{write:!0}})],h.prototype,"useRealWorldSymbolSizes",void 0),h=d=o([r("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],h);const y={key:"type",base:p,typeMap:{"fixed-size":h,splat:u}},j=i()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let b=class extends s{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:e(this.pointSizeAlgorithm),colorModulation:e(this.colorModulation),pointsPerInch:e(this.pointsPerInch)}}};o([t({type:j.apiValues,readOnly:!0,nonNullable:!0,json:{type:j.jsonValues,read:!1,write:j.write}})],b.prototype,"type",void 0),o([t({types:y,json:{write:!0}})],b.prototype,"pointSizeAlgorithm",void 0),o([t({type:m,json:{write:!0}})],b.prototype,"colorModulation",void 0),o([t({json:{write:!0},nonNullable:!0,type:Number})],b.prototype,"pointsPerInch",void 0),b=o([r("esri.renderers.PointCloudRenderer")],b),function(o){o.fieldTransformTypeKebabDict=new n({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(b||(b={}));var f=b;export default f;
