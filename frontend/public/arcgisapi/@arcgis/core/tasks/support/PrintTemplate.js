/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import{a as r}from"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{L as t}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import s from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";const p=t.getLogger("esri.tasks.support.PrintTemplate");function c(){r(p,"preserveScale",{replacement:"scalePreserved",version:"4.16"})}let a=class extends s{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}get preserveScale(){return c(),this.scalePreserved}set preserveScale(e){c(),this.scalePreserved=e}};e([o()],a.prototype,"attributionVisible",void 0),e([o()],a.prototype,"exportOptions",void 0),e([o()],a.prototype,"forceFeatureAttributes",void 0),e([o()],a.prototype,"format",void 0),e([o()],a.prototype,"label",void 0),e([o()],a.prototype,"layout",void 0),e([o()],a.prototype,"layoutOptions",void 0),e([o()],a.prototype,"outScale",void 0),e([o({dependsOn:["scalePreserved"]})],a.prototype,"preserveScale",null),e([o()],a.prototype,"scalePreserved",void 0),e([o()],a.prototype,"showLabels",void 0),a=e([i("esri.tasks.support.PrintTemplate")],a);var l=a;export default l;
