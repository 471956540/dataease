/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import{e as t}from"../../chunks/enumeration.js";import"../../chunks/resourceExtension.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import e from"../../Color.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import{c}from"../../chunks/materialUtils.js";import i from"./Background.js";var p;const n={...c,nonNullable:!0};let m=p=class extends i{constructor(o){super(o),this.type="color",this.color=new e([0,0,0,1])}clone(){return new p(this.cloneProperties())}cloneProperties(){return{color:this.color.clone()}}};o([t({color:"color"},{readOnly:!0})],m.prototype,"type",void 0),o([r(n)],m.prototype,"color",void 0),m=p=o([s("esri.webscene.background.ColorBackground")],m);var u=m;export default u;
