/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{reject as e,resolve as i}from"../core/promiseUtils.js";import t from"../core/Error.js";import r from"../support/actions/ActionButton.js";const o="esri-icon-trash",s=new r({id:"zoom-to-feature",title:"{messages.zoom}",className:"esri-icon-zoom-in-magnifying-glass"}),n=new r({id:"remove-selected-feature",title:"{messages.remove}",className:o}),a=function(r){const{event:o,view:a}=r,{action:c}=o,m=a&&a.popup;if(!c)return e(new t("trigger-action:missing-arguments","Event has no action"));if(!m)return e(new t("trigger-action:missing-arguments","view.popup is missing"));const{disabled:g,id:u}=c;if(!u)return e(new t("trigger-action:invalid-action","action.id is missing"));if(g)return e(new t("trigger-action:invalid-action","Action is disabled"));if(u===s.id)return m.viewModel.zoomToLocation();if(u===n.id){m.close();const{selectedFeature:r}=m;if(!r)return e(new t(`trigger-action:${n.id}`,"selectedFeature is required",{selectedFeature:r}));const{sourceLayer:o}=r;return o?o.remove(r):a.graphics.remove(r),i()}return i()};export{n as r,a as t,s as z};
