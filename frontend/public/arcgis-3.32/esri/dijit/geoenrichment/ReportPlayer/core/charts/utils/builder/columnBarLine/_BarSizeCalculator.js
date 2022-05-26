// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_BarSizeCalculator",["../../ChartTypes","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],function(h,k,l,e){function m(a,c,d,b){var f=b.renderColumnBarsInOppositeDirections&&1<c;a=d/(a||1)/(b.isStacked?1:f?Math.round(c/2):c);a=Math.round(a);return a=b.columnBarGap?a-b.columnBarGap:b.columnThickness===e.SMALL?.25*a:b.columnThickness===e.LARGE?.75*a:.5*a}return{updateBarSize:function(a){var c=a.chart,
d=a.visualProperties,b=a.seriesItems,f=a.chartType,e=a.numComparisonFeatures;if(c&&!h.isLineLike(f)){var n=a.chartSize||d[h.isColumnLike(f)?"width":"height"],g=0;b.forEach(function(a){g=Math.max(g,a.points.length)});e&&(g+=e);a=l.getEffectiveNumberOfSeries(b,f,a.comparisonInfo,a.isMultiFeatureChart,a.excludedSeriesHash);d=m(g,a,n,d);c.getPlot(k.PRIMARY).opt.maxBarSize=d;c.getPlot(k.PRIMARY).opt.minBarSize=d;c.dirty=!0}}}});