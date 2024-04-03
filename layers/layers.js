ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([94.132647, -14.735044, 142.483184, 16.406862]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasProvinsi_1 = new ol.format.GeoJSON();
var features_BatasProvinsi_1 = format_BatasProvinsi_1.readFeatures(json_BatasProvinsi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasProvinsi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_1.addFeatures(features_BatasProvinsi_1);
var lyr_BatasProvinsi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi_1, 
                style: style_BatasProvinsi_1,
                popuplayertitle: "Batas Provinsi",
                interactive: true,
    title: 'Batas Provinsi<br />\
    <img src="styles/legend/BatasProvinsi_1_0.png" /> dibawah IR rata rata nasional<br />\
    <img src="styles/legend/BatasProvinsi_1_1.png" /> diatas IR rata rata nasional<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_BatasProvinsi_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasProvinsi_1];
lyr_BatasProvinsi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'IR DBD': 'IR DBD', });
lyr_BatasProvinsi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'IR DBD': 'TextEdit', });
lyr_BatasProvinsi_1.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'header label - always visible', 'IR DBD': 'inline label - always visible', });
lyr_BatasProvinsi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});