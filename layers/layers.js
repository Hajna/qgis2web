var wms_layers = [];


        var lyr_googlesat_0 = new ol.layer.Tile({
            'title': 'google sat',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_landownershipny_1 = new ol.format.GeoJSON();
var features_landownershipny_1 = format_landownershipny_1.readFeatures(json_landownershipny_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landownershipny_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landownershipny_1.addFeatures(features_landownershipny_1);
var lyr_landownershipny_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landownershipny_1, 
                style: style_landownershipny_1,
                popuplayertitle: "land ownership ny",
                interactive: true,
    title: 'land ownership ny<br />\
    <img src="styles/legend/landownershipny_1_0.png" /> -999<br />\
    <img src="styles/legend/landownershipny_1_1.png" /> 1<br />\
    <img src="styles/legend/landownershipny_1_2.png" /> 10<br />\
    <img src="styles/legend/landownershipny_1_3.png" /> 11<br />\
    <img src="styles/legend/landownershipny_1_4.png" /> 2<br />\
    <img src="styles/legend/landownershipny_1_5.png" /> 3<br />\
    <img src="styles/legend/landownershipny_1_6.png" /> 4<br />\
    <img src="styles/legend/landownershipny_1_7.png" /> 5<br />\
    <img src="styles/legend/landownershipny_1_8.png" /> 6<br />\
    <img src="styles/legend/landownershipny_1_9.png" /> 7<br />\
    <img src="styles/legend/landownershipny_1_10.png" /> 8<br />\
    <img src="styles/legend/landownershipny_1_11.png" /> 9<br />\
    <img src="styles/legend/landownershipny_1_12.png" /> <br />'
        });

lyr_googlesat_0.setVisible(true);lyr_landownershipny_1.setVisible(true);
var layersList = [lyr_googlesat_0,lyr_landownershipny_1];
lyr_landownershipny_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY_NAME': 'COUNTY_NAME', 'MUNI_NAME': 'MUNI_NAME', 'SWIS': 'SWIS', 'PARCEL_ADDR': 'PARCEL_ADDR', 'PRINT_KEY': 'PRINT_KEY', 'SBL': 'SBL', 'CITYTOWN_NAME': 'CITYTOWN_NAME', 'CITYTOWN_SWIS': 'CITYTOWN_SWIS', 'LOC_ST_NBR': 'LOC_ST_NBR', 'LOC_STREET': 'LOC_STREET', 'LOC_UNIT': 'LOC_UNIT', 'LOC_ZIP': 'LOC_ZIP', 'PROP_CLASS': 'PROP_CLASS', 'ROLL_SECTION': 'ROLL_SECTION', 'LAND_AV': 'LAND_AV', 'TOTAL_AV': 'TOTAL_AV', 'FULL_MARKET_VAL': 'FULL_MARKET_VAL', 'YR_BLT': 'YR_BLT', 'FRONT': 'FRONT', 'DEPTH': 'DEPTH', 'SQ_FT': 'SQ_FT', 'ACRES': 'ACRES', 'SCHOOL_CODE': 'SCHOOL_CODE', 'SCHOOL_NAME': 'SCHOOL_NAME', 'SEWER_TYPE': 'SEWER_TYPE', 'SEWER_DESC': 'SEWER_DESC', 'WATER_SUPPLY': 'WATER_SUPPLY', 'WATER_DESC': 'WATER_DESC', 'UTILITIES': 'UTILITIES', 'UTILITIES_DESC': 'UTILITIES_DESC', 'BLDG_STYLE': 'BLDG_STYLE', 'BLDG_STYLE_DESC': 'BLDG_STYLE_DESC', 'HEAT_TYPE': 'HEAT_TYPE', 'HEAT_TYPE_DESC': 'HEAT_TYPE_DESC', 'FUEL_TYPE': 'FUEL_TYPE', 'FUEL_TYPE_DESC': 'FUEL_TYPE_DESC', 'SQFT_LIVING': 'SQFT_LIVING', 'GFA': 'GFA', 'NBR_KITCHENS': 'NBR_KITCHENS', 'NBR_FULL_BATHS': 'NBR_FULL_BATHS', 'NBR_BEDROOMS': 'NBR_BEDROOMS', 'USED_AS_CODE': 'USED_AS_CODE', 'USED_AS_DESC': 'USED_AS_DESC', 'AG_DIST_CODE': 'AG_DIST_CODE', 'AG_DIST_NAME': 'AG_DIST_NAME', 'PRIMARY_OWNER': 'PRIMARY_OWNER', 'MAIL_ADDR': 'MAIL_ADDR', 'PO_BOX': 'PO_BOX', 'MAIL_CITY': 'MAIL_CITY', 'MAIL_STATE': 'MAIL_STATE', 'MAIL_ZIP': 'MAIL_ZIP', 'ADD_OWNER': 'ADD_OWNER', 'ADD_MAIL_ADDR': 'ADD_MAIL_ADDR', 'ADD_MAIL_PO_BOX': 'ADD_MAIL_PO_BOX', 'ADD_MAIL_CITY': 'ADD_MAIL_CITY', 'ADD_MAIL_STATE': 'ADD_MAIL_STATE', 'ADD_MAIL_ZIP': 'ADD_MAIL_ZIP', 'BOOK': 'BOOK', 'PAGE': 'PAGE', 'GRID_EAST': 'GRID_EAST', 'GRID_NORTH': 'GRID_NORTH', 'MUNI_PARCEL_ID': 'MUNI_PARCEL_ID', 'SWIS_SBL_ID': 'SWIS_SBL_ID', 'SWIS_PRINT_KEY_ID': 'SWIS_PRINT_KEY_ID', 'ROLL_YR': 'ROLL_YR', 'SPATIAL_YR': 'SPATIAL_YR', 'OWNER_TYPE': 'OWNER_TYPE', 'NYS_NAME': 'NYS_NAME', 'NYS_NAME_SOURCE': 'NYS_NAME_SOURCE', 'DUP_GEO': 'DUP_GEO', 'CALC_ACRES': 'CALC_ACRES', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_landownershipny_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COUNTY_NAME': 'TextEdit', 'MUNI_NAME': 'TextEdit', 'SWIS': 'TextEdit', 'PARCEL_ADDR': 'TextEdit', 'PRINT_KEY': 'TextEdit', 'SBL': 'TextEdit', 'CITYTOWN_NAME': 'TextEdit', 'CITYTOWN_SWIS': 'TextEdit', 'LOC_ST_NBR': 'TextEdit', 'LOC_STREET': 'TextEdit', 'LOC_UNIT': 'TextEdit', 'LOC_ZIP': 'TextEdit', 'PROP_CLASS': 'TextEdit', 'ROLL_SECTION': 'TextEdit', 'LAND_AV': 'TextEdit', 'TOTAL_AV': 'TextEdit', 'FULL_MARKET_VAL': 'TextEdit', 'YR_BLT': 'Range', 'FRONT': 'Range', 'DEPTH': 'Range', 'SQ_FT': 'TextEdit', 'ACRES': 'TextEdit', 'SCHOOL_CODE': 'TextEdit', 'SCHOOL_NAME': 'TextEdit', 'SEWER_TYPE': 'TextEdit', 'SEWER_DESC': 'TextEdit', 'WATER_SUPPLY': 'TextEdit', 'WATER_DESC': 'TextEdit', 'UTILITIES': 'TextEdit', 'UTILITIES_DESC': 'TextEdit', 'BLDG_STYLE': 'TextEdit', 'BLDG_STYLE_DESC': 'TextEdit', 'HEAT_TYPE': 'TextEdit', 'HEAT_TYPE_DESC': 'TextEdit', 'FUEL_TYPE': 'TextEdit', 'FUEL_TYPE_DESC': 'TextEdit', 'SQFT_LIVING': 'TextEdit', 'GFA': 'Range', 'NBR_KITCHENS': 'Range', 'NBR_FULL_BATHS': 'Range', 'NBR_BEDROOMS': 'Range', 'USED_AS_CODE': 'TextEdit', 'USED_AS_DESC': 'TextEdit', 'AG_DIST_CODE': 'TextEdit', 'AG_DIST_NAME': 'TextEdit', 'PRIMARY_OWNER': 'TextEdit', 'MAIL_ADDR': 'TextEdit', 'PO_BOX': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'ADD_OWNER': 'TextEdit', 'ADD_MAIL_ADDR': 'TextEdit', 'ADD_MAIL_PO_BOX': 'TextEdit', 'ADD_MAIL_CITY': 'TextEdit', 'ADD_MAIL_STATE': 'TextEdit', 'ADD_MAIL_ZIP': 'TextEdit', 'BOOK': 'Range', 'PAGE': 'Range', 'GRID_EAST': 'TextEdit', 'GRID_NORTH': 'TextEdit', 'MUNI_PARCEL_ID': 'TextEdit', 'SWIS_SBL_ID': 'TextEdit', 'SWIS_PRINT_KEY_ID': 'TextEdit', 'ROLL_YR': 'Range', 'SPATIAL_YR': 'Range', 'OWNER_TYPE': 'TextEdit', 'NYS_NAME': 'TextEdit', 'NYS_NAME_SOURCE': 'TextEdit', 'DUP_GEO': 'TextEdit', 'CALC_ACRES': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_landownershipny_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'COUNTY_NAME': 'inline label - visible with data', 'MUNI_NAME': 'inline label - visible with data', 'SWIS': 'inline label - visible with data', 'PARCEL_ADDR': 'inline label - visible with data', 'PRINT_KEY': 'inline label - visible with data', 'SBL': 'inline label - visible with data', 'CITYTOWN_NAME': 'inline label - visible with data', 'CITYTOWN_SWIS': 'inline label - visible with data', 'LOC_ST_NBR': 'inline label - visible with data', 'LOC_STREET': 'inline label - visible with data', 'LOC_UNIT': 'inline label - visible with data', 'LOC_ZIP': 'inline label - visible with data', 'PROP_CLASS': 'inline label - visible with data', 'ROLL_SECTION': 'inline label - visible with data', 'LAND_AV': 'inline label - visible with data', 'TOTAL_AV': 'inline label - visible with data', 'FULL_MARKET_VAL': 'inline label - visible with data', 'YR_BLT': 'inline label - visible with data', 'FRONT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'SQ_FT': 'inline label - visible with data', 'ACRES': 'inline label - visible with data', 'SCHOOL_CODE': 'inline label - visible with data', 'SCHOOL_NAME': 'inline label - visible with data', 'SEWER_TYPE': 'inline label - visible with data', 'SEWER_DESC': 'inline label - visible with data', 'WATER_SUPPLY': 'inline label - visible with data', 'WATER_DESC': 'inline label - visible with data', 'UTILITIES': 'inline label - visible with data', 'UTILITIES_DESC': 'inline label - visible with data', 'BLDG_STYLE': 'inline label - visible with data', 'BLDG_STYLE_DESC': 'inline label - visible with data', 'HEAT_TYPE': 'inline label - visible with data', 'HEAT_TYPE_DESC': 'inline label - visible with data', 'FUEL_TYPE': 'inline label - visible with data', 'FUEL_TYPE_DESC': 'inline label - visible with data', 'SQFT_LIVING': 'inline label - visible with data', 'GFA': 'inline label - visible with data', 'NBR_KITCHENS': 'inline label - visible with data', 'NBR_FULL_BATHS': 'inline label - visible with data', 'NBR_BEDROOMS': 'inline label - visible with data', 'USED_AS_CODE': 'inline label - visible with data', 'USED_AS_DESC': 'inline label - visible with data', 'AG_DIST_CODE': 'inline label - visible with data', 'AG_DIST_NAME': 'inline label - visible with data', 'PRIMARY_OWNER': 'inline label - visible with data', 'MAIL_ADDR': 'inline label - visible with data', 'PO_BOX': 'inline label - visible with data', 'MAIL_CITY': 'inline label - visible with data', 'MAIL_STATE': 'inline label - visible with data', 'MAIL_ZIP': 'inline label - visible with data', 'ADD_OWNER': 'inline label - visible with data', 'ADD_MAIL_ADDR': 'inline label - visible with data', 'ADD_MAIL_PO_BOX': 'inline label - visible with data', 'ADD_MAIL_CITY': 'inline label - visible with data', 'ADD_MAIL_STATE': 'inline label - visible with data', 'ADD_MAIL_ZIP': 'inline label - visible with data', 'BOOK': 'inline label - visible with data', 'PAGE': 'inline label - visible with data', 'GRID_EAST': 'inline label - visible with data', 'GRID_NORTH': 'inline label - visible with data', 'MUNI_PARCEL_ID': 'inline label - visible with data', 'SWIS_SBL_ID': 'inline label - visible with data', 'SWIS_PRINT_KEY_ID': 'inline label - visible with data', 'ROLL_YR': 'inline label - visible with data', 'SPATIAL_YR': 'inline label - visible with data', 'OWNER_TYPE': 'inline label - visible with data', 'NYS_NAME': 'inline label - visible with data', 'NYS_NAME_SOURCE': 'inline label - visible with data', 'DUP_GEO': 'inline label - visible with data', 'CALC_ACRES': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_landownershipny_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});