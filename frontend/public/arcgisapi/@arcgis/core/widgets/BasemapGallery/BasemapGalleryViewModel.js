/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{throwIfAborted as e,resolve as r}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import o from"../../core/Error.js";import{t as i}from"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import n from"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import{L as a}from"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import{cast as m}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../kernel.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/uid.js";import"../../Graphic.js";import l from"../../core/Handles.js";import"../../chunks/CollectionFlattener.js";import{b as c}from"../../chunks/basemapUtils.js";import"../../layers/Layer.js";import"../../chunks/LegendOptions.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/MemCache.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../chunks/MultiOriginJSONSupport.js";import{watch as u,on as j}from"../../core/watchUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/projection.js";import{i as y}from"../../chunks/spatialReferenceSupport.js";import"../../chunks/OperationalLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/commonProperties2.js";import"../../core/HandleOwner.js";import"../../chunks/_commonjsHelpers.js";import"../../core/workers/Connection.js";import"../../chunks/Scheduler.js";import"../../core/workers/workers.js";import"../../chunks/vec4f64.js";import"../../chunks/mat3.js";import"../../chunks/vec2.js";import"../../chunks/vec4.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../layers/support/Field.js";import"../../chunks/ArcGISService.js";import"../../chunks/BlendLayer.js";import"../../chunks/CustomParametersMixin.js";import"../../chunks/PortalLayer.js";import"../../chunks/RefreshableLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../chunks/labelUtils.js";import"../../layers/support/LabelClass.js";import"../../chunks/defaultsJSON.js";import"../../chunks/defaults.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/DataLayerSource.js";import"../../support/popupUtils.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../chunks/serviceTileInfoProperty.js";import"../../chunks/TilemapCache.js";import"../../chunks/ArcGISCachedService.js";import"../../layers/ElevationLayer.js";import"../../chunks/SublayersOwner.js";import"../../layers/support/Sublayer.js";import"../../chunks/sublayerUtils.js";import"../../layers/TileLayer.js";import"../../layers/VectorTileLayer.js";import"../../chunks/TileKey.js";import"../../chunks/TileIndex.js";import"../../chunks/jsonContext.js";import"../../chunks/StyleRepository.js";import"../../chunks/unitBezier.js";import"../../chunks/definitions.js";import"../../chunks/capabilities2.js";import{i as h}from"../../chunks/layerUtils.js";import{T as b}from"../../chunks/TerrainConst.js";import"../../chunks/vec2f64.js";import"../../chunks/mat3f32.js";import"../../chunks/isWebGL2Context.js";import"../../chunks/Util.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/RenderingContext.js";import{c as d}from"../../chunks/terrainUtils.js";import"../../chunks/config.js";import"../../chunks/VectorTile.js";import"../../chunks/DisplayObject.js";import"../../chunks/TiledDisplayObject.js";import"../../chunks/rasterUtils.js";import k from"./support/BasemapGalleryItem.js";import f from"./support/LocalBasemapsSource.js";import g from"./support/PortalBasemapsSource.js";async function S(s,t={}){await async function(s,t){const{basemap:e,view:r}=s;if(await e.load(t),0===e.baseLayers.length)return;const p=function(s){const t=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return s.toArray().filter((s=>-1===t.indexOf(s.operationalLayerType))).map((s=>new o("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:s,operationalLayerType:s.operationalLayerType||"unknown"})))}(e.baseLayers.concat(e.referenceLayers));if(p.length)throw p[0];const n=i(e.baseLayers.getItemAt(0))();try{await n.load(t)}catch(s){const t="basemap-compatibility:unknown-error",e="Unknown basemap compatibility error",{name:r=t,message:i=e,details:p}=s;throw new o(r,i,p)}!function(s,t){const e=s.tileInfo;if(!e)return;const r=t.viewingMode;if(!r)return;if(!y(e.spatialReference,r))throw new o(`basemapgalleryitem:spatial-reference-unsupported-${r}`,`Basemap spatial reference is unsupported in ${r} mode`);if("global"===r){let t=d(e,s.fullExtent,null,1);if(t&&s.compatibleTileInfo256&&!d(s.compatibleTileInfo256,s.fullExtent,null,1)&&(t=null),t){const s=e.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new o(`basemapgalleryitem:tiling-scheme-unsupported-${s}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(b.checkUnsupported(e))throw new o("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const i=t.get("basemapTerrain.tilingScheme");if(i&&!i.compatibleWith(e)&&(!s.compatibleTileInfo256||!i.compatibleWith(s.compatibleTileInfo256)))throw new o("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(n,r)}(s,t),e(t)}async function w(s,t={}){const{basemap:r,view:o}=s;if(await r.load(t),e(t),0===r.baseLayers.length)return;const i=r.baseLayers.getItemAt(0);if(!h(i))return;if(r.spatialReference){if(o.spatialReference.equals(r.spatialReference))return;v()}await i.load(t),e(t);const p=(i.get("supportedSpatialReferences")||[i.get("tileInfo.spatialReference")]).filter(Boolean);0!==p.length&&p.every((s=>!o.spatialReference.equals(s)))&&v()}function v(){throw new o("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}const I=n.ofType(k);let L=class extends a{constructor(s){super(s),this._handles=new l,this.activeBasemap=null,this.items=new I,this.source=new g,this.view=null}initialize(){const s=()=>this._recreateItems();this._handles.add([u(this,["compatibilityFunction","state"],(()=>this._updateItems())),j(this,"source.basemaps","change",s,s)])}destroy(){this._handles.destroy(),this._handles=null}get compatibilityFunction(){if(void 0===this._get("compatibilityFunction")){return"3d"===this.get("view.type")?S:w}return this._get("compatibilityFunction")}set compatibilityFunction(s){this._set("compatibilityFunction",s)}castSource(s){return Array.isArray(s)||n.isCollection(s)?new f({basemaps:s}):function(s){return s&&"esri.portal.Portal"===s.declaredClass}(s)?new g({portal:s}):function(s){return s&&!(s instanceof g)&&(!!s.portal||!!s.query)}(s)?new g(s):function(s){return s&&"basemaps"in s&&"state"in s&&"refresh"in s}(s)?s:null}get state(){return this.get("view.ready")&&this.source?"ready":"disabled"}basemapEquals(s,t){return c(s,t)}refresh(){this._recreateItems()}load(s){return this.addResolvingPromise(a.isLoadable(this.source)?this.source.load(s):r()),r(this)}_recreateItems(){const s=this.get("source.basemaps"),{view:t,compatibilityFunction:e}=this;this.items.removeAll().forEach((s=>s.destroy())),this.items.addMany(s.map((s=>new k({basemap:s,compatibilityFunction:e,view:t}))))}_updateItems(){this.items.forEach((s=>{s.compatibilityFunction=this.compatibilityFunction,s.view=this.view}))}};s([t({aliasOf:"view.map.basemap"})],L.prototype,"activeBasemap",void 0),s([t({dependsOn:["view.type"]})],L.prototype,"compatibilityFunction",null),s([t({readOnly:!0,type:I})],L.prototype,"items",void 0),s([t()],L.prototype,"source",void 0),s([m("source")],L.prototype,"castSource",null),s([t({readOnly:!0,dependsOn:["view.ready"]})],L.prototype,"state",null),s([t()],L.prototype,"view",void 0),L=s([p("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],L);var U=L;export default U;
