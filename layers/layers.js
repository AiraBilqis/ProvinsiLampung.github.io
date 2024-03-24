ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([99.430831, -7.482584, 110.460373, -2.134590]);
var wms_layers = [];


        var lyr_Wolrd_0 = new ol.layer.Tile({
            'title': 'Wolrd',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1 = new ol.format.GeoJSON();
var features_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1 = format_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.readFeatures(json_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.addFeatures(features_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1);
var lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1, 
                style: style_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1,
                popuplayertitle: "Desa/Kelurahan",
                interactive: true,
                title: '<img src="styles/legend/BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.png" /> Desa/Kelurahan'
            });
var format_Kecamatan_2 = new ol.format.GeoJSON();
var features_Kecamatan_2 = format_Kecamatan_2.readFeatures(json_Kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_2.addFeatures(features_Kecamatan_2);
var lyr_Kecamatan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_2, 
                style: style_Kecamatan_2,
                popuplayertitle: "Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_2.png" /> Kecamatan'
            });
var format_kota_3 = new ol.format.GeoJSON();
var features_kota_3 = format_kota_3.readFeatures(json_kota_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kota_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kota_3.addFeatures(features_kota_3);
var lyr_kota_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kota_3, 
                style: style_kota_3,
                popuplayertitle: "kota",
                interactive: true,
                title: '<img src="styles/legend/kota_3.png" /> kota'
            });
var format_SUNGAI_LN_50K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_4 = format_SUNGAI_LN_50K_4.readFeatures(json_SUNGAI_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_4.addFeatures(features_SUNGAI_LN_50K_4);
var lyr_SUNGAI_LN_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_4, 
                style: style_SUNGAI_LN_50K_4,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_4.png" /> Sungai'
            });
var format_JALAN_LN_50K_5 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_5 = format_JALAN_LN_50K_5.readFeatures(json_JALAN_LN_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_5.addFeatures(features_JALAN_LN_50K_5);
var lyr_JALAN_LN_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_5, 
                style: style_JALAN_LN_50K_5,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_5.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_6 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_6 = format_PEMUKIMAN_AR_50K_6.readFeatures(json_PEMUKIMAN_AR_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_6.addFeatures(features_PEMUKIMAN_AR_50K_6);
var lyr_PEMUKIMAN_AR_50K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_6, 
                style: style_PEMUKIMAN_AR_50K_6,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_6.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_7 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_7 = format_PEMERINTAHAN_PT_50K_7.readFeatures(json_PEMERINTAHAN_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_7.addFeatures(features_PEMERINTAHAN_PT_50K_7);
var lyr_PEMERINTAHAN_PT_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_7, 
                style: style_PEMERINTAHAN_PT_50K_7,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_7.png" /> Pemerintah'
            });
var format_SUNGAI_LN_50K_8 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_8 = format_SUNGAI_LN_50K_8.readFeatures(json_SUNGAI_LN_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_8.addFeatures(features_SUNGAI_LN_50K_8);
var lyr_SUNGAI_LN_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_8, 
                style: style_SUNGAI_LN_50K_8,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_8.png" /> Sungai'
            });
var format_JALAN_LN_50K_9 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_9 = format_JALAN_LN_50K_9.readFeatures(json_JALAN_LN_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_9.addFeatures(features_JALAN_LN_50K_9);
var lyr_JALAN_LN_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_9, 
                style: style_JALAN_LN_50K_9,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_9.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_10 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_10 = format_PEMUKIMAN_AR_50K_10.readFeatures(json_PEMUKIMAN_AR_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_10.addFeatures(features_PEMUKIMAN_AR_50K_10);
var lyr_PEMUKIMAN_AR_50K_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_10, 
                style: style_PEMUKIMAN_AR_50K_10,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_10.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_11 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_11 = format_PEMERINTAHAN_PT_50K_11.readFeatures(json_PEMERINTAHAN_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_11.addFeatures(features_PEMERINTAHAN_PT_50K_11);
var lyr_PEMERINTAHAN_PT_50K_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_11, 
                style: style_PEMERINTAHAN_PT_50K_11,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_11.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_12 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_12 = format_DANAU_AR_50K_12.readFeatures(json_DANAU_AR_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_12.addFeatures(features_DANAU_AR_50K_12);
var lyr_DANAU_AR_50K_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_12, 
                style: style_DANAU_AR_50K_12,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_12.png" /> Danau'
            });
var format_SUNGAI_LN_50K_13 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_13 = format_SUNGAI_LN_50K_13.readFeatures(json_SUNGAI_LN_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_13.addFeatures(features_SUNGAI_LN_50K_13);
var lyr_SUNGAI_LN_50K_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_13, 
                style: style_SUNGAI_LN_50K_13,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_13.png" /> Sungai'
            });
var format_JALAN_LN_50K_14 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_14 = format_JALAN_LN_50K_14.readFeatures(json_JALAN_LN_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_14.addFeatures(features_JALAN_LN_50K_14);
var lyr_JALAN_LN_50K_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_14, 
                style: style_JALAN_LN_50K_14,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_14.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_15 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_15 = format_PEMUKIMAN_AR_50K_15.readFeatures(json_PEMUKIMAN_AR_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_15.addFeatures(features_PEMUKIMAN_AR_50K_15);
var lyr_PEMUKIMAN_AR_50K_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_15, 
                style: style_PEMUKIMAN_AR_50K_15,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_15.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_16 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_16 = format_PEMERINTAHAN_PT_50K_16.readFeatures(json_PEMERINTAHAN_PT_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_16.addFeatures(features_PEMERINTAHAN_PT_50K_16);
var lyr_PEMERINTAHAN_PT_50K_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_16, 
                style: style_PEMERINTAHAN_PT_50K_16,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_16.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_17 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_17 = format_DANAU_AR_50K_17.readFeatures(json_DANAU_AR_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_17.addFeatures(features_DANAU_AR_50K_17);
var lyr_DANAU_AR_50K_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_17, 
                style: style_DANAU_AR_50K_17,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_17.png" /> Danau'
            });
var format_SUNGAI_LN_50K_18 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_18 = format_SUNGAI_LN_50K_18.readFeatures(json_SUNGAI_LN_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_18.addFeatures(features_SUNGAI_LN_50K_18);
var lyr_SUNGAI_LN_50K_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_18, 
                style: style_SUNGAI_LN_50K_18,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_18.png" /> Sungai'
            });
var format_JALAN_LN_50K_19 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_19 = format_JALAN_LN_50K_19.readFeatures(json_JALAN_LN_50K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_19.addFeatures(features_JALAN_LN_50K_19);
var lyr_JALAN_LN_50K_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_19, 
                style: style_JALAN_LN_50K_19,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_19.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_20 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_20 = format_PEMUKIMAN_AR_50K_20.readFeatures(json_PEMUKIMAN_AR_50K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_20.addFeatures(features_PEMUKIMAN_AR_50K_20);
var lyr_PEMUKIMAN_AR_50K_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_20, 
                style: style_PEMUKIMAN_AR_50K_20,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_20.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_21 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_21 = format_PEMERINTAHAN_PT_50K_21.readFeatures(json_PEMERINTAHAN_PT_50K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_21.addFeatures(features_PEMERINTAHAN_PT_50K_21);
var lyr_PEMERINTAHAN_PT_50K_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_21, 
                style: style_PEMERINTAHAN_PT_50K_21,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_21.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_22 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_22 = format_DANAU_AR_50K_22.readFeatures(json_DANAU_AR_50K_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_22.addFeatures(features_DANAU_AR_50K_22);
var lyr_DANAU_AR_50K_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_22, 
                style: style_DANAU_AR_50K_22,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_22.png" /> Danau'
            });
var format_SUNGAI_LN_50K_23 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_23 = format_SUNGAI_LN_50K_23.readFeatures(json_SUNGAI_LN_50K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_23.addFeatures(features_SUNGAI_LN_50K_23);
var lyr_SUNGAI_LN_50K_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_23, 
                style: style_SUNGAI_LN_50K_23,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_23.png" /> Sungai'
            });
var format_JALAN_LN_50K_24 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_24 = format_JALAN_LN_50K_24.readFeatures(json_JALAN_LN_50K_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_24.addFeatures(features_JALAN_LN_50K_24);
var lyr_JALAN_LN_50K_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_24, 
                style: style_JALAN_LN_50K_24,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_24.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_25 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_25 = format_PEMUKIMAN_AR_50K_25.readFeatures(json_PEMUKIMAN_AR_50K_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_25.addFeatures(features_PEMUKIMAN_AR_50K_25);
var lyr_PEMUKIMAN_AR_50K_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_25, 
                style: style_PEMUKIMAN_AR_50K_25,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_25.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_26 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_26 = format_PEMERINTAHAN_PT_50K_26.readFeatures(json_PEMERINTAHAN_PT_50K_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_26.addFeatures(features_PEMERINTAHAN_PT_50K_26);
var lyr_PEMERINTAHAN_PT_50K_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_26, 
                style: style_PEMERINTAHAN_PT_50K_26,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_26.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_27 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_27 = format_DANAU_AR_50K_27.readFeatures(json_DANAU_AR_50K_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_27.addFeatures(features_DANAU_AR_50K_27);
var lyr_DANAU_AR_50K_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_27, 
                style: style_DANAU_AR_50K_27,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_27.png" /> Danau'
            });
var format_SUNGAI_LN_50K_28 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_28 = format_SUNGAI_LN_50K_28.readFeatures(json_SUNGAI_LN_50K_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_28.addFeatures(features_SUNGAI_LN_50K_28);
var lyr_SUNGAI_LN_50K_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_28, 
                style: style_SUNGAI_LN_50K_28,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_28.png" /> Sungai'
            });
var format_JALAN_LN_50K_29 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_29 = format_JALAN_LN_50K_29.readFeatures(json_JALAN_LN_50K_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_29.addFeatures(features_JALAN_LN_50K_29);
var lyr_JALAN_LN_50K_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_29, 
                style: style_JALAN_LN_50K_29,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_29.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_30 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_30 = format_PEMUKIMAN_AR_50K_30.readFeatures(json_PEMUKIMAN_AR_50K_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_30.addFeatures(features_PEMUKIMAN_AR_50K_30);
var lyr_PEMUKIMAN_AR_50K_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_30, 
                style: style_PEMUKIMAN_AR_50K_30,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_30.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_31 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_31 = format_PEMERINTAHAN_PT_50K_31.readFeatures(json_PEMERINTAHAN_PT_50K_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_31.addFeatures(features_PEMERINTAHAN_PT_50K_31);
var lyr_PEMERINTAHAN_PT_50K_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_31, 
                style: style_PEMERINTAHAN_PT_50K_31,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_31.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_32 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_32 = format_DANAU_AR_50K_32.readFeatures(json_DANAU_AR_50K_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_32.addFeatures(features_DANAU_AR_50K_32);
var lyr_DANAU_AR_50K_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_32, 
                style: style_DANAU_AR_50K_32,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_32.png" /> Danau'
            });
var format_SUNGAI_LN_50K_33 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_33 = format_SUNGAI_LN_50K_33.readFeatures(json_SUNGAI_LN_50K_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_33.addFeatures(features_SUNGAI_LN_50K_33);
var lyr_SUNGAI_LN_50K_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_33, 
                style: style_SUNGAI_LN_50K_33,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_33.png" /> Sungai'
            });
var format_JALAN_LN_50K_34 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_34 = format_JALAN_LN_50K_34.readFeatures(json_JALAN_LN_50K_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_34.addFeatures(features_JALAN_LN_50K_34);
var lyr_JALAN_LN_50K_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_34, 
                style: style_JALAN_LN_50K_34,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_34.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_35 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_35 = format_PEMUKIMAN_AR_50K_35.readFeatures(json_PEMUKIMAN_AR_50K_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_35.addFeatures(features_PEMUKIMAN_AR_50K_35);
var lyr_PEMUKIMAN_AR_50K_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_35, 
                style: style_PEMUKIMAN_AR_50K_35,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_35.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_36 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_36 = format_PEMERINTAHAN_PT_50K_36.readFeatures(json_PEMERINTAHAN_PT_50K_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_36.addFeatures(features_PEMERINTAHAN_PT_50K_36);
var lyr_PEMERINTAHAN_PT_50K_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_36, 
                style: style_PEMERINTAHAN_PT_50K_36,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_36.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_37 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_37 = format_DANAU_AR_50K_37.readFeatures(json_DANAU_AR_50K_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_37.addFeatures(features_DANAU_AR_50K_37);
var lyr_DANAU_AR_50K_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_37, 
                style: style_DANAU_AR_50K_37,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_37.png" /> Danau'
            });
var format_SUNGAI_LN_50K_38 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_38 = format_SUNGAI_LN_50K_38.readFeatures(json_SUNGAI_LN_50K_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_38.addFeatures(features_SUNGAI_LN_50K_38);
var lyr_SUNGAI_LN_50K_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_38, 
                style: style_SUNGAI_LN_50K_38,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_38.png" /> Sungai'
            });
var format_JALAN_LN_50K_39 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_39 = format_JALAN_LN_50K_39.readFeatures(json_JALAN_LN_50K_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_39.addFeatures(features_JALAN_LN_50K_39);
var lyr_JALAN_LN_50K_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_39, 
                style: style_JALAN_LN_50K_39,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_39.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_40 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_40 = format_PEMUKIMAN_AR_50K_40.readFeatures(json_PEMUKIMAN_AR_50K_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_40.addFeatures(features_PEMUKIMAN_AR_50K_40);
var lyr_PEMUKIMAN_AR_50K_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_40, 
                style: style_PEMUKIMAN_AR_50K_40,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_40.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_41 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_41 = format_PEMERINTAHAN_PT_50K_41.readFeatures(json_PEMERINTAHAN_PT_50K_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_41.addFeatures(features_PEMERINTAHAN_PT_50K_41);
var lyr_PEMERINTAHAN_PT_50K_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_41, 
                style: style_PEMERINTAHAN_PT_50K_41,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_41.png" /> Pemerintah'
            });
var format_SUNGAI_LN_50K_42 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_42 = format_SUNGAI_LN_50K_42.readFeatures(json_SUNGAI_LN_50K_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_42.addFeatures(features_SUNGAI_LN_50K_42);
var lyr_SUNGAI_LN_50K_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_42, 
                style: style_SUNGAI_LN_50K_42,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_42.png" /> Sungai'
            });
var format_JALAN_LN_50K_43 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_43 = format_JALAN_LN_50K_43.readFeatures(json_JALAN_LN_50K_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_43.addFeatures(features_JALAN_LN_50K_43);
var lyr_JALAN_LN_50K_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_43, 
                style: style_JALAN_LN_50K_43,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_43.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_44 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_44 = format_PEMUKIMAN_AR_50K_44.readFeatures(json_PEMUKIMAN_AR_50K_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_44.addFeatures(features_PEMUKIMAN_AR_50K_44);
var lyr_PEMUKIMAN_AR_50K_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_44, 
                style: style_PEMUKIMAN_AR_50K_44,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_44.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_45 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_45 = format_PEMERINTAHAN_PT_50K_45.readFeatures(json_PEMERINTAHAN_PT_50K_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_45.addFeatures(features_PEMERINTAHAN_PT_50K_45);
var lyr_PEMERINTAHAN_PT_50K_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_45, 
                style: style_PEMERINTAHAN_PT_50K_45,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_45.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_46 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_46 = format_DANAU_AR_50K_46.readFeatures(json_DANAU_AR_50K_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_46.addFeatures(features_DANAU_AR_50K_46);
var lyr_DANAU_AR_50K_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_46, 
                style: style_DANAU_AR_50K_46,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_46.png" /> Danau'
            });
var format_SUNGAI_LN_50K_47 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_47 = format_SUNGAI_LN_50K_47.readFeatures(json_SUNGAI_LN_50K_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_47.addFeatures(features_SUNGAI_LN_50K_47);
var lyr_SUNGAI_LN_50K_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_47, 
                style: style_SUNGAI_LN_50K_47,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_47.png" /> Sungai'
            });
var format_JALAN_LN_50K_48 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_48 = format_JALAN_LN_50K_48.readFeatures(json_JALAN_LN_50K_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_48.addFeatures(features_JALAN_LN_50K_48);
var lyr_JALAN_LN_50K_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_48, 
                style: style_JALAN_LN_50K_48,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_48.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_49 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_49 = format_PEMUKIMAN_AR_50K_49.readFeatures(json_PEMUKIMAN_AR_50K_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_49.addFeatures(features_PEMUKIMAN_AR_50K_49);
var lyr_PEMUKIMAN_AR_50K_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_49, 
                style: style_PEMUKIMAN_AR_50K_49,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_49.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_50 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_50 = format_PEMERINTAHAN_PT_50K_50.readFeatures(json_PEMERINTAHAN_PT_50K_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_50.addFeatures(features_PEMERINTAHAN_PT_50K_50);
var lyr_PEMERINTAHAN_PT_50K_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_50, 
                style: style_PEMERINTAHAN_PT_50K_50,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_50.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_51 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_51 = format_DANAU_AR_50K_51.readFeatures(json_DANAU_AR_50K_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_51.addFeatures(features_DANAU_AR_50K_51);
var lyr_DANAU_AR_50K_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_51, 
                style: style_DANAU_AR_50K_51,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_51.png" /> Danau'
            });
var format_SUNGAI_LN_50K_52 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_52 = format_SUNGAI_LN_50K_52.readFeatures(json_SUNGAI_LN_50K_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_52.addFeatures(features_SUNGAI_LN_50K_52);
var lyr_SUNGAI_LN_50K_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_52, 
                style: style_SUNGAI_LN_50K_52,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_52.png" /> Sungai'
            });
var format_JALAN_LN_50K_53 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_53 = format_JALAN_LN_50K_53.readFeatures(json_JALAN_LN_50K_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_53.addFeatures(features_JALAN_LN_50K_53);
var lyr_JALAN_LN_50K_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_53, 
                style: style_JALAN_LN_50K_53,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_53.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_54 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_54 = format_PEMUKIMAN_AR_50K_54.readFeatures(json_PEMUKIMAN_AR_50K_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_54.addFeatures(features_PEMUKIMAN_AR_50K_54);
var lyr_PEMUKIMAN_AR_50K_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_54, 
                style: style_PEMUKIMAN_AR_50K_54,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_54.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_55 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_55 = format_PEMERINTAHAN_PT_50K_55.readFeatures(json_PEMERINTAHAN_PT_50K_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_55.addFeatures(features_PEMERINTAHAN_PT_50K_55);
var lyr_PEMERINTAHAN_PT_50K_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_55, 
                style: style_PEMERINTAHAN_PT_50K_55,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_55.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_56 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_56 = format_DANAU_AR_50K_56.readFeatures(json_DANAU_AR_50K_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_56.addFeatures(features_DANAU_AR_50K_56);
var lyr_DANAU_AR_50K_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_56, 
                style: style_DANAU_AR_50K_56,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_56.png" /> Danau'
            });
var format_SUNGAI_LN_50K_57 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_57 = format_SUNGAI_LN_50K_57.readFeatures(json_SUNGAI_LN_50K_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_57.addFeatures(features_SUNGAI_LN_50K_57);
var lyr_SUNGAI_LN_50K_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_57, 
                style: style_SUNGAI_LN_50K_57,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_57.png" /> Sungai'
            });
var format_JALAN_LN_50K_58 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_58 = format_JALAN_LN_50K_58.readFeatures(json_JALAN_LN_50K_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_58.addFeatures(features_JALAN_LN_50K_58);
var lyr_JALAN_LN_50K_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_58, 
                style: style_JALAN_LN_50K_58,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_58.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_59 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_59 = format_PEMUKIMAN_AR_50K_59.readFeatures(json_PEMUKIMAN_AR_50K_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_59.addFeatures(features_PEMUKIMAN_AR_50K_59);
var lyr_PEMUKIMAN_AR_50K_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_59, 
                style: style_PEMUKIMAN_AR_50K_59,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_59.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_60 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_60 = format_PEMERINTAHAN_PT_50K_60.readFeatures(json_PEMERINTAHAN_PT_50K_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_60.addFeatures(features_PEMERINTAHAN_PT_50K_60);
var lyr_PEMERINTAHAN_PT_50K_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_60, 
                style: style_PEMERINTAHAN_PT_50K_60,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_60.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_61 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_61 = format_DANAU_AR_50K_61.readFeatures(json_DANAU_AR_50K_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_61.addFeatures(features_DANAU_AR_50K_61);
var lyr_DANAU_AR_50K_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_61, 
                style: style_DANAU_AR_50K_61,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_61.png" /> Danau'
            });
var format_SUNGAI_LN_50K_62 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_62 = format_SUNGAI_LN_50K_62.readFeatures(json_SUNGAI_LN_50K_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_62.addFeatures(features_SUNGAI_LN_50K_62);
var lyr_SUNGAI_LN_50K_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_62, 
                style: style_SUNGAI_LN_50K_62,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_62.png" /> Sungai'
            });
var format_JALAN_LN_50K_63 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_63 = format_JALAN_LN_50K_63.readFeatures(json_JALAN_LN_50K_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_63.addFeatures(features_JALAN_LN_50K_63);
var lyr_JALAN_LN_50K_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_63, 
                style: style_JALAN_LN_50K_63,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_63.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_64 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_64 = format_PEMUKIMAN_AR_50K_64.readFeatures(json_PEMUKIMAN_AR_50K_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_64.addFeatures(features_PEMUKIMAN_AR_50K_64);
var lyr_PEMUKIMAN_AR_50K_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_64, 
                style: style_PEMUKIMAN_AR_50K_64,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_64.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_65 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_65 = format_PEMERINTAHAN_PT_50K_65.readFeatures(json_PEMERINTAHAN_PT_50K_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_65.addFeatures(features_PEMERINTAHAN_PT_50K_65);
var lyr_PEMERINTAHAN_PT_50K_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_65, 
                style: style_PEMERINTAHAN_PT_50K_65,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_65.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_66 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_66 = format_DANAU_AR_50K_66.readFeatures(json_DANAU_AR_50K_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_66.addFeatures(features_DANAU_AR_50K_66);
var lyr_DANAU_AR_50K_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_66, 
                style: style_DANAU_AR_50K_66,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_66.png" /> Danau'
            });
var format_SUNGAI_LN_50K_67 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_67 = format_SUNGAI_LN_50K_67.readFeatures(json_SUNGAI_LN_50K_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_67.addFeatures(features_SUNGAI_LN_50K_67);
var lyr_SUNGAI_LN_50K_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_67, 
                style: style_SUNGAI_LN_50K_67,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_67.png" /> Sungai'
            });
var format_JALAN_LN_50K_68 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_68 = format_JALAN_LN_50K_68.readFeatures(json_JALAN_LN_50K_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_68.addFeatures(features_JALAN_LN_50K_68);
var lyr_JALAN_LN_50K_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_68, 
                style: style_JALAN_LN_50K_68,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_68.png" /> Jalan'
            });
var format_PEMUKIMAN_AR_50K_69 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_69 = format_PEMUKIMAN_AR_50K_69.readFeatures(json_PEMUKIMAN_AR_50K_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMUKIMAN_AR_50K_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_69.addFeatures(features_PEMUKIMAN_AR_50K_69);
var lyr_PEMUKIMAN_AR_50K_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_69, 
                style: style_PEMUKIMAN_AR_50K_69,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_69.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_70 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_70 = format_PEMERINTAHAN_PT_50K_70.readFeatures(json_PEMERINTAHAN_PT_50K_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_70.addFeatures(features_PEMERINTAHAN_PT_50K_70);
var lyr_PEMERINTAHAN_PT_50K_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_70, 
                style: style_PEMERINTAHAN_PT_50K_70,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_70.png" /> Pemerintah'
            });
var format_DANAU_AR_50K_71 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_71 = format_DANAU_AR_50K_71.readFeatures(json_DANAU_AR_50K_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DANAU_AR_50K_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_71.addFeatures(features_DANAU_AR_50K_71);
var lyr_DANAU_AR_50K_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_71, 
                style: style_DANAU_AR_50K_71,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_71.png" /> Danau'
            });
var format_SUNGAI_LN_50K_72 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_72 = format_SUNGAI_LN_50K_72.readFeatures(json_SUNGAI_LN_50K_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_50K_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_72.addFeatures(features_SUNGAI_LN_50K_72);
var lyr_SUNGAI_LN_50K_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_72, 
                style: style_SUNGAI_LN_50K_72,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_72.png" /> Sungai'
            });
var format_JALAN_LN_50K_73 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_73 = format_JALAN_LN_50K_73.readFeatures(json_JALAN_LN_50K_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_73.addFeatures(features_JALAN_LN_50K_73);
var lyr_JALAN_LN_50K_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_73, 
                style: style_JALAN_LN_50K_73,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_73.png" /> Jalan'
            });
var format_Pemukiman_74 = new ol.format.GeoJSON();
var features_Pemukiman_74 = format_Pemukiman_74.readFeatures(json_Pemukiman_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemukiman_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_74.addFeatures(features_Pemukiman_74);
var lyr_Pemukiman_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_74, 
                style: style_Pemukiman_74,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_74.png" /> Pemukiman'
            });
var format_PEMERINTAHAN_PT_50K_75 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_75 = format_PEMERINTAHAN_PT_50K_75.readFeatures(json_PEMERINTAHAN_PT_50K_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PEMERINTAHAN_PT_50K_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_75.addFeatures(features_PEMERINTAHAN_PT_50K_75);
var lyr_PEMERINTAHAN_PT_50K_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_75, 
                style: style_PEMERINTAHAN_PT_50K_75,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_75.png" /> Pemerintah'
            });
var group_KabLampungBarat = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_71,lyr_SUNGAI_LN_50K_72,lyr_JALAN_LN_50K_73,lyr_Pemukiman_74,lyr_PEMERINTAHAN_PT_50K_75,],
                                title: "Kab. Lampung Barat"});
var group_KabLampungSelatan = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_66,lyr_SUNGAI_LN_50K_67,lyr_JALAN_LN_50K_68,lyr_PEMUKIMAN_AR_50K_69,lyr_PEMERINTAHAN_PT_50K_70,],
                                title: "Kab. Lampung Selatan"});
var group_KabLampungTengah = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_61,lyr_SUNGAI_LN_50K_62,lyr_JALAN_LN_50K_63,lyr_PEMUKIMAN_AR_50K_64,lyr_PEMERINTAHAN_PT_50K_65,],
                                title: "Kab, Lampung Tengah"});
var group_KabLampungTimur = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_56,lyr_SUNGAI_LN_50K_57,lyr_JALAN_LN_50K_58,lyr_PEMUKIMAN_AR_50K_59,lyr_PEMERINTAHAN_PT_50K_60,],
                                title: "Kab. Lampung Timur"});
var group_KabLampungUtara = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_51,lyr_SUNGAI_LN_50K_52,lyr_JALAN_LN_50K_53,lyr_PEMUKIMAN_AR_50K_54,lyr_PEMERINTAHAN_PT_50K_55,],
                                title: "Kab. Lampung Utara"});
var group_KabMesuji = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_46,lyr_SUNGAI_LN_50K_47,lyr_JALAN_LN_50K_48,lyr_PEMUKIMAN_AR_50K_49,lyr_PEMERINTAHAN_PT_50K_50,],
                                title: "Kab. Mesuji"});
var group_KabPesawaran = new ol.layer.Group({
                                layers: [lyr_SUNGAI_LN_50K_42,lyr_JALAN_LN_50K_43,lyr_PEMUKIMAN_AR_50K_44,lyr_PEMERINTAHAN_PT_50K_45,],
                                title: "Kab. Pesawaran"});
var group_KabPesisirBarat = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_37,lyr_SUNGAI_LN_50K_38,lyr_JALAN_LN_50K_39,lyr_PEMUKIMAN_AR_50K_40,lyr_PEMERINTAHAN_PT_50K_41,],
                                title: "Kab. Pesisir Barat"});
var group_KabPringsewu = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_32,lyr_SUNGAI_LN_50K_33,lyr_JALAN_LN_50K_34,lyr_PEMUKIMAN_AR_50K_35,lyr_PEMERINTAHAN_PT_50K_36,],
                                title: "Kab. Pringsewu"});
var group_KabTanggamus = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_27,lyr_SUNGAI_LN_50K_28,lyr_JALAN_LN_50K_29,lyr_PEMUKIMAN_AR_50K_30,lyr_PEMERINTAHAN_PT_50K_31,],
                                title: "Kab. Tanggamus"});
var group_KabTulangBawangBarat = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_22,lyr_SUNGAI_LN_50K_23,lyr_JALAN_LN_50K_24,lyr_PEMUKIMAN_AR_50K_25,lyr_PEMERINTAHAN_PT_50K_26,],
                                title: "Kab. Tulang Bawang Barat"});
var group_KabTulangBawang = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_17,lyr_SUNGAI_LN_50K_18,lyr_JALAN_LN_50K_19,lyr_PEMUKIMAN_AR_50K_20,lyr_PEMERINTAHAN_PT_50K_21,],
                                title: "Kab. Tulang Bawang"});
var group_KabWayKanan = new ol.layer.Group({
                                layers: [lyr_DANAU_AR_50K_12,lyr_SUNGAI_LN_50K_13,lyr_JALAN_LN_50K_14,lyr_PEMUKIMAN_AR_50K_15,lyr_PEMERINTAHAN_PT_50K_16,],
                                title: "Kab. Way Kanan"});
var group_KotaBandarLampung = new ol.layer.Group({
                                layers: [lyr_SUNGAI_LN_50K_8,lyr_JALAN_LN_50K_9,lyr_PEMUKIMAN_AR_50K_10,lyr_PEMERINTAHAN_PT_50K_11,],
                                title: "Kota Bandar Lampung"});
var group_KotaMetro = new ol.layer.Group({
                                layers: [lyr_SUNGAI_LN_50K_4,lyr_JALAN_LN_50K_5,lyr_PEMUKIMAN_AR_50K_6,lyr_PEMERINTAHAN_PT_50K_7,],
                                title: "Kota Metro"});
var group_Administrasi = new ol.layer.Group({
                                layers: [lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1,lyr_Kecamatan_2,lyr_kota_3,],
                                title: "Administrasi"});
var group_webbase = new ol.layer.Group({
                                layers: [lyr_Wolrd_0,],
                                title: "web base"});

lyr_Wolrd_0.setVisible(true);lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.setVisible(true);lyr_Kecamatan_2.setVisible(true);lyr_kota_3.setVisible(true);lyr_SUNGAI_LN_50K_4.setVisible(false);lyr_JALAN_LN_50K_5.setVisible(false);lyr_PEMUKIMAN_AR_50K_6.setVisible(false);lyr_PEMERINTAHAN_PT_50K_7.setVisible(false);lyr_SUNGAI_LN_50K_8.setVisible(false);lyr_JALAN_LN_50K_9.setVisible(false);lyr_PEMUKIMAN_AR_50K_10.setVisible(false);lyr_PEMERINTAHAN_PT_50K_11.setVisible(false);lyr_DANAU_AR_50K_12.setVisible(false);lyr_SUNGAI_LN_50K_13.setVisible(false);lyr_JALAN_LN_50K_14.setVisible(false);lyr_PEMUKIMAN_AR_50K_15.setVisible(false);lyr_PEMERINTAHAN_PT_50K_16.setVisible(false);lyr_DANAU_AR_50K_17.setVisible(false);lyr_SUNGAI_LN_50K_18.setVisible(false);lyr_JALAN_LN_50K_19.setVisible(false);lyr_PEMUKIMAN_AR_50K_20.setVisible(false);lyr_PEMERINTAHAN_PT_50K_21.setVisible(false);lyr_DANAU_AR_50K_22.setVisible(false);lyr_SUNGAI_LN_50K_23.setVisible(false);lyr_JALAN_LN_50K_24.setVisible(false);lyr_PEMUKIMAN_AR_50K_25.setVisible(false);lyr_PEMERINTAHAN_PT_50K_26.setVisible(false);lyr_DANAU_AR_50K_27.setVisible(false);lyr_SUNGAI_LN_50K_28.setVisible(false);lyr_JALAN_LN_50K_29.setVisible(false);lyr_PEMUKIMAN_AR_50K_30.setVisible(false);lyr_PEMERINTAHAN_PT_50K_31.setVisible(false);lyr_DANAU_AR_50K_32.setVisible(false);lyr_SUNGAI_LN_50K_33.setVisible(false);lyr_JALAN_LN_50K_34.setVisible(false);lyr_PEMUKIMAN_AR_50K_35.setVisible(false);lyr_PEMERINTAHAN_PT_50K_36.setVisible(false);lyr_DANAU_AR_50K_37.setVisible(false);lyr_SUNGAI_LN_50K_38.setVisible(false);lyr_JALAN_LN_50K_39.setVisible(false);lyr_PEMUKIMAN_AR_50K_40.setVisible(false);lyr_PEMERINTAHAN_PT_50K_41.setVisible(false);lyr_SUNGAI_LN_50K_42.setVisible(false);lyr_JALAN_LN_50K_43.setVisible(false);lyr_PEMUKIMAN_AR_50K_44.setVisible(false);lyr_PEMERINTAHAN_PT_50K_45.setVisible(false);lyr_DANAU_AR_50K_46.setVisible(false);lyr_SUNGAI_LN_50K_47.setVisible(false);lyr_JALAN_LN_50K_48.setVisible(false);lyr_PEMUKIMAN_AR_50K_49.setVisible(false);lyr_PEMERINTAHAN_PT_50K_50.setVisible(false);lyr_DANAU_AR_50K_51.setVisible(false);lyr_SUNGAI_LN_50K_52.setVisible(false);lyr_JALAN_LN_50K_53.setVisible(false);lyr_PEMUKIMAN_AR_50K_54.setVisible(false);lyr_PEMERINTAHAN_PT_50K_55.setVisible(false);lyr_DANAU_AR_50K_56.setVisible(false);lyr_SUNGAI_LN_50K_57.setVisible(false);lyr_JALAN_LN_50K_58.setVisible(false);lyr_PEMUKIMAN_AR_50K_59.setVisible(false);lyr_PEMERINTAHAN_PT_50K_60.setVisible(false);lyr_DANAU_AR_50K_61.setVisible(false);lyr_SUNGAI_LN_50K_62.setVisible(false);lyr_JALAN_LN_50K_63.setVisible(false);lyr_PEMUKIMAN_AR_50K_64.setVisible(false);lyr_PEMERINTAHAN_PT_50K_65.setVisible(false);lyr_DANAU_AR_50K_66.setVisible(false);lyr_SUNGAI_LN_50K_67.setVisible(false);lyr_JALAN_LN_50K_68.setVisible(false);lyr_PEMUKIMAN_AR_50K_69.setVisible(false);lyr_PEMERINTAHAN_PT_50K_70.setVisible(false);lyr_DANAU_AR_50K_71.setVisible(false);lyr_SUNGAI_LN_50K_72.setVisible(false);lyr_JALAN_LN_50K_73.setVisible(false);lyr_Pemukiman_74.setVisible(false);lyr_PEMERINTAHAN_PT_50K_75.setVisible(false);
var layersList = [group_webbase,group_Administrasi,group_KotaMetro,group_KotaBandarLampung,group_KabWayKanan,group_KabTulangBawang,group_KabTulangBawangBarat,group_KabTanggamus,group_KabPringsewu,group_KabPesisirBarat,group_KabPesawaran,group_KabMesuji,group_KabLampungUtara,group_KabLampungTimur,group_KabLampungTengah,group_KabLampungSelatan,group_KabLampungBarat];
lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.set('fieldAliases', {'OBJECT_ID': 'OBJECT_ID', 'KODE_DESA': 'KODE_DESA', 'DESA': 'Desa/Kelurahan', 'KODE': 'KODE', 'PROVINSI': 'PROVINSI', 'KAB_KOTA': 'KAB_KOTA', 'KECAMATAN': 'KECAMATAN', 'DESA_KELUR': 'DESA_KELUR', 'JUMLAH_PEN': 'JUMLAH_PEN', 'JUMLAH_KK': 'JUMLAH_KK', 'LUAS_WILAY': 'LUAS_WILAY', 'KEPADATAN': 'KEPADATAN', 'PERPINDAHA': 'PERPINDAHA', 'JUMLAH_MEN': 'JUMLAH_MEN', 'PERUBAHAN': 'PERUBAHAN', 'WAJIB_KTP': 'WAJIB_KTP', 'SILAM': 'SILAM', 'KRISTEN': 'KRISTEN', 'KHATOLIK': 'KHATOLIK', 'HINDU': 'HINDU', 'BUDHA': 'BUDHA', 'KONGHUCU': 'KONGHUCU', 'KEPERCAYAA': 'KEPERCAYAA', 'PRIA': 'PRIA', 'WANITA': 'WANITA', 'BELUM_KAWI': 'BELUM_KAWI', 'KAWIN': 'KAWIN', 'CERAI_HIDU': 'CERAI_HIDU', 'CERAI_MATI': 'CERAI_MATI', 'U0': 'U0', 'U5': 'U5', 'U10': 'U10', 'U15': 'U15', 'U20': 'U20', 'U25': 'U25', 'U30': 'U30', 'U35': 'U35', 'U40': 'U40', 'U45': 'U45', 'U50': 'U50', 'U55': 'U55', 'U60': 'U60', 'U65': 'U65', 'U70': 'U70', 'U75': 'U75', 'TIDAK_BELU': 'TIDAK_BELU', 'BELUM_TAMA': 'BELUM_TAMA', 'TAMAT_SD': 'TAMAT_SD', 'SLTP': 'SLTP', 'SLTA': 'SLTA', 'DIPLOMA_I': 'DIPLOMA_I', 'DIPLOMA_II': 'DIPLOMA_II', 'DIPLOMA_IV': 'DIPLOMA_IV', 'STRATA_II': 'STRATA_II', 'STRATA_III': 'STRATA_III', 'BELUM_TIDA': 'BELUM_TIDA', 'APARATUR_P': 'APARATUR_P', 'TENAGA_PEN': 'TENAGA_PEN', 'WIRASWASTA': 'WIRASWASTA', 'PERTANIAN': 'PERTANIAN', 'NELAYAN': 'NELAYAN', 'AGAMA_DAN': 'AGAMA_DAN', 'PELAJAR_MA': 'PELAJAR_MA', 'TENAGA_KES': 'TENAGA_KES', 'PENSIUNAN': 'PENSIUNAN', 'LAINNYA': 'LAINNYA', 'GENERATED': 'GENERATED', 'KODE_DES_1': 'KODE_DES_1', 'BELUM_': 'BELUM_', 'MENGUR_': 'MENGUR_', 'PELAJAR_': 'PELAJAR_', 'PENSIUNA_1': 'PENSIUNA_1', 'PEGAWAI_': 'PEGAWAI_', 'TENTARA': 'TENTARA', 'KEPOLISIAN': 'KEPOLISIAN', 'PERDAG_': 'PERDAG_', 'PETANI': 'PETANI', 'PETERN_': 'PETERN_', 'NELAYAN_1': 'NELAYAN_1', 'INDUSTR_': 'INDUSTR_', 'KONSTR_': 'KONSTR_', 'TRANSP_': 'TRANSP_', 'KARYAW_': 'KARYAW_', 'KARYAW1': 'KARYAW1', 'KARYAW1_1': 'KARYAW1_1', 'KARYAW1_12': 'KARYAW1_12', 'BURUH': 'BURUH', 'BURUH_': 'BURUH_', 'BURUH1': 'BURUH1', 'BURUH1_1': 'BURUH1_1', 'PEMBANT_': 'PEMBANT_', 'TUKANG': 'TUKANG', 'TUKANG_1': 'TUKANG_1', 'TUKANG_12': 'TUKANG_12', 'TUKANG__13': 'TUKANG__13', 'TUKANG__14': 'TUKANG__14', 'TUKANG__15': 'TUKANG__15', 'TUKANG__16': 'TUKANG__16', 'TUKANG__17': 'TUKANG__17', 'PENATA': 'PENATA', 'PENATA_': 'PENATA_', 'PENATA1_1': 'PENATA1_1', 'MEKANIK': 'MEKANIK', 'SENIMAN_': 'SENIMAN_', 'TABIB': 'TABIB', 'PARAJI_': 'PARAJI_', 'PERANCA_': 'PERANCA_', 'PENTER_': 'PENTER_', 'IMAM_M': 'IMAM_M', 'PENDETA': 'PENDETA', 'PASTOR': 'PASTOR', 'WARTAWAN': 'WARTAWAN', 'USTADZ': 'USTADZ', 'JURU_M': 'JURU_M', 'PROMOT': 'PROMOT', 'ANGGOTA_': 'ANGGOTA_', 'ANGGOTA1': 'ANGGOTA1', 'ANGGOTA1_1': 'ANGGOTA1_1', 'PRESIDEN': 'PRESIDEN', 'WAKIL_PRES': 'WAKIL_PRES', 'ANGGOTA1_2': 'ANGGOTA1_2', 'ANGGOTA1_3': 'ANGGOTA1_3', 'DUTA_B': 'DUTA_B', 'GUBERNUR': 'GUBERNUR', 'WAKIL_GUBE': 'WAKIL_GUBE', 'BUPATI': 'BUPATI', 'WAKIL_BUPA': 'WAKIL_BUPA', 'WALIKOTA': 'WALIKOTA', 'WAKIL_WALI': 'WAKIL_WALI', 'ANGGOTA1_4': 'ANGGOTA1_4', 'ANGGOTA1_5': 'ANGGOTA1_5', 'DOSEN': 'DOSEN', 'GURU': 'GURU', 'PILOT': 'PILOT', 'PENGACARA_': 'PENGACARA_', 'NOTARIS': 'NOTARIS', 'ARSITEK': 'ARSITEK', 'AKUNTA_': 'AKUNTA_', 'KONSUL_': 'KONSUL_', 'DOKTER': 'DOKTER', 'BIDAN': 'BIDAN', 'PERAWAT': 'PERAWAT', 'APOTEK_': 'APOTEK_', 'PSIKIATER': 'PSIKIATER', 'PENYIA_': 'PENYIA_', 'PENYIA1': 'PENYIA1', 'PELAUT': 'PELAUT', 'PENELITI': 'PENELITI', 'SOPIR': 'SOPIR', 'PIALAN': 'PIALAN', 'PARANORMAL': 'PARANORMAL', 'PEDAGA_': 'PEDAGA_', 'PERANG_': 'PERANG_', 'KEPALA_': 'KEPALA_', 'BIARAW_': 'BIARAW_', 'WIRASWAST_': 'WIRASWAST_', 'LAINNYA_12': 'LAINNYA_12', 'LUAS_DESA': 'LUAS_DESA', 'KODE_DES_3': 'KODE_DES_3', 'DESA_KEL_1': 'DESA_KEL_1', 'KODE_12': 'KODE_12', });
lyr_Kecamatan_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'Kecamatan', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_kota_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'Kota/Kabupaten', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_SUNGAI_LN_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_LN_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_14.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_19.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_24.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_25.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_26.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_27.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_28.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_29.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_30.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_31.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_32.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_33.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_34.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_35.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_36.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_37.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_38.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_39.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_40.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_41.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_LN_50K_42.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_43.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_44.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_45.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_46.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_47.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_48.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_49.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_50.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_51.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_52.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_53.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_54.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_55.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_56.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_57.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_58.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_59.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_60.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_61.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_62.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_63.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_64.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_65.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_66.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_67.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_68.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_69.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_70.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DANAU_AR_50K_71.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_72.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_73.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pemukiman_74.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_75.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.set('fieldImages', {'OBJECT_ID': 'Hidden', 'KODE_DESA': 'Hidden', 'DESA': 'TextEdit', 'KODE': 'Hidden', 'PROVINSI': 'Hidden', 'KAB_KOTA': 'Hidden', 'KECAMATAN': 'Hidden', 'DESA_KELUR': 'Hidden', 'JUMLAH_PEN': 'Hidden', 'JUMLAH_KK': 'Hidden', 'LUAS_WILAY': 'Hidden', 'KEPADATAN': 'Hidden', 'PERPINDAHA': 'Hidden', 'JUMLAH_MEN': 'Hidden', 'PERUBAHAN': 'Hidden', 'WAJIB_KTP': 'Hidden', 'SILAM': 'Hidden', 'KRISTEN': 'Hidden', 'KHATOLIK': 'Hidden', 'HINDU': 'Hidden', 'BUDHA': 'Hidden', 'KONGHUCU': 'Hidden', 'KEPERCAYAA': 'Hidden', 'PRIA': 'Hidden', 'WANITA': 'Hidden', 'BELUM_KAWI': 'Hidden', 'KAWIN': 'Hidden', 'CERAI_HIDU': 'Hidden', 'CERAI_MATI': 'Hidden', 'U0': 'Hidden', 'U5': 'Hidden', 'U10': 'Hidden', 'U15': 'Hidden', 'U20': 'Hidden', 'U25': 'Hidden', 'U30': 'Hidden', 'U35': 'Hidden', 'U40': 'Hidden', 'U45': 'Hidden', 'U50': 'Hidden', 'U55': 'Hidden', 'U60': 'Hidden', 'U65': 'Hidden', 'U70': 'Hidden', 'U75': 'Hidden', 'TIDAK_BELU': 'Hidden', 'BELUM_TAMA': 'Hidden', 'TAMAT_SD': 'Hidden', 'SLTP': 'Hidden', 'SLTA': 'Hidden', 'DIPLOMA_I': 'Hidden', 'DIPLOMA_II': 'Hidden', 'DIPLOMA_IV': 'Hidden', 'STRATA_II': 'Hidden', 'STRATA_III': 'Hidden', 'BELUM_TIDA': 'Hidden', 'APARATUR_P': 'Hidden', 'TENAGA_PEN': 'Hidden', 'WIRASWASTA': 'Hidden', 'PERTANIAN': 'Hidden', 'NELAYAN': 'Hidden', 'AGAMA_DAN': 'Hidden', 'PELAJAR_MA': 'Hidden', 'TENAGA_KES': 'Hidden', 'PENSIUNAN': 'Hidden', 'LAINNYA': 'Hidden', 'GENERATED': 'Hidden', 'KODE_DES_1': 'Hidden', 'BELUM_': 'Hidden', 'MENGUR_': 'Hidden', 'PELAJAR_': 'Hidden', 'PENSIUNA_1': 'Hidden', 'PEGAWAI_': 'Hidden', 'TENTARA': 'Hidden', 'KEPOLISIAN': 'Hidden', 'PERDAG_': 'Hidden', 'PETANI': 'Hidden', 'PETERN_': 'Hidden', 'NELAYAN_1': 'Hidden', 'INDUSTR_': 'Hidden', 'KONSTR_': 'Hidden', 'TRANSP_': 'Hidden', 'KARYAW_': 'Hidden', 'KARYAW1': 'Hidden', 'KARYAW1_1': 'Hidden', 'KARYAW1_12': 'Hidden', 'BURUH': 'Hidden', 'BURUH_': 'Hidden', 'BURUH1': 'Hidden', 'BURUH1_1': 'Hidden', 'PEMBANT_': 'Hidden', 'TUKANG': 'Hidden', 'TUKANG_1': 'Hidden', 'TUKANG_12': 'Hidden', 'TUKANG__13': 'Hidden', 'TUKANG__14': 'Hidden', 'TUKANG__15': 'Hidden', 'TUKANG__16': 'Hidden', 'TUKANG__17': 'Hidden', 'PENATA': 'Hidden', 'PENATA_': 'Hidden', 'PENATA1_1': 'Hidden', 'MEKANIK': 'Hidden', 'SENIMAN_': 'Hidden', 'TABIB': 'Hidden', 'PARAJI_': 'Hidden', 'PERANCA_': 'Hidden', 'PENTER_': 'Hidden', 'IMAM_M': 'Hidden', 'PENDETA': 'Hidden', 'PASTOR': 'Hidden', 'WARTAWAN': 'Hidden', 'USTADZ': 'Hidden', 'JURU_M': 'Hidden', 'PROMOT': 'Hidden', 'ANGGOTA_': 'Hidden', 'ANGGOTA1': 'Hidden', 'ANGGOTA1_1': 'Hidden', 'PRESIDEN': 'Hidden', 'WAKIL_PRES': 'Hidden', 'ANGGOTA1_2': 'Hidden', 'ANGGOTA1_3': 'Hidden', 'DUTA_B': 'Hidden', 'GUBERNUR': 'Hidden', 'WAKIL_GUBE': 'Hidden', 'BUPATI': 'Hidden', 'WAKIL_BUPA': 'Hidden', 'WALIKOTA': 'Hidden', 'WAKIL_WALI': 'Hidden', 'ANGGOTA1_4': 'Hidden', 'ANGGOTA1_5': 'Hidden', 'DOSEN': 'Hidden', 'GURU': 'Hidden', 'PILOT': 'Hidden', 'PENGACARA_': 'Hidden', 'NOTARIS': 'Hidden', 'ARSITEK': 'Hidden', 'AKUNTA_': 'Hidden', 'KONSUL_': 'Hidden', 'DOKTER': 'Hidden', 'BIDAN': 'Hidden', 'PERAWAT': 'Hidden', 'APOTEK_': 'Hidden', 'PSIKIATER': 'Hidden', 'PENYIA_': 'Hidden', 'PENYIA1': 'Hidden', 'PELAUT': 'Hidden', 'PENELITI': 'Hidden', 'SOPIR': 'Hidden', 'PIALAN': 'Hidden', 'PARANORMAL': 'Hidden', 'PEDAGA_': 'Hidden', 'PERANG_': 'Hidden', 'KEPALA_': 'Hidden', 'BIARAW_': 'Hidden', 'WIRASWAST_': 'Hidden', 'LAINNYA_12': 'Hidden', 'LUAS_DESA': 'Hidden', 'KODE_DES_3': 'Hidden', 'DESA_KEL_1': 'Hidden', 'KODE_12': 'Hidden', });
lyr_Kecamatan_2.set('fieldImages', {'KDPPUM': 'Hidden', 'NAMOBJ': 'TextEdit', 'REMARK': 'Hidden', 'KDPBPS': 'Hidden', 'FCODE': 'Hidden', 'LUASWH': 'Hidden', 'UUPP': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDBBPS': 'Hidden', 'KDBPUM': 'Hidden', 'WADMKD': 'Hidden', 'WIADKD': 'Hidden', 'WADMKC': 'Hidden', 'WIADKC': 'Hidden', 'WADMKK': 'Hidden', 'WIADKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADPR': 'Hidden', 'TIPADM': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_kota_3.set('fieldImages', {'KDPPUM': 'Hidden', 'NAMOBJ': 'Hidden', 'REMARK': 'Hidden', 'KDPBPS': 'Hidden', 'FCODE': 'Hidden', 'LUASWH': 'Hidden', 'UUPP': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDBBPS': 'Hidden', 'KDBPUM': 'Hidden', 'WADMKD': 'Hidden', 'WIADKD': 'Hidden', 'WADMKC': 'Hidden', 'WIADKC': 'Hidden', 'WADMKK': 'TextEdit', 'WIADKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADPR': 'Hidden', 'TIPADM': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_SUNGAI_LN_50K_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_5.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_7.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUNGAI_LN_50K_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_9.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_12.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_13.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_14.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_16.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_17.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_18.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_19.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_20.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_21.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_22.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_23.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_24.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_25.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_26.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_27.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_28.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_29.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_30.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_31.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_32.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_33.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_34.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_35.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_36.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_37.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_38.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_39.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_40.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_41.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUNGAI_LN_50K_42.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_43.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_44.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_45.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_46.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_47.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_48.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_49.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_50.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_51.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_52.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_53.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_54.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_55.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_56.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_57.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_58.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_59.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_60.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_61.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_62.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_63.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_64.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_65.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_66.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_67.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_68.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_69.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_70.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DANAU_AR_50K_71.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_LN_50K_72.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_73.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Pemukiman_74.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_PT_50K_75.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BATAS_DESA_DESEMBER_2019_DUKCAPIL_LAMPUNG_1.set('fieldLabels', {});
lyr_Kecamatan_2.set('fieldLabels', {});
lyr_kota_3.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_4.set('fieldLabels', {});
lyr_JALAN_LN_50K_5.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_6.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_7.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_8.set('fieldLabels', {});
lyr_JALAN_LN_50K_9.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_10.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_11.set('fieldLabels', {});
lyr_DANAU_AR_50K_12.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_13.set('fieldLabels', {});
lyr_JALAN_LN_50K_14.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_15.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_16.set('fieldLabels', {});
lyr_DANAU_AR_50K_17.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_18.set('fieldLabels', {});
lyr_JALAN_LN_50K_19.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_20.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_21.set('fieldLabels', {});
lyr_DANAU_AR_50K_22.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_23.set('fieldLabels', {});
lyr_JALAN_LN_50K_24.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_25.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_26.set('fieldLabels', {});
lyr_DANAU_AR_50K_27.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_28.set('fieldLabels', {});
lyr_JALAN_LN_50K_29.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_30.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_31.set('fieldLabels', {});
lyr_DANAU_AR_50K_32.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_33.set('fieldLabels', {});
lyr_JALAN_LN_50K_34.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_35.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_36.set('fieldLabels', {});
lyr_DANAU_AR_50K_37.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_38.set('fieldLabels', {});
lyr_JALAN_LN_50K_39.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_40.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_41.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_42.set('fieldLabels', {});
lyr_JALAN_LN_50K_43.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_44.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_45.set('fieldLabels', {});
lyr_DANAU_AR_50K_46.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_47.set('fieldLabels', {});
lyr_JALAN_LN_50K_48.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_49.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_50.set('fieldLabels', {});
lyr_DANAU_AR_50K_51.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_52.set('fieldLabels', {});
lyr_JALAN_LN_50K_53.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_54.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_55.set('fieldLabels', {});
lyr_DANAU_AR_50K_56.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_57.set('fieldLabels', {});
lyr_JALAN_LN_50K_58.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_59.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_60.set('fieldLabels', {});
lyr_DANAU_AR_50K_61.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_62.set('fieldLabels', {});
lyr_JALAN_LN_50K_63.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_64.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_65.set('fieldLabels', {});
lyr_DANAU_AR_50K_66.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_67.set('fieldLabels', {});
lyr_JALAN_LN_50K_68.set('fieldLabels', {});
lyr_PEMUKIMAN_AR_50K_69.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_70.set('fieldLabels', {});
lyr_DANAU_AR_50K_71.set('fieldLabels', {});
lyr_SUNGAI_LN_50K_72.set('fieldLabels', {});
lyr_JALAN_LN_50K_73.set('fieldLabels', {});
lyr_Pemukiman_74.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_75.set('fieldLabels', {});
lyr_PEMERINTAHAN_PT_50K_75.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});