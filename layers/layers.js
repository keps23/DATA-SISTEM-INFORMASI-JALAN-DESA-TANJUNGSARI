var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASDESA_2 = new ol.format.GeoJSON();
var features_BATASDESA_2 = format_BATASDESA_2.readFeatures(json_BATASDESA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESA_2.addFeatures(features_BATASDESA_2);
var lyr_BATASDESA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESA_2, 
                style: style_BATASDESA_2,
                popuplayertitle: 'BATAS DESA',
                interactive: false,
                title: '<img src="styles/legend/BATASDESA_2.png" /> BATAS DESA'
            });
var format_BATAS_DESART_3 = new ol.format.GeoJSON();
var features_BATAS_DESART_3 = format_BATAS_DESART_3.readFeatures(json_BATAS_DESART_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_DESART_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_DESART_3.addFeatures(features_BATAS_DESART_3);
var lyr_BATAS_DESART_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_DESART_3, 
                style: style_BATAS_DESART_3,
                popuplayertitle: 'BATAS_DESA RT',
                interactive: false,
                title: '<img src="styles/legend/BATAS_DESART_3.png" /> BATAS_DESA RT'
            });
var format_DATASISTEMJALAN_4 = new ol.format.GeoJSON();
var features_DATASISTEMJALAN_4 = format_DATASISTEMJALAN_4.readFeatures(json_DATASISTEMJALAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATASISTEMJALAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATASISTEMJALAN_4.addFeatures(features_DATASISTEMJALAN_4);
var lyr_DATASISTEMJALAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATASISTEMJALAN_4, 
                style: style_DATASISTEMJALAN_4,
                popuplayertitle: 'DATA SISTEM JALAN',
                interactive: true,
    title: 'DATA SISTEM JALAN<br />\
    <img src="styles/legend/DATASISTEMJALAN_4_0.png" /> Jalan Lingkungan Primer<br />\
    <img src="styles/legend/DATASISTEMJALAN_4_1.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/DATASISTEMJALAN_4_2.png" /> Jalan Lokal Sekunder<br />\
    <img src="styles/legend/DATASISTEMJALAN_4_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/DATASISTEMJALAN_4_4.png" /> Jalan Tol<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BATASDESA_2.setVisible(true);lyr_BATAS_DESART_3.setVisible(true);lyr_DATASISTEMJALAN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BATASDESA_2,lyr_BATAS_DESART_3,lyr_DATASISTEMJALAN_4];
lyr_BATASDESA_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'KDEPUM': 'KDEPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', '1990': '1990', '2000': '2000', '2010': '2010', '2020': '2020', '90R': '90R', '00R': '00R', '10R': '10R', '20R': '20R', });
lyr_BATAS_DESART_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RT': 'RT', 'DUKUH': 'DUKUH', 'RW': 'RW', 'KAWASAN': 'KAWASAN', 'KT': 'KT', 'Luas': 'Luas', 'PBG lOK': 'PBG lOK', 'namart': 'namart', });
lyr_DATASISTEMJALAN_4.set('fieldAliases', {'ID': 'ID', 'KODE JALAN': 'KODE JALAN', 'NAMA DESA': 'NAMA DESA', 'DUKUH': 'DUKUH', 'RW': 'RW', 'RT': 'RT', 'KELAS JALA': 'KELAS JALAN', 'NAMA JALAN': 'NAMA JALAN', 'NAMA SEGME': 'NAMA SEGMEN', 'JENIS PERK': 'JENIS PERKERASAN', 'PANJANG JA': 'PANJANG JALAN', 'LEBAR JALA': 'LEBAR JALAN', 'LUAS SEGME': 'LUAS SEGMEN', 'LUAS RUSAK': 'LUAS RUSAK', 'JENIS KERU': 'JENIS KERUSAKAN', 'LEBAR RETA': 'LEBAR RETAK', 'JUMLAH LUB': 'JUMLAH LUBANG', 'KEDALAMAN': 'KEDALAMAN', 'PENGUKURAN': 'PENGUKURAN', 'SDI1': 'SDI1', 'SDI2': 'SDI2', 'SDI3': 'SDI3', 'SDI4': 'SDI4', 'KONDISI JA': 'KONDISI JALAN', 'SBDATA': 'SUMBER DATA', });
lyr_BATASDESA_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'KDEPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', '1990': 'TextEdit', '2000': 'TextEdit', '2010': 'TextEdit', '2020': 'TextEdit', '90R': 'TextEdit', '00R': 'TextEdit', '10R': 'TextEdit', '20R': 'TextEdit', });
lyr_BATAS_DESART_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RT': 'TextEdit', 'DUKUH': 'TextEdit', 'RW': 'TextEdit', 'KAWASAN': 'TextEdit', 'KT': 'TextEdit', 'Luas': 'TextEdit', 'PBG lOK': 'TextEdit', 'namart': 'TextEdit', });
lyr_DATASISTEMJALAN_4.set('fieldImages', {'ID': 'TextEdit', 'KODE JALAN': 'TextEdit', 'NAMA DESA': 'TextEdit', 'DUKUH': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'KELAS JALA': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'NAMA SEGME': 'TextEdit', 'JENIS PERK': 'TextEdit', 'PANJANG JA': 'TextEdit', 'LEBAR JALA': 'TextEdit', 'LUAS SEGME': 'TextEdit', 'LUAS RUSAK': 'TextEdit', 'JENIS KERU': 'TextEdit', 'LEBAR RETA': 'TextEdit', 'JUMLAH LUB': 'TextEdit', 'KEDALAMAN': 'Hidden', 'PENGUKURAN': 'Hidden', 'SDI1': 'Hidden', 'SDI2': 'Hidden', 'SDI3': 'Hidden', 'SDI4': 'Hidden', 'KONDISI JA': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_BATASDESA_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'header label - visible with data', 'KDEPUM': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', '1990': 'no label', '2000': 'no label', '2010': 'no label', '2020': 'no label', '90R': 'no label', '00R': 'no label', '10R': 'no label', '20R': 'no label', });
lyr_BATAS_DESART_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RT': 'no label', 'DUKUH': 'no label', 'RW': 'no label', 'KAWASAN': 'no label', 'KT': 'no label', 'Luas': 'no label', 'PBG lOK': 'no label', 'namart': 'no label', });
lyr_DATASISTEMJALAN_4.set('fieldLabels', {'ID': 'header label - visible with data', 'KODE JALAN': 'header label - visible with data', 'NAMA DESA': 'header label - visible with data', 'DUKUH': 'header label - visible with data', 'RW': 'header label - visible with data', 'RT': 'header label - visible with data', 'KELAS JALA': 'header label - visible with data', 'NAMA JALAN': 'header label - visible with data', 'NAMA SEGME': 'header label - visible with data', 'JENIS PERK': 'header label - visible with data', 'PANJANG JA': 'header label - visible with data', 'LEBAR JALA': 'header label - visible with data', 'LUAS SEGME': 'header label - visible with data', 'LUAS RUSAK': 'header label - visible with data', 'JENIS KERU': 'header label - visible with data', 'LEBAR RETA': 'header label - visible with data', 'JUMLAH LUB': 'header label - visible with data', 'KONDISI JA': 'header label - visible with data', 'SBDATA': 'header label - visible with data', });
lyr_DATASISTEMJALAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});