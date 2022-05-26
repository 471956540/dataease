// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/GeographicallyWeightedRegression",{chooseLayer:"\u0627\u062e\u062a\u0631 \u0637\u0628\u0642\u0629 \u0644\u062a\u062d\u0644\u064a\u0644\u0647\u0627",chooseField:"\u0627\u062e\u062a\u064a\u0627\u0631 \u062d\u0642\u0644 \u0644\u0646\u0645\u0630\u062c\u062a\u0647",chooseExplanatoryField:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u062a\u0648\u0636\u064a\u062d\u064a\u0629",chooseNeighborhood:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0643\u064a\u0641\u064a\u0629 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u062c\u0648\u0627\u0631",
distanceBand:"\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u0633\u0627\u0641\u0629",numNeighbors:"\u0639\u062f\u062f \u0627\u0644\u062c\u0648\u0627\u0631",chooseWeighted:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0643\u064a\u0641\u064a\u0629 \u062a\u0631\u062c\u064a\u062d \u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u062c\u0648\u0627\u0631",bisquare:"\u0628\u0627\u064a\u0633\u0643\u0648\u064a\u0631",gaussian:"\u063a\u0627\u0648\u0633\u064a",resultLayerName:"\u0627\u0633\u0645 \u0637\u0628\u0642\u0629 \u0627\u0644\u0646\u062a\u064a\u062c\u0629",
outputLayerName:"GWR ${inputLayerName}",distanceBandWarning:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0642\u064a\u0645\u0629 \u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064a\u0646 ${min} \u0648${max}",numNeighborsWarning:"\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0639\u062f\u062f \u0627\u0644\u062c\u0648\u0627\u0631 \u0628\u064a\u0646 ${min} \u0648${max}",explanatoryFieldsWarning:"\u0627\u062e\u062a\u0631 \u062d\u0642\u0644\u0627\u064b \u062a\u0648\u0636\u064a\u062d\u064a\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
explanatoryLayerWarning:"\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0639\u0644\u0649 \u0623\u064a \u062d\u0642\u0648\u0644 \u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0635\u0627\u0644\u062d\u0629\u060c \u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0628\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629",inputLayerWarning:"\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0639\u0644\u0649 \u0623\u064a \u062d\u0642\u0648\u0644 \u0631\u0642\u0645\u064a\u0629 \u0644\u0646\u0645\u0630\u062c\u062a\u0647\u0627\u060c \u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0628\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629",
itemDescription:'\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 \u062a\u0634\u063a\u064a\u0644 \u062d\u0644\u0648\u0644 "\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 \u0627\u0644\u0645\u0631\u062c\u062d \u062c\u063a\u0631\u0627\u0641\u064a\u064b\u0627".',itemTags:"\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u060c \u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 \u0627\u0644\u0645\u0631\u062c\u062d \u062c\u063a\u0631\u0627\u0641\u064a\u064b\u0627\u060c ${inputLayerName}\u060c \u064a\u0644\u0627\u0626\u0645",
itemSnippet:'\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 \u0623\u062f\u0627\u0629 "\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 \u0627\u0644\u0645\u0631\u062c\u062d \u062c\u063a\u0631\u0627\u0641\u064a\u064b\u0627"'});