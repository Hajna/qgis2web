var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesat_1 = new ol.layer.Tile({
            'title': 'google sat',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_texas_atlas_2 = new ol.format.GeoJSON();
var features_texas_atlas_2 = format_texas_atlas_2.readFeatures(json_texas_atlas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_texas_atlas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_texas_atlas_2.addFeatures(features_texas_atlas_2);
var lyr_texas_atlas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_texas_atlas_2, 
                style: style_texas_atlas_2,
                popuplayertitle: "texas_atlas",
                interactive: true,
    title: 'texas_atlas<br />\
    <img src="styles/legend/texas_atlas_2_0.png" /> AUSTIN ENERGY<br />\
    <img src="styles/legend/texas_atlas_2_1.png" /> BAILEY COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_2.png" /> BANDERA ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_3.png" /> BARTLETT ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_4.png" /> BIG COUNTRY ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_5.png" /> BLUEBONNET ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_6.png" /> BOWIE-CASS ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_7.png" /> BROWNSVILLE PUBLIC UTILITIES BOARD<br />\
    <img src="styles/legend/texas_atlas_2_8.png" /> CENTERPOINT ENERGY<br />\
    <img src="styles/legend/texas_atlas_2_9.png" /> CENTRAL TEXAS ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_10.png" /> CHEROKEE COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_11.png" /> CITY OF BARTLETT - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_12.png" /> CITY OF BASTROP - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_13.png" /> CITY OF BELLVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_14.png" /> CITY OF BOERNE<br />\
    <img src="styles/legend/texas_atlas_2_15.png" /> CITY OF BOWIE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_16.png" /> CITY OF BRADY - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_17.png" /> CITY OF BRENHAM - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_18.png" /> CITY OF BRIDGEPORT - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_19.png" /> CITY OF BROWNFIELD - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_20.png" /> CITY OF BRYAN - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_21.png" /> CITY OF BURNET - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_22.png" /> CITY OF CALDWELL<br />\
    <img src="styles/legend/texas_atlas_2_23.png" /> CITY OF CASTROVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_24.png" /> CITY OF COLEMAN - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_25.png" /> CITY OF COLLEGE STATION - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_26.png" /> CITY OF CUERO - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_27.png" /> CITY OF DENTON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_28.png" /> CITY OF ELECTRA - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_29.png" /> CITY OF FARMERSVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_30.png" /> CITY OF FLATONIA - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_31.png" /> CITY OF FLORESVILLE<br />\
    <img src="styles/legend/texas_atlas_2_32.png" /> CITY OF FLOYDADA - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_33.png" /> CITY OF FREDERICKSBURG - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_34.png" /> CITY OF GARLAND - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_35.png" /> CITY OF GEORGETOWN - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_36.png" /> CITY OF GIDDINGS - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_37.png" /> CITY OF GOLDSMITH - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_38.png" /> CITY OF GOLDTHWAITE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_39.png" /> CITY OF GONZALES - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_40.png" /> CITY OF GRANBURY - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_41.png" /> CITY OF GREENVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_42.png" /> CITY OF HALLETTSVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_43.png" /> CITY OF HEARNE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_44.png" /> CITY OF HEMPHILL - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_45.png" /> CITY OF HEMPSTEAD - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_46.png" /> CITY OF HONDO - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_47.png" /> CITY OF JASPER - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_48.png" /> CITY OF LA GRANGE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_49.png" /> CITY OF LAMPASAS - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_50.png" /> CITY OF LEXINGTON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_51.png" /> CITY OF LIBERTY - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_52.png" /> CITY OF LIVINGSTON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_53.png" /> CITY OF LLANO - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_54.png" /> CITY OF LOCKHART - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_55.png" /> CITY OF LUBBOCK - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_56.png" /> CITY OF LULING - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_57.png" /> CITY OF MASON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_58.png" /> CITY OF MOULTON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_59.png" /> CITY OF NEW BRAUNFELS - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_60.png" /> CITY OF NEWTON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_61.png" /> CITY OF ROBSTOWN - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_62.png" /> CITY OF SAN ANTONIO - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_63.png" /> CITY OF SAN AUGUSTINE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_64.png" /> CITY OF SAN MARCOS - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_65.png" /> CITY OF SAN SABA - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_66.png" /> CITY OF SANGER - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_67.png" /> CITY OF SCHULENBURG - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_68.png" /> CITY OF SEGUIN - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_69.png" /> CITY OF SEYMOUR - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_70.png" /> CITY OF SHINER - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_71.png" /> CITY OF SMITHVILLE - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_72.png" /> CITY OF TIMPSON - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_73.png" /> CITY OF TULIA<br />\
    <img src="styles/legend/texas_atlas_2_74.png" /> CITY OF WAELDER - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_75.png" /> CITY OF WEIMAR - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_76.png" /> CITY OF WHITESBORO - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_77.png" /> CITY OF YOAKUM - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_78.png" /> COLEMAN COUNTY ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_79.png" /> COMANCHE COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_80.png" /> CONCHO VALLEY ELEC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_81.png" /> COOKE COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_82.png" /> DEAF SMITH ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_83.png" /> DEEP EAST TEXAS ELEC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_84.png" /> DENTON COUNTY ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_85.png" /> EL PASO ELECTRIC CO<br />\
    <img src="styles/legend/texas_atlas_2_86.png" /> ENTERGY TEXAS INC.<br />\
    <img src="styles/legend/texas_atlas_2_87.png" /> FANNIN COUNTY ELECTRIC COOP<br />\
    <img src="styles/legend/texas_atlas_2_88.png" /> FARMERS ELECTRIC COOP, INC - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_89.png" /> FAYETTE ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_90.png" /> FORT BELKNAP ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_91.png" /> GRAYSON-COLLIN ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_92.png" /> GREENBELT ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_93.png" /> GUADALUPE VALLEY ELEC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_94.png" /> HAMILTON COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_95.png" /> HEART OF TEXAS ELECTRIC COOP<br />\
    <img src="styles/legend/texas_atlas_2_96.png" /> HILCO ELECTRIC COOPERATIVE, INC.<br />\
    <img src="styles/legend/texas_atlas_2_97.png" /> HOUSTON COUNTY ELEC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_98.png" /> J-A-C ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_99.png" /> JACKSON ELECTRIC COOP, INC - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_100.png" /> JASPER-NEWTON ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_101.png" /> KARNES ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_102.png" /> KERRVILLE PUBLIC UTILITY BOARD<br />\
    <img src="styles/legend/texas_atlas_2_103.png" /> KIRBYVILLE LIGHT & POWER CO<br />\
    <img src="styles/legend/texas_atlas_2_104.png" /> LAMAR COUNTY ELEC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_105.png" /> LAMB COUNTY ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_106.png" /> LIGHTHOUSE ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_107.png" /> LYNTEGAR ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_108.png" /> MAGIC VALLEY ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_109.png" /> MEDINA ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_110.png" /> MID-SOUTH ELECTRIC COOP ASSN<br />\
    <img src="styles/legend/texas_atlas_2_111.png" /> NAVARRO COUNTY ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_112.png" /> NAVASOTA VALLEY ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_113.png" /> NORTH PLAINS ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_114.png" /> NUECES ELECTRIC COOPERATIVE<br />\
    <img src="styles/legend/texas_atlas_2_115.png" /> ONCOR ELECTRIC DELIVERY COMPANY LLC<br />\
    <img src="styles/legend/texas_atlas_2_116.png" /> PEDERNALES ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_117.png" /> RIO GRANDE ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_118.png" /> RITA BLANCA ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_119.png" /> RUSK COUNTY ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_120.png" /> SAM HOUSTON ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_121.png" /> SAM RAYBURN MUNICIPAL PWR AGNY<br />\
    <img src="styles/legend/texas_atlas_2_122.png" /> SAN BERNARD ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_123.png" /> SAN PATRICIO ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_124.png" /> SOUTH PLAINS ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_125.png" /> SOUTH TEXAS ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_126.png" /> SOUTHWEST TEXAS ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_127.png" /> SOUTHWESTERN PUBLIC SERVICE CO<br />\
    <img src="styles/legend/texas_atlas_2_128.png" /> SWISHER ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_129.png" /> TAYLOR ELECTRIC COOP INC - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_130.png" /> TEXAS-NEW MEXICO POWER CO<br />\
    <img src="styles/legend/texas_atlas_2_131.png" /> TRI-COUNTY ELECTRIC COOP, INC (TX)<br />\
    <img src="styles/legend/texas_atlas_2_132.png" /> TRINITY VALLEY ELEC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_133.png" /> UNITED ELECTRIC COOP SERVICE INC - (TX)<br />\
    <img src="styles/legend/texas_atlas_2_134.png" /> UPSHUR RURAL ELEC COOP CORP<br />\
    <img src="styles/legend/texas_atlas_2_135.png" /> VICTORIA ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_136.png" /> WEATHERFORD MUN UTILITY SYSTEM<br />\
    <img src="styles/legend/texas_atlas_2_137.png" /> WHARTON COUNTY ELEC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_138.png" /> WISE ELECTRIC COOP INC<br />\
    <img src="styles/legend/texas_atlas_2_139.png" /> WOOD COUNTY ELECTRIC COOP, INC<br />\
    <img src="styles/legend/texas_atlas_2_140.png" /> <br />'
        });
var format_texas_coop_3 = new ol.format.GeoJSON();
var features_texas_coop_3 = format_texas_coop_3.readFeatures(json_texas_coop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_texas_coop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_texas_coop_3.addFeatures(features_texas_coop_3);
var lyr_texas_coop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_texas_coop_3, 
                style: style_texas_coop_3,
                popuplayertitle: "texas_coop",
                interactive: true,
                title: '<img src="styles/legend/texas_coop_3.png" /> texas_coop'
            });
var format_texas_iou_4 = new ol.format.GeoJSON();
var features_texas_iou_4 = format_texas_iou_4.readFeatures(json_texas_iou_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_texas_iou_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_texas_iou_4.addFeatures(features_texas_iou_4);
var lyr_texas_iou_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_texas_iou_4, 
                style: style_texas_iou_4,
                popuplayertitle: "texas_iou",
                interactive: true,
    title: 'texas_iou<br />\
    <img src="styles/legend/texas_iou_4_0.png" /> AEP Texas Inc.<br />\
    <img src="styles/legend/texas_iou_4_1.png" /> CenterPoint Energy Houston Electric, LLC<br />\
    <img src="styles/legend/texas_iou_4_2.png" /> El Paso Electric Company<br />\
    <img src="styles/legend/texas_iou_4_3.png" /> Entergy Texas, Inc.<br />\
    <img src="styles/legend/texas_iou_4_4.png" /> Oncor Electric Delivery Company LLC<br />\
    <img src="styles/legend/texas_iou_4_5.png" /> Southwestern Electric Power Company<br />\
    <img src="styles/legend/texas_iou_4_6.png" /> Southwestern Public Service Company<br />\
    <img src="styles/legend/texas_iou_4_7.png" /> Texas-New Mexico Power Company<br />'
        });
var format_Cali_atlas_5 = new ol.format.GeoJSON();
var features_Cali_atlas_5 = format_Cali_atlas_5.readFeatures(json_Cali_atlas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cali_atlas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cali_atlas_5.addFeatures(features_Cali_atlas_5);
var lyr_Cali_atlas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cali_atlas_5, 
                style: style_Cali_atlas_5,
                popuplayertitle: "Cali_atlas",
                interactive: true,
    title: 'Cali_atlas<br />\
    <img src="styles/legend/Cali_atlas_5_0.png" /> ALAMEDA MUNICIPAL POWER<br />\
    <img src="styles/legend/Cali_atlas_5_1.png" /> ANZA ELECTRIC COOP INC<br />\
    <img src="styles/legend/Cali_atlas_5_2.png" /> BEAR VALLEY ELECTRIC SERVICE<br />\
    <img src="styles/legend/Cali_atlas_5_3.png" /> CENTRAL COAST COMMUNITY ENERGY<br />\
    <img src="styles/legend/Cali_atlas_5_4.png" /> CITY & COUNTY OF SAN FRANCISCO<br />\
    <img src="styles/legend/Cali_atlas_5_5.png" /> CITY OF ANAHEIM - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_6.png" /> CITY OF AZUSA<br />\
    <img src="styles/legend/Cali_atlas_5_7.png" /> CITY OF BANNING - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_8.png" /> CITY OF BIGGS - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_9.png" /> CITY OF BURBANK WATER AND POWER<br />\
    <img src="styles/legend/Cali_atlas_5_10.png" /> CITY OF COLTON - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_11.png" /> CITY OF CORONA - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_12.png" /> CITY OF GLENDALE - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_13.png" /> CITY OF GRIDLEY - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_14.png" /> CITY OF HEALDSBURG - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_15.png" /> CITY OF LODI - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_16.png" /> CITY OF LOMPOC - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_17.png" /> CITY OF MORENO VALLEY - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_18.png" /> CITY OF NEEDLES - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_19.png" /> CITY OF PALO ALTO - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_20.png" /> CITY OF PASADENA - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_21.png" /> CITY OF REDDING - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_22.png" /> CITY OF RIVERSIDE - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_23.png" /> CITY OF ROSEVILLE - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_24.png" /> CITY OF SANTA CLARA - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_25.png" /> CITY OF SHASTA LAKE - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_26.png" /> CITY OF UKIAH - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_27.png" /> CITY OF VERNON<br />\
    <img src="styles/legend/Cali_atlas_5_28.png" /> CITY OF VICTORVILLE - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_29.png" /> IMPERIAL IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_30.png" /> KINGS RIVER CONSERVATION DIST<br />\
    <img src="styles/legend/Cali_atlas_5_31.png" /> LASSEN MUNICIPAL UTILITY DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_32.png" /> LATHROP IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_33.png" /> LIBERTY UTILITIES<br />\
    <img src="styles/legend/Cali_atlas_5_34.png" /> LOS ANGELES DEPARTMENT OF WATER & POWER<br />\
    <img src="styles/legend/Cali_atlas_5_35.png" /> MERCED IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_36.png" /> MODESTO IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_37.png" /> PACIFIC GAS & ELECTRIC CO.<br />\
    <img src="styles/legend/Cali_atlas_5_38.png" /> PACIFIC GAS & ELECTRIC COMPANY AND MODESTO IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_39.png" /> PITTSBURG POWER COMPANY<br />\
    <img src="styles/legend/Cali_atlas_5_40.png" /> PLUMAS-SIERRA RURAL ELEC COOP<br />\
    <img src="styles/legend/Cali_atlas_5_41.png" /> PORT OF OAKLAND<br />\
    <img src="styles/legend/Cali_atlas_5_42.png" /> PORT OF STOCKTON - (CA)<br />\
    <img src="styles/legend/Cali_atlas_5_43.png" /> RANCHO CUCAMONGA MUNICIPAL UTILITY<br />\
    <img src="styles/legend/Cali_atlas_5_44.png" /> SACRAMENTO MUNICIPAL UTIL DIST<br />\
    <img src="styles/legend/Cali_atlas_5_45.png" /> SAN DIEGO GAS & ELECTRIC CO<br />\
    <img src="styles/legend/Cali_atlas_5_46.png" /> SHELTER COVE RESORT IMPROVEMENT DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_47.png" /> SOUTHERN CALIFORNIA EDISON CO<br />\
    <img src="styles/legend/Cali_atlas_5_48.png" /> SURPRISE VALLEY ELECTRIFICATION<br />\
    <img src="styles/legend/Cali_atlas_5_49.png" /> TRINITY PUBLIC UTILITIES DIST<br />\
    <img src="styles/legend/Cali_atlas_5_50.png" /> TRUCKEE DONNER P U D<br />\
    <img src="styles/legend/Cali_atlas_5_51.png" /> TUOLUMNE COUNTY PUB POWER AGNY<br />\
    <img src="styles/legend/Cali_atlas_5_52.png" /> TURLOCK IRRIGATION DISTRICT<br />\
    <img src="styles/legend/Cali_atlas_5_53.png" /> <br />'
        });
var format_cali_substations_6 = new ol.format.GeoJSON();
var features_cali_substations_6 = format_cali_substations_6.readFeatures(json_cali_substations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cali_substations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cali_substations_6.addFeatures(features_cali_substations_6);
var lyr_cali_substations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cali_substations_6, 
                style: style_cali_substations_6,
                popuplayertitle: "cali_substations",
                interactive: true,
    title: 'cali_substations<br />\
    <img src="styles/legend/cali_substations_6_0.png" /> IID<br />\
    <img src="styles/legend/cali_substations_6_1.png" /> LADWP<br />\
    <img src="styles/legend/cali_substations_6_2.png" /> Other<br />\
    <img src="styles/legend/cali_substations_6_3.png" /> PCORP<br />\
    <img src="styles/legend/cali_substations_6_4.png" /> PG&E<br />\
    <img src="styles/legend/cali_substations_6_5.png" /> SCE<br />\
    <img src="styles/legend/cali_substations_6_6.png" /> SDG&E<br />\
    <img src="styles/legend/cali_substations_6_7.png" /> SMUD<br />\
    <img src="styles/legend/cali_substations_6_8.png" /> WAPA<br />\
    <img src="styles/legend/cali_substations_6_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_googlesat_1.setVisible(false);lyr_texas_atlas_2.setVisible(true);lyr_texas_coop_3.setVisible(true);lyr_texas_iou_4.setVisible(true);lyr_Cali_atlas_5.setVisible(true);lyr_cali_substations_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googlesat_1,lyr_texas_atlas_2,lyr_texas_coop_3,lyr_texas_iou_4,lyr_Cali_atlas_5,lyr_cali_substations_6];
lyr_texas_atlas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'WEBSITE': 'WEBSITE', 'REGULATED': 'REGULATED', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', 'SUMMR_PEAK': 'SUMMR_PEAK', 'WINTR_PEAK': 'WINTR_PEAK', 'SUMMER_CAP': 'SUMMER_CAP', 'WINTER_CAP': 'WINTER_CAP', 'NET_GEN': 'NET_GEN', 'PURCHASED': 'PURCHASED', 'NET_EX': 'NET_EX', 'RETAIL_MWH': 'RETAIL_MWH', 'WSALE_MWH': 'WSALE_MWH', 'TOTAL_MWH': 'TOTAL_MWH', 'TRANS_MWH': 'TRANS_MWH', 'CUSTOMERS': 'CUSTOMERS', 'YEAR': 'YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_texas_coop_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMPANY_NAME': 'COMPANY_NAME', 'COMPANY_ABBREVIATION': 'COMPANY_ABBREVIATION', 'COMPANY_TYPE': 'COMPANY_TYPE', 'COMPANY_WEBSITE': 'COMPANY_WEBSITE', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': 'COMPANY_ELECTRIC_OUTAGES_MAPLIN', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': 'COMPANY_ENERGY_EFFICIENCY_WEBSI', 'MAIN_PHONE': 'MAIN_PHONE', 'OUTAGE_PHONE1': 'OUTAGE_PHONE1', 'OUTAGE_PHONE2': 'OUTAGE_PHONE2', 'GENERATION_TRANSMISSION_COOPERA': 'GENERATION_TRANSMISSION_COOPERA', 'DATA_SOURCE': 'DATA_SOURCE', 'DATA_SOURCE_DATE': 'DATA_SOURCE_DATE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_texas_iou_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMPANY_NAME': 'Company Name', 'COMPANY_ABBREVIATION': 'Company Abbreviation', 'COMPANY_TYPE': 'Company Type', 'COMPANY_WEBSITE': 'Company Website', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': 'Company Electric Outages Maplink', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': 'Company Energy Efficiency Website', 'MAIN_PHONE': 'Main Phone', 'OUTAGE_PHONE1': 'Outage Phone1', 'OUTAGE_PHONE2': 'Outage Phone2', 'DATA_SOURCE': 'Data Source', 'DATA_SOURCE_DATE': 'Data Source Date', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Cali_atlas_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'WEBSITE': 'WEBSITE', 'REGULATED': 'REGULATED', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', 'SUMMR_PEAK': 'SUMMR_PEAK', 'WINTR_PEAK': 'WINTR_PEAK', 'SUMMER_CAP': 'SUMMER_CAP', 'WINTER_CAP': 'WINTER_CAP', 'NET_GEN': 'NET_GEN', 'PURCHASED': 'PURCHASED', 'NET_EX': 'NET_EX', 'RETAIL_MWH': 'RETAIL_MWH', 'WSALE_MWH': 'WSALE_MWH', 'TOTAL_MWH': 'TOTAL_MWH', 'TRANS_MWH': 'TRANS_MWH', 'CUSTOMERS': 'CUSTOMERS', 'YEAR': 'YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_cali_substations_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Substation_ID': 'Substation ID', 'Substation_Name': 'Substation Name', 'Alias': 'Alias', 'Status': 'Status', 'Owner': 'Owner', 'Map_Owner': 'Map Owner', 'Map_Part': 'Map Part', 'Engineering_ID': 'Engineering ID', 'kV_12_TO_32': '12kV T 32kV', 'kV_33_TO_92': '33kV To 92kV', 'kV_110_TO_161': '110kV To 161kV', 'kV_220_To_287': '220kV To 287kV', 'kV_345_To_500': '345kV To 500kV', 'kV_500_DC': '500 kV DC', 'Highest_kV': 'Highest_kV', 'Postal_City': 'Postal City', 'County': 'County', 'Zip_Code': 'Zip Code', 'State': 'State', 'Comments': 'Comments', });
lyr_texas_atlas_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'WEBSITE': 'TextEdit', 'REGULATED': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', 'SUMMR_PEAK': 'TextEdit', 'WINTR_PEAK': 'TextEdit', 'SUMMER_CAP': 'TextEdit', 'WINTER_CAP': 'TextEdit', 'NET_GEN': 'Range', 'PURCHASED': 'Range', 'NET_EX': 'Range', 'RETAIL_MWH': 'Range', 'WSALE_MWH': 'Range', 'TOTAL_MWH': 'Range', 'TRANS_MWH': 'Range', 'CUSTOMERS': 'Range', 'YEAR': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_texas_coop_3.set('fieldImages', {'OBJECTID': '', 'COMPANY_NAME': '', 'COMPANY_ABBREVIATION': '', 'COMPANY_TYPE': '', 'COMPANY_WEBSITE': '', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': '', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': '', 'MAIN_PHONE': '', 'OUTAGE_PHONE1': '', 'OUTAGE_PHONE2': '', 'GENERATION_TRANSMISSION_COOPERA': '', 'DATA_SOURCE': '', 'DATA_SOURCE_DATE': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_texas_iou_4.set('fieldImages', {'OBJECTID': '', 'COMPANY_NAME': '', 'COMPANY_ABBREVIATION': '', 'COMPANY_TYPE': '', 'COMPANY_WEBSITE': '', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': '', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': '', 'MAIN_PHONE': '', 'OUTAGE_PHONE1': '', 'OUTAGE_PHONE2': '', 'DATA_SOURCE': '', 'DATA_SOURCE_DATE': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_Cali_atlas_5.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'WEBSITE': 'TextEdit', 'REGULATED': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', 'SUMMR_PEAK': 'TextEdit', 'WINTR_PEAK': 'TextEdit', 'SUMMER_CAP': 'TextEdit', 'WINTER_CAP': 'TextEdit', 'NET_GEN': 'Range', 'PURCHASED': 'Range', 'NET_EX': 'Range', 'RETAIL_MWH': 'Range', 'WSALE_MWH': 'Range', 'TOTAL_MWH': 'Range', 'TRANS_MWH': 'Range', 'CUSTOMERS': 'Range', 'YEAR': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_cali_substations_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Substation_ID': 'TextEdit', 'Substation_Name': 'TextEdit', 'Alias': 'TextEdit', 'Status': 'TextEdit', 'Owner': 'TextEdit', 'Map_Owner': 'TextEdit', 'Map_Part': 'TextEdit', 'Engineering_ID': 'TextEdit', 'kV_12_TO_32': 'TextEdit', 'kV_33_TO_92': 'TextEdit', 'kV_110_TO_161': 'TextEdit', 'kV_220_To_287': 'TextEdit', 'kV_345_To_500': 'TextEdit', 'kV_500_DC': 'TextEdit', 'Highest_kV': 'TextEdit', 'Postal_City': 'TextEdit', 'County': 'TextEdit', 'Zip_Code': 'TextEdit', 'State': 'TextEdit', 'Comments': 'TextEdit', });
lyr_texas_atlas_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'WEBSITE': 'no label', 'REGULATED': 'no label', 'CNTRL_AREA': 'no label', 'PLAN_AREA': 'no label', 'HOLDING_CO': 'no label', 'SUMMR_PEAK': 'no label', 'WINTR_PEAK': 'no label', 'SUMMER_CAP': 'no label', 'WINTER_CAP': 'no label', 'NET_GEN': 'no label', 'PURCHASED': 'no label', 'NET_EX': 'no label', 'RETAIL_MWH': 'no label', 'WSALE_MWH': 'no label', 'TOTAL_MWH': 'no label', 'TRANS_MWH': 'no label', 'CUSTOMERS': 'no label', 'YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_texas_coop_3.set('fieldLabels', {'OBJECTID': 'no label', 'COMPANY_NAME': 'no label', 'COMPANY_ABBREVIATION': 'no label', 'COMPANY_TYPE': 'no label', 'COMPANY_WEBSITE': 'no label', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': 'no label', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': 'no label', 'MAIN_PHONE': 'no label', 'OUTAGE_PHONE1': 'no label', 'OUTAGE_PHONE2': 'no label', 'GENERATION_TRANSMISSION_COOPERA': 'no label', 'DATA_SOURCE': 'no label', 'DATA_SOURCE_DATE': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_texas_iou_4.set('fieldLabels', {'OBJECTID': 'no label', 'COMPANY_NAME': 'no label', 'COMPANY_ABBREVIATION': 'no label', 'COMPANY_TYPE': 'no label', 'COMPANY_WEBSITE': 'no label', 'COMPANY_ELECTRIC_OUTAGES_MAPLIN': 'no label', 'COMPANY_ENERGY_EFFICIENCY_WEBSI': 'no label', 'MAIN_PHONE': 'no label', 'OUTAGE_PHONE1': 'no label', 'OUTAGE_PHONE2': 'no label', 'DATA_SOURCE': 'no label', 'DATA_SOURCE_DATE': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_Cali_atlas_5.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'WEBSITE': 'no label', 'REGULATED': 'no label', 'CNTRL_AREA': 'no label', 'PLAN_AREA': 'no label', 'HOLDING_CO': 'no label', 'SUMMR_PEAK': 'no label', 'WINTR_PEAK': 'no label', 'SUMMER_CAP': 'no label', 'WINTER_CAP': 'no label', 'NET_GEN': 'no label', 'PURCHASED': 'no label', 'NET_EX': 'no label', 'RETAIL_MWH': 'no label', 'WSALE_MWH': 'no label', 'TOTAL_MWH': 'no label', 'TRANS_MWH': 'no label', 'CUSTOMERS': 'no label', 'YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_cali_substations_6.set('fieldLabels', {'OBJECTID': 'no label', 'Substation_ID': 'no label', 'Substation_Name': 'no label', 'Alias': 'no label', 'Status': 'no label', 'Owner': 'no label', 'Map_Owner': 'no label', 'Map_Part': 'no label', 'Engineering_ID': 'no label', 'kV_12_TO_32': 'no label', 'kV_33_TO_92': 'no label', 'kV_110_TO_161': 'no label', 'kV_220_To_287': 'no label', 'kV_345_To_500': 'no label', 'kV_500_DC': 'no label', 'Highest_kV': 'no label', 'Postal_City': 'no label', 'County': 'no label', 'Zip_Code': 'no label', 'State': 'no label', 'Comments': 'no label', });
lyr_cali_substations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});