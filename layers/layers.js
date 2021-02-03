var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNESTRAVERSEES_1 = new ol.format.GeoJSON();
var features_COMMUNESTRAVERSEES_1 = format_COMMUNESTRAVERSEES_1.readFeatures(json_COMMUNESTRAVERSEES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNESTRAVERSEES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESTRAVERSEES_1.addFeatures(features_COMMUNESTRAVERSEES_1);
var lyr_COMMUNESTRAVERSEES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNESTRAVERSEES_1, 
                style: style_COMMUNESTRAVERSEES_1,
                interactive: false,
                title: '<img src="styles/legend/COMMUNESTRAVERSEES_1.png" /> COMMUNES TRAVERSEES'
            });
var format_AIRESDACCUEIL_2 = new ol.format.GeoJSON();
var features_AIRESDACCUEIL_2 = format_AIRESDACCUEIL_2.readFeatures(json_AIRESDACCUEIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRESDACCUEIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRESDACCUEIL_2.addFeatures(features_AIRESDACCUEIL_2);
var lyr_AIRESDACCUEIL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIRESDACCUEIL_2, 
                style: style_AIRESDACCUEIL_2,
                interactive: false,
                title: '<img src="styles/legend/AIRESDACCUEIL_2.png" /> AIRES D\'ACCUEIL'
            });
var format_TRACEDEFINITIFCCBD_3 = new ol.format.GeoJSON();
var features_TRACEDEFINITIFCCBD_3 = format_TRACEDEFINITIFCCBD_3.readFeatures(json_TRACEDEFINITIFCCBD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACEDEFINITIFCCBD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACEDEFINITIFCCBD_3.addFeatures(features_TRACEDEFINITIFCCBD_3);
var lyr_TRACEDEFINITIFCCBD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRACEDEFINITIFCCBD_3, 
                style: style_TRACEDEFINITIFCCBD_3,
                interactive: true,
                title: '<img src="styles/legend/TRACEDEFINITIFCCBD_3.png" /> TRACE DEFINITIF - CCBD'
            });
var format_TracprovisoireCCIsleCrmieu_4 = new ol.format.GeoJSON();
var features_TracprovisoireCCIsleCrmieu_4 = format_TracprovisoireCCIsleCrmieu_4.readFeatures(json_TracprovisoireCCIsleCrmieu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TracprovisoireCCIsleCrmieu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TracprovisoireCCIsleCrmieu_4.addFeatures(features_TracprovisoireCCIsleCrmieu_4);
var lyr_TracprovisoireCCIsleCrmieu_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TracprovisoireCCIsleCrmieu_4, 
                style: style_TracprovisoireCCIsleCrmieu_4,
                interactive: false,
                title: '<img src="styles/legend/TracprovisoireCCIsleCrmieu_4.png" /> Tracé provisoire CC Isle Crémieu'
            });
var format_ACCESAIREACCUEIL_5 = new ol.format.GeoJSON();
var features_ACCESAIREACCUEIL_5 = format_ACCESAIREACCUEIL_5.readFeatures(json_ACCESAIREACCUEIL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACCESAIREACCUEIL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACCESAIREACCUEIL_5.addFeatures(features_ACCESAIREACCUEIL_5);
var lyr_ACCESAIREACCUEIL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACCESAIREACCUEIL_5, 
                style: style_ACCESAIREACCUEIL_5,
                interactive: true,
                title: '<img src="styles/legend/ACCESAIREACCUEIL_5.png" /> ACCES AIRE ACCUEIL'
            });
var format_SIGNALISATIONVIARHONA_6 = new ol.format.GeoJSON();
var features_SIGNALISATIONVIARHONA_6 = format_SIGNALISATIONVIARHONA_6.readFeatures(json_SIGNALISATIONVIARHONA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGNALISATIONVIARHONA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIGNALISATIONVIARHONA_6.addFeatures(features_SIGNALISATIONVIARHONA_6);
var lyr_SIGNALISATIONVIARHONA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIGNALISATIONVIARHONA_6, 
                style: style_SIGNALISATIONVIARHONA_6,
                interactive: true,
                title: '<img src="styles/legend/SIGNALISATIONVIARHONA_6.png" /> SIGNALISATION VIARHONA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_COMMUNESTRAVERSEES_1.setVisible(true);lyr_AIRESDACCUEIL_2.setVisible(true);lyr_TRACEDEFINITIFCCBD_3.setVisible(true);lyr_TracprovisoireCCIsleCrmieu_4.setVisible(false);lyr_ACCESAIREACCUEIL_5.setVisible(true);lyr_SIGNALISATIONVIARHONA_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COMMUNESTRAVERSEES_1,lyr_AIRESDACCUEIL_2,lyr_TRACEDEFINITIFCCBD_3,lyr_TracprovisoireCCIsleCrmieu_4,lyr_ACCESAIREACCUEIL_5,lyr_SIGNALISATIONVIARHONA_6];
lyr_COMMUNESTRAVERSEES_1.set('fieldAliases', {'ID': 'ID', 'STATUT': 'STATUT', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'NOM_COM_M': 'NOM_COM_M', 'POPULATION': 'POPULATION', 'TYPE': 'TYPE', 'NOM_COM': 'NOM_COM', });
lyr_AIRESDACCUEIL_2.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', });
lyr_TRACEDEFINITIFCCBD_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_Track': 'gpxx_Track', });
lyr_TracprovisoireCCIsleCrmieu_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_Track': 'gpxx_Track', });
lyr_ACCESAIREACCUEIL_5.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_SIGNALISATIONVIARHONA_6.set('fieldAliases', {'_EN_PROJET': '_EN_PROJET', 'SUPPORT': 'SUPPORT', 'PANNEAU': 'PANNEAU', 'SIGNALISAT': 'SIGNALISAT', 'COMMUNES': 'COMMUNES', 'DE_VOIRIE': 'DE_VOIRIE', 'IMPLANTATI': 'IMPLANTATI', 'CIRCULATIO': 'CIRCULATIO', 'PHOTOS': 'PHOTOS', 'CARREFOUR': 'CARREFOUR', 'CODE_LAME': 'CODE_LAME', 'ENSEMBLE': 'ENSEMBLE', 'COMMENTAIR': 'COMMENTAIR', 'TYPE_LAME': 'TYPE_LAME', 'ID_SC2': 'ID_SC2', 'EUROVELO': 'EUROVELO', 'ID_N_1': 'ID_N_1', 'ID_N_2': 'ID_N_2', 'ID_N_3': 'ID_N_3', 'MENTION': 'MENTION', 'DISTANCE': 'DISTANCE', 'BIS': 'BIS', 'BIS0': 'BIS0', 'FLECHE': 'FLECHE', '__EQUERRE': '__EQUERRE', 'TYPE_MAT': 'TYPE_MAT', 'LAME': 'LAME', 'CODEMAT': 'CODEMAT', });
lyr_COMMUNESTRAVERSEES_1.set('fieldImages', {'ID': 'TextEdit', 'STATUT': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'POPULATION': 'TextEdit', 'TYPE': 'TextEdit', 'NOM_COM': 'TextEdit', });
lyr_AIRESDACCUEIL_2.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_TRACEDEFINITIFCCBD_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'gpxx_Track': 'TextEdit', });
lyr_TracprovisoireCCIsleCrmieu_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'gpxx_Track': 'TextEdit', });
lyr_ACCESAIREACCUEIL_5.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SIGNALISATIONVIARHONA_6.set('fieldImages', {'_EN_PROJET': 'TextEdit', 'SUPPORT': 'TextEdit', 'PANNEAU': 'TextEdit', 'SIGNALISAT': 'TextEdit', 'COMMUNES': 'TextEdit', 'DE_VOIRIE': 'TextEdit', 'IMPLANTATI': 'TextEdit', 'CIRCULATIO': 'TextEdit', 'PHOTOS': 'TextEdit', 'CARREFOUR': 'TextEdit', 'CODE_LAME': 'TextEdit', 'ENSEMBLE': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'TYPE_LAME': 'TextEdit', 'ID_SC2': 'TextEdit', 'EUROVELO': 'TextEdit', 'ID_N_1': 'TextEdit', 'ID_N_2': 'TextEdit', 'ID_N_3': 'TextEdit', 'MENTION': 'TextEdit', 'DISTANCE': 'TextEdit', 'BIS': 'TextEdit', 'BIS0': 'TextEdit', 'FLECHE': 'TextEdit', '__EQUERRE': 'TextEdit', 'TYPE_MAT': 'TextEdit', 'LAME': 'TextEdit', 'CODEMAT': 'TextEdit', });
lyr_COMMUNESTRAVERSEES_1.set('fieldLabels', {'ID': 'no label', 'STATUT': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'NOM_COM_M': 'no label', 'POPULATION': 'no label', 'TYPE': 'no label', 'NOM_COM': 'no label', });
lyr_AIRESDACCUEIL_2.set('fieldLabels', {'id': 'no label', 'TYPE': 'no label', });
lyr_TRACEDEFINITIFCCBD_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_Track': 'no label', });
lyr_TracprovisoireCCIsleCrmieu_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_Track': 'no label', });
lyr_ACCESAIREACCUEIL_5.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_SIGNALISATIONVIARHONA_6.set('fieldLabels', {'_EN_PROJET': 'inline label', 'SUPPORT': 'inline label', 'PANNEAU': 'inline label', 'SIGNALISAT': 'inline label', 'COMMUNES': 'inline label', 'DE_VOIRIE': 'inline label', 'IMPLANTATI': 'inline label', 'CIRCULATIO': 'inline label', 'PHOTOS': 'inline label', 'CARREFOUR': 'inline label', 'CODE_LAME': 'inline label', 'ENSEMBLE': 'inline label', 'COMMENTAIR': 'inline label', 'TYPE_LAME': 'inline label', 'ID_SC2': 'inline label', 'EUROVELO': 'inline label', 'ID_N_1': 'inline label', 'ID_N_2': 'inline label', 'ID_N_3': 'inline label', 'MENTION': 'inline label', 'DISTANCE': 'inline label', 'BIS': 'inline label', 'BIS0': 'inline label', 'FLECHE': 'inline label', '__EQUERRE': 'inline label', 'TYPE_MAT': 'inline label', 'LAME': 'inline label', 'CODEMAT': 'inline label', });
lyr_SIGNALISATIONVIARHONA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});