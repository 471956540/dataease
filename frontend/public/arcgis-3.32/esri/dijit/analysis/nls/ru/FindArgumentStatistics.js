// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/FindArgumentStatistics",{toolDefine:"\u041d\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432",outputLayerName:"${layername}_argumentStatistics",dimensionLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0435, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443",
variablesLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430",variablesListLabel:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 [Dimension Info] (\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435)",statisticsTypeLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438",multipleOccurrenceValueLabel:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",
minValueLabel:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",maxValueLabel:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",argumentMinLabel:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e",argumentMaxLabel:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e",
argumentMedianLabel:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u0435\u0434\u0438\u0430\u043d\u044b",durationLabel:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",dimensionDefinitionLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",intervalKeywordLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430",
all:"\u0412\u0441\u0435",intervalKeyword:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430",hourly:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441",daily:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e",weekly:"\u041a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e",monthly:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e",quarterly:"\u0415\u0436\u0435\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u044c\u043d\u043e",
yearly:"\u0415\u0436\u0435\u0433\u043e\u0434\u043d\u043e",recurringDaily:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e",recurringWeekly:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e",recurringMonthly:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e",recurringQuarterly:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0435\u0436\u0435\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u044c\u043d\u043e",
ignoreNodataLabel:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445",ignore:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",analysisLayerLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u0438\u043b\u0438 \u043c\u043d\u043e\u0433\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430",
itemDescription:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u041d\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0441\u0442\u0440\u0430, \u043d\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430, ${layername}",
itemSnippet:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u041d\u0430\u0439\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430"});