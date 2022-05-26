// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/printing/HeaderFooterSettingsBuilder","dojo/string esri/dijit/geoenrichment/when esri/dijit/geoenrichment/utils/DateUtil ../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer ../PlayerViewModes dojo/i18n!esri/nls/jsapi".split(" "),function(p,q,r,t,u,h){h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;return{createHeaderFooterParams:function(b,a,c){var k;if(b.viewMode===u.PANELS_IN_STACK_ALL){var d=b.getCurrentReportContainer().getVisibleAreas(),
f=a.dynamicReportInfo.combinedAreasInfo,l,n=d.every(function(a){a=a.isGrouped+";"+a.groupIndex;l=l||a;return l===a});k=(n=n&&f.groups&&d.length===f.groups[d[0].groupIndex].indexes.length)?d.length===b.getAnalysisAreas().length?[f]:[f.groups[d[0].groupIndex]]:[null]}else k=a.dynamicReportInfo.isMultiFeature?[a.dynamicReportInfo.combinedAreasInfo]:b.getAnalysisAreas();var g=a.getDocumentDefaultStyles(),m={backgroundColor:g.backgroundColor,color:g.color,fontFamily:g.fontFamily};return q(this._getSourceText(b,
a,c),function(d){return k.map(function(e){return{header:{show:c.addHeader,title:c.reportTitle||b.getReportTitle(),subtitle:c.reportSubtitle||b.printConfig.subtitle,siteInfo:e&&{siteName:e.name,siteDesc:e.description,siteAddr:e.address,latitude:e.latitude,longitude:e.longitude},style:{headerStyle:m,titleStyle:a.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:a.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:d&&c.addDataSource,sourceText:d&&p.substitute(h.sourcePattern,{source:d}),
style:{dataSourceStyle:m}},footer:{show:c.addFooter,copyrightText:"\u00a9"+(new Date).getFullYear()+" Esri",formattedDate:r.getReportFooterDate(),style:{footerStyle:m}},documentStyle:g}})})},_getSourceText:function(b,a,c){if(!c.addDataSource)return null;a=b.getReportData();return b.isDataDrillingPlayer?(b=a.config,c=t.collectVariablesStats(a.templateJson),a.templateVariableProvider.getVariablesDataVintageDescription({usedVariablesCache:c,countryID:b.countryID,hierarchy:a.reportObject.hierarchy})):
a.reportObject.dataVintageDescription}}});