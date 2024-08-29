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
var format_Controlled_Parking_Zones_edinbourgh_1 = new ol.format.GeoJSON();
var features_Controlled_Parking_Zones_edinbourgh_1 = format_Controlled_Parking_Zones_edinbourgh_1.readFeatures(json_Controlled_Parking_Zones_edinbourgh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Controlled_Parking_Zones_edinbourgh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Controlled_Parking_Zones_edinbourgh_1.addFeatures(features_Controlled_Parking_Zones_edinbourgh_1);
var lyr_Controlled_Parking_Zones_edinbourgh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Controlled_Parking_Zones_edinbourgh_1, 
                style: style_Controlled_Parking_Zones_edinbourgh_1,
                popuplayertitle: "Controlled_Parking_Zones_edinbourgh ",
                interactive: true,
                title: '<img src="styles/legend/Controlled_Parking_Zones_edinbourgh_1.png" /> Controlled_Parking_Zones_edinbourgh '
            });
var format_treepreservationzone_2 = new ol.format.GeoJSON();
var features_treepreservationzone_2 = format_treepreservationzone_2.readFeatures(json_treepreservationzone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_treepreservationzone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_treepreservationzone_2.addFeatures(features_treepreservationzone_2);
var lyr_treepreservationzone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_treepreservationzone_2, 
                style: style_treepreservationzone_2,
                popuplayertitle: "tree-preservation-zone",
                interactive: true,
                title: '<img src="styles/legend/treepreservationzone_2.png" /> tree-preservation-zone'
            });
var format_CamdenParkingbays_3 = new ol.format.GeoJSON();
var features_CamdenParkingbays_3 = format_CamdenParkingbays_3.readFeatures(json_CamdenParkingbays_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CamdenParkingbays_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CamdenParkingbays_3.addFeatures(features_CamdenParkingbays_3);
var lyr_CamdenParkingbays_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CamdenParkingbays_3, 
                style: style_CamdenParkingbays_3,
                popuplayertitle: "Camden - Parking bays",
                interactive: true,
                title: '<img src="styles/legend/CamdenParkingbays_3.png" /> Camden - Parking bays'
            });
var lyr_LambethControlledParkingZonesonlywms_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gis.lambeth.gov.uk/arcgis/services/LambethControlledParkingZones/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lambeth - Controlled Parking Zones (only wms)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LambethControlledParkingZonesonlywms_4, 1]);

lyr_googlesat_0.setVisible(true);lyr_Controlled_Parking_Zones_edinbourgh_1.setVisible(true);lyr_treepreservationzone_2.setVisible(true);lyr_CamdenParkingbays_3.setVisible(true);lyr_LambethControlledParkingZonesonlywms_4.setVisible(true);
var layersList = [lyr_googlesat_0,lyr_Controlled_Parking_Zones_edinbourgh_1,lyr_treepreservationzone_2,lyr_CamdenParkingbays_3,lyr_LambethControlledParkingZonesonlywms_4];
lyr_Controlled_Parking_Zones_edinbourgh_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cacz_ref_n': 'cacz_ref_n', 'date_last_': 'date_last_', 'no_osp_spa': 'no_osp_spa', 'no_pnr_spa': 'no_pnr_spa', 'no_pub_spa': 'no_pub_spa', 'no_res_spa': 'no_res_spa', 'Zone_No': 'Zone_No', 'Type': 'Type', 'Shapearea': 'Shapearea', 'Shapelen': 'Shapelen', });
lyr_treepreservationzone_2.set('fieldAliases', {'feature_id': 'feature_id', 'reference': 'reference', 'name': 'name', 'tree_preservation_order': 'tree_preservation_order', 'tree_preservation_zone_type': 'tree_preservation_zone_type', 'uprn': 'uprn', 'address_text': 'address_text', 'notes': 'notes', 'start_date': 'start_date', 'end_date': 'end_date', 'entry_date': 'entry_date', });
lyr_CamdenParkingbays_3.set('fieldAliases', {'Restriction Type': 'Restriction Type', 'Parking Spaces': 'Parking Spaces', 'Times Of Operation': 'Times Of Operation', 'Maximum Stay': 'Maximum Stay', 'Tariff': 'Tariff', 'Cashless Identifier': 'Cashless Identifier', 'Nearest Machine': 'Nearest Machine', 'Road Name': 'Road Name', 'Postcode': 'Postcode', 'Controlled Parking Zone': 'Controlled Parking Zone', 'Valid Parking Permits': 'Valid Parking Permits', 'Parking Bay Length Metres': 'Parking Bay Length Metres', 'Disclaimer': 'Disclaimer', 'Easting': 'Easting', 'Northing': 'Northing', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'EPSG:4326 Well Known Text Geometry': 'EPSG:4326 Well Known Text Geometry', 'EPSG:27700 GeoJSON Geometry': 'EPSG:27700 GeoJSON Geometry', 'EPSG:4326 GeoJSON Geometry': 'EPSG:4326 GeoJSON Geometry', 'Unique Identifier': 'Unique Identifier', 'Spatial Accuracy': 'Spatial Accuracy', 'Last Uploaded': 'Last Uploaded', 'Location': 'Location', 'Organisation URI': 'Organisation URI', });
lyr_Controlled_Parking_Zones_edinbourgh_1.set('fieldImages', {'OBJECTID': 'Range', 'cacz_ref_n': 'TextEdit', 'date_last_': 'TextEdit', 'no_osp_spa': 'Range', 'no_pnr_spa': 'Range', 'no_pub_spa': 'Range', 'no_res_spa': 'Range', 'Zone_No': 'TextEdit', 'Type': 'TextEdit', 'Shapearea': 'TextEdit', 'Shapelen': 'TextEdit', });
lyr_treepreservationzone_2.set('fieldImages', {'feature_id': 'TextEdit', 'reference': 'TextEdit', 'name': 'TextEdit', 'tree_preservation_order': 'TextEdit', 'tree_preservation_zone_type': 'TextEdit', 'uprn': 'Range', 'address_text': 'TextEdit', 'notes': 'TextEdit', 'start_date': 'DateTime', 'end_date': 'DateTime', 'entry_date': 'DateTime', });
lyr_CamdenParkingbays_3.set('fieldImages', {'Restriction Type': 'TextEdit', 'Parking Spaces': 'TextEdit', 'Times Of Operation': 'TextEdit', 'Maximum Stay': 'TextEdit', 'Tariff': 'TextEdit', 'Cashless Identifier': 'TextEdit', 'Nearest Machine': 'TextEdit', 'Road Name': 'TextEdit', 'Postcode': 'TextEdit', 'Controlled Parking Zone': 'TextEdit', 'Valid Parking Permits': 'TextEdit', 'Parking Bay Length Metres': 'TextEdit', 'Disclaimer': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'EPSG:4326 Well Known Text Geometry': 'TextEdit', 'EPSG:27700 GeoJSON Geometry': 'TextEdit', 'EPSG:4326 GeoJSON Geometry': 'TextEdit', 'Unique Identifier': 'TextEdit', 'Spatial Accuracy': 'TextEdit', 'Last Uploaded': 'TextEdit', 'Location': 'TextEdit', 'Organisation URI': 'TextEdit', });
lyr_Controlled_Parking_Zones_edinbourgh_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'cacz_ref_n': 'inline label - always visible', 'date_last_': 'inline label - always visible', 'no_osp_spa': 'inline label - always visible', 'no_pnr_spa': 'inline label - always visible', 'no_pub_spa': 'inline label - always visible', 'no_res_spa': 'inline label - always visible', 'Zone_No': 'inline label - always visible', 'Type': 'inline label - always visible', 'Shapearea': 'inline label - always visible', 'Shapelen': 'inline label - always visible', });
lyr_treepreservationzone_2.set('fieldLabels', {'feature_id': 'inline label - always visible', 'reference': 'inline label - always visible', 'name': 'inline label - always visible', 'tree_preservation_order': 'inline label - always visible', 'tree_preservation_zone_type': 'inline label - always visible', 'uprn': 'inline label - always visible', 'address_text': 'inline label - always visible', 'notes': 'inline label - always visible', 'start_date': 'inline label - always visible', 'end_date': 'inline label - always visible', 'entry_date': 'inline label - always visible', });
lyr_CamdenParkingbays_3.set('fieldLabels', {'Restriction Type': 'inline label - always visible', 'Parking Spaces': 'inline label - always visible', 'Times Of Operation': 'inline label - always visible', 'Maximum Stay': 'inline label - always visible', 'Tariff': 'inline label - always visible', 'Cashless Identifier': 'inline label - always visible', 'Nearest Machine': 'inline label - always visible', 'Road Name': 'inline label - always visible', 'Postcode': 'inline label - always visible', 'Controlled Parking Zone': 'inline label - always visible', 'Valid Parking Permits': 'inline label - always visible', 'Parking Bay Length Metres': 'inline label - always visible', 'Disclaimer': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'EPSG:4326 Well Known Text Geometry': 'inline label - always visible', 'EPSG:27700 GeoJSON Geometry': 'inline label - always visible', 'EPSG:4326 GeoJSON Geometry': 'inline label - always visible', 'Unique Identifier': 'inline label - always visible', 'Spatial Accuracy': 'inline label - always visible', 'Last Uploaded': 'inline label - always visible', 'Location': 'inline label - always visible', 'Organisation URI': 'inline label - always visible', });
lyr_CamdenParkingbays_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});