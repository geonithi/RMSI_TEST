var wms_layers = [];


        var lyr_SatelliteImage_0 = new ol.layer.Tile({
            'title': 'SatelliteImage',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_BAH_LMB_1 = new ol.format.GeoJSON();
var features_BAH_LMB_1 = format_BAH_LMB_1.readFeatures(json_BAH_LMB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAH_LMB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAH_LMB_1.addFeatures(features_BAH_LMB_1);
var lyr_BAH_LMB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAH_LMB_1, 
                style: style_BAH_LMB_1,
                popuplayertitle: 'BAH_LMB',
                interactive: true,
    title: 'BAH_LMB<br />\
    <img src="styles/legend/BAH_LMB_1_0.png" /> QC_Completed_Capital<br />\
    <img src="styles/legend/BAH_LMB_1_1.png" /> QC_Completed_Muharraq<br />\
    <img src="styles/legend/BAH_LMB_1_2.png" /> Completed_Capital<br />\
    <img src="styles/legend/BAH_LMB_1_3.png" /> Completed_Muharraq<br />\
    <img src="styles/legend/BAH_LMB_1_4.png" /> Completed_Northern<br />\
    <img src="styles/legend/BAH_LMB_1_5.png" /> Completed_Southern<br />\
    <img src="styles/legend/BAH_LMB_1_6.png" /> Capital_Priority_02<br />\
    <img src="styles/legend/BAH_LMB_1_7.png" /> Capital_Priority_03<br />\
    <img src="styles/legend/BAH_LMB_1_8.png" /> Capital_Priority_04<br />\
    <img src="styles/legend/BAH_LMB_1_9.png" /> Muharraq_Priority_02<br />\
    <img src="styles/legend/BAH_LMB_1_10.png" /> Muharraq_Priority_03<br />\
    <img src="styles/legend/BAH_LMB_1_11.png" /> Muharraq_Priority_04<br />\
    <img src="styles/legend/BAH_LMB_1_12.png" /> Northern_Priority_02<br />\
    <img src="styles/legend/BAH_LMB_1_13.png" /> Northern_Priority_03<br />\
    <img src="styles/legend/BAH_LMB_1_14.png" /> Northern_Priority_04<br />\
    <img src="styles/legend/BAH_LMB_1_15.png" /> Southern_Priority_02<br />\
    <img src="styles/legend/BAH_LMB_1_16.png" /> Southern_Priority_03<br />\
    <img src="styles/legend/BAH_LMB_1_17.png" /> Southern_Priority_04<br />\
    <img src="styles/legend/BAH_LMB_1_18.png" /> Priority_06_No_Fly<br />' });

lyr_SatelliteImage_0.setVisible(true);lyr_BAH_LMB_1.setVisible(true);
var layersList = [lyr_SatelliteImage_0,lyr_BAH_LMB_1];
lyr_BAH_LMB_1.set('fieldAliases', {'Entity': 'Entity', 'Layer': 'Layer', 'RefName': 'RefName', 'LTScale': 'LTScale', 'QrotW': 'QrotW', 'Layer_1': 'Layer_1', 'LvlDesc_1': 'LvlDesc_1', 'Text': 'Text', 'Shape_Area': 'Shape_Area', 'LMB_Number': 'LMB_Number', });
lyr_BAH_LMB_1.set('fieldImages', {'Entity': 'TextEdit', 'Layer': 'TextEdit', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'QrotW': 'TextEdit', 'Layer_1': 'TextEdit', 'LvlDesc_1': 'TextEdit', 'Text': 'TextEdit', 'Shape_Area': 'TextEdit', 'LMB_Number': 'TextEdit', });
lyr_BAH_LMB_1.set('fieldLabels', {'Entity': 'no label', 'Layer': 'no label', 'RefName': 'inline label - visible with data', 'LTScale': 'no label', 'QrotW': 'no label', 'Layer_1': 'no label', 'LvlDesc_1': 'no label', 'Text': 'no label', 'Shape_Area': 'no label', 'LMB_Number': 'no label', });
lyr_BAH_LMB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});