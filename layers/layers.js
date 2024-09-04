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
var format_landuse_1 = new ol.format.GeoJSON();
var features_landuse_1 = format_landuse_1.readFeatures(json_landuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_1.addFeatures(features_landuse_1);
var lyr_landuse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_1, 
                style: style_landuse_1,
                popuplayertitle: "land use",
                interactive: true,
    title: 'land use<br />\
    <img src="styles/legend/landuse_1_0.png" /> Abattoir<br />\
    <img src="styles/legend/landuse_1_1.png" /> Airfield<br />\
    <img src="styles/legend/landuse_1_2.png" /> Airport With Scheduled Services<br />\
    <img src="styles/legend/landuse_1_3.png" /> Allotments<br />\
    <img src="styles/legend/landuse_1_4.png" /> Ambulance Station<br />\
    <img src="styles/legend/landuse_1_5.png" /> Amenity And Open Space Site<br />\
    <img src="styles/legend/landuse_1_6.png" /> Amusement And Show Place Site<br />\
    <img src="styles/legend/landuse_1_7.png" /> Amusement Park<br />\
    <img src="styles/legend/landuse_1_8.png" /> Animal Treatment Site<br />\
    <img src="styles/legend/landuse_1_9.png" /> Animal Welfare Site<br />\
    <img src="styles/legend/landuse_1_10.png" /> Aquatic Animal Attraction<br />\
    <img src="styles/legend/landuse_1_11.png" /> Art Gallery<br />\
    <img src="styles/legend/landuse_1_12.png" /> Art Gallery And Library And Museum<br />\
    <img src="styles/legend/landuse_1_13.png" /> Arts Centre<br />\
    <img src="styles/legend/landuse_1_14.png" /> Athletics Ground<br />\
    <img src="styles/legend/landuse_1_15.png" /> Attraction Or Leisure Site<br />\
    <img src="styles/legend/landuse_1_16.png" /> Balancing Pond<br />\
    <img src="styles/legend/landuse_1_17.png" /> Biogas Power Station<br />\
    <img src="styles/legend/landuse_1_18.png" /> Boat Maintenance Or Storage Site<br />\
    <img src="styles/legend/landuse_1_19.png" /> Boating Site<br />\
    <img src="styles/legend/landuse_1_20.png" /> Botanical Garden<br />\
    <img src="styles/legend/landuse_1_21.png" /> Bowls Site<br />\
    <img src="styles/legend/landuse_1_22.png" /> Brewery<br />\
    <img src="styles/legend/landuse_1_23.png" /> Bus Depot<br />\
    <img src="styles/legend/landuse_1_24.png" /> Bus Station<br />\
    <img src="styles/legend/landuse_1_25.png" /> Business Or Industrial Park<br />\
    <img src="styles/legend/landuse_1_26.png" /> Camping And Caravanning Site<br />\
    <img src="styles/legend/landuse_1_27.png" /> Car Cleaning Site<br />\
    <img src="styles/legend/landuse_1_28.png" /> Caravan Site<br />\
    <img src="styles/legend/landuse_1_29.png" /> Cathedral<br />\
    <img src="styles/legend/landuse_1_30.png" /> Cattery<br />\
    <img src="styles/legend/landuse_1_31.png" /> Cattery And Kennels<br />\
    <img src="styles/legend/landuse_1_32.png" /> Cemetery<br />\
    <img src="styles/legend/landuse_1_33.png" /> Central Government Services<br />\
    <img src="styles/legend/landuse_1_34.png" /> Chapel<br />\
    <img src="styles/legend/landuse_1_35.png" /> Chemical Works<br />\
    <img src="styles/legend/landuse_1_36.png" /> Children\'s Centre<br />\
    <img src="styles/legend/landuse_1_37.png" /> Children\'s Nursery<br />\
    <img src="styles/legend/landuse_1_38.png" /> Church<br />\
    <img src="styles/legend/landuse_1_39.png" /> Cinema<br />\
    <img src="styles/legend/landuse_1_40.png" /> Coach And Commercial Vehicle Park<br />\
    <img src="styles/legend/landuse_1_41.png" /> College<br />\
    <img src="styles/legend/landuse_1_42.png" /> Commercial Hostel<br />\
    <img src="styles/legend/landuse_1_43.png" /> Commercial Vehicle Service Area<br />\
    <img src="styles/legend/landuse_1_44.png" /> Communal Residential Site<br />\
    <img src="styles/legend/landuse_1_45.png" /> Community Meeting Place<br />\
    <img src="styles/legend/landuse_1_46.png" /> Community Services<br />\
    <img src="styles/legend/landuse_1_47.png" /> Conference Or Exhibition Centre<br />\
    <img src="styles/legend/landuse_1_48.png" /> Construction Site<br />\
    <img src="styles/legend/landuse_1_49.png" /> Crematorium<br />\
    <img src="styles/legend/landuse_1_50.png" /> Cricket Ground (Participation)<br />\
    <img src="styles/legend/landuse_1_51.png" /> Curling Rink<br />\
    <img src="styles/legend/landuse_1_52.png" /> Cycle Hire Station<br />\
    <img src="styles/legend/landuse_1_53.png" /> Cycling Sports Facility<br />\
    <img src="styles/legend/landuse_1_54.png" /> Dairy Processing Site<br />\
    <img src="styles/legend/landuse_1_55.png" /> Distillery<br />\
    <img src="styles/legend/landuse_1_56.png" /> Distribution Or Storage Site<br />\
    <img src="styles/legend/landuse_1_57.png" /> Docks<br />\
    <img src="styles/legend/landuse_1_58.png" /> Dry Dock<br />\
    <img src="styles/legend/landuse_1_59.png" /> Education Support Site<br />\
    <img src="styles/legend/landuse_1_60.png" /> Educational Field Study Centre<br />\
    <img src="styles/legend/landuse_1_61.png" /> Electricity Distribution Site<br />\
    <img src="styles/legend/landuse_1_62.png" /> Electricity Sub Station<br />\
    <img src="styles/legend/landuse_1_63.png" /> Farm Site<br />\
    <img src="styles/legend/landuse_1_64.png" /> Ferry Passenger Terminal<br />\
    <img src="styles/legend/landuse_1_65.png" /> Ferry Vehicular Terminal<br />\
    <img src="styles/legend/landuse_1_66.png" /> Filling Station<br />\
    <img src="styles/legend/landuse_1_67.png" /> Fire Station<br />\
    <img src="styles/legend/landuse_1_68.png" /> Fishing Lake<br />\
    <img src="styles/legend/landuse_1_69.png" /> Flood Or Water Controlling Site<br />\
    <img src="styles/legend/landuse_1_70.png" /> Football Ground (Participation)<br />\
    <img src="styles/legend/landuse_1_71.png" /> Football Ground (Spectating)<br />\
    <img src="styles/legend/landuse_1_72.png" /> Football Stadium<br />\
    <img src="styles/legend/landuse_1_73.png" /> Garden Centre<br />\
    <img src="styles/legend/landuse_1_74.png" /> Gas Distribution Or Storage Site<br />\
    <img src="styles/legend/landuse_1_75.png" /> Gas Governor<br />\
    <img src="styles/legend/landuse_1_76.png" /> Go-Kart Track<br />\
    <img src="styles/legend/landuse_1_77.png" /> Golf Clubhouse<br />\
    <img src="styles/legend/landuse_1_78.png" /> Golf Course<br />\
    <img src="styles/legend/landuse_1_79.png" /> Golf Driving Range<br />\
    <img src="styles/legend/landuse_1_80.png" /> Health Centre<br />\
    <img src="styles/legend/landuse_1_81.png" /> Heating Plant<br />\
    <img src="styles/legend/landuse_1_82.png" /> HM Coastguard Station<br />\
    <img src="styles/legend/landuse_1_83.png" /> Holiday Accommodation<br />\
    <img src="styles/legend/landuse_1_84.png" /> Horse Racing Or Breeding Stables<br />\
    <img src="styles/legend/landuse_1_85.png" /> Horticulture<br />\
    <img src="styles/legend/landuse_1_86.png" /> Hospice<br />\
    <img src="styles/legend/landuse_1_87.png" /> Hospital<br />\
    <img src="styles/legend/landuse_1_88.png" /> Hotel<br />\
    <img src="styles/legend/landuse_1_89.png" /> Hydroelectric Power Generating<br />\
    <img src="styles/legend/landuse_1_90.png" /> Ice Rink<br />\
    <img src="styles/legend/landuse_1_91.png" /> Industry And Business Site<br />\
    <img src="styles/legend/landuse_1_92.png" /> Inshore Rescue Boat Station<br />\
    <img src="styles/legend/landuse_1_93.png" /> Kennels<br />\
    <img src="styles/legend/landuse_1_94.png" /> Kingdom Hall<br />\
    <img src="styles/legend/landuse_1_95.png" /> Law Court<br />\
    <img src="styles/legend/landuse_1_96.png" /> Leisure Or Sports Centre<br />\
    <img src="styles/legend/landuse_1_97.png" /> Library<br />\
    <img src="styles/legend/landuse_1_98.png" /> Lighthouse<br />\
    <img src="styles/legend/landuse_1_99.png" /> Local Government Site<br />\
    <img src="styles/legend/landuse_1_100.png" /> Lock<br />\
    <img src="styles/legend/landuse_1_101.png" /> Manufacturing Site<br />\
    <img src="styles/legend/landuse_1_102.png" /> Marina<br />\
    <img src="styles/legend/landuse_1_103.png" /> Medical Care Accommodation<br />\
    <img src="styles/legend/landuse_1_104.png" /> Medical Care Site<br />\
    <img src="styles/legend/landuse_1_105.png" /> Memorial<br />\
    <img src="styles/legend/landuse_1_106.png" /> Meteorological Station<br />\
    <img src="styles/legend/landuse_1_107.png" /> Military Accommodation Site<br />\
    <img src="styles/legend/landuse_1_108.png" /> Military Reserves Site<br />\
    <img src="styles/legend/landuse_1_109.png" /> Military Site<br />\
    <img src="styles/legend/landuse_1_110.png" /> Mixed Use Site<br />\
    <img src="styles/legend/landuse_1_111.png" /> Mosque<br />\
    <img src="styles/legend/landuse_1_112.png" /> Multi-Purpose Community Site<br />\
    <img src="styles/legend/landuse_1_113.png" /> Museum<br />\
    <img src="styles/legend/landuse_1_114.png" /> Nautical Navigation Beacon<br />\
    <img src="styles/legend/landuse_1_115.png" /> Observing Station<br />\
    <img src="styles/legend/landuse_1_116.png" /> Outdoor Activity Centre<br />\
    <img src="styles/legend/landuse_1_117.png" /> Paddling Pool<br />\
    <img src="styles/legend/landuse_1_118.png" /> Park And Ride Car Park<br />\
    <img src="styles/legend/landuse_1_119.png" /> Picnic Area<br />\
    <img src="styles/legend/landuse_1_120.png" /> Place Of Worship<br />\
    <img src="styles/legend/landuse_1_121.png" /> Play Area<br />\
    <img src="styles/legend/landuse_1_122.png" /> Playing Field<br />\
    <img src="styles/legend/landuse_1_123.png" /> Police Headquarters<br />\
    <img src="styles/legend/landuse_1_124.png" /> Police Station<br />\
    <img src="styles/legend/landuse_1_125.png" /> Police Support Site<br />\
    <img src="styles/legend/landuse_1_126.png" /> Post Office<br />\
    <img src="styles/legend/landuse_1_127.png" /> Power Station<br />\
    <img src="styles/legend/landuse_1_128.png" /> Prison<br />\
    <img src="styles/legend/landuse_1_129.png" /> Private Residential Site<br />\
    <img src="styles/legend/landuse_1_130.png" /> Public Car Park<br />\
    <img src="styles/legend/landuse_1_131.png" /> Public Convenience<br />\
    <img src="styles/legend/landuse_1_132.png" /> Public House<br />\
    <img src="styles/legend/landuse_1_133.png" /> Public Park Or Garden<br />\
    <img src="styles/legend/landuse_1_134.png" /> Public Recycling Site<br />\
    <img src="styles/legend/landuse_1_135.png" /> Public Waste Disposal Site<br />\
    <img src="styles/legend/landuse_1_136.png" /> Pumping Station<br />\
    <img src="styles/legend/landuse_1_137.png" /> Pupil Referral Site<br />\
    <img src="styles/legend/landuse_1_138.png" /> Quarry<br />\
    <img src="styles/legend/landuse_1_139.png" /> Rail Freight Transport<br />\
    <img src="styles/legend/landuse_1_140.png" /> Rail Maintenance Site<br />\
    <img src="styles/legend/landuse_1_141.png" /> Railway Station<br />\
    <img src="styles/legend/landuse_1_142.png" /> Recreation Ground<br />\
    <img src="styles/legend/landuse_1_143.png" /> Recreational Or Social Club<br />\
    <img src="styles/legend/landuse_1_144.png" /> Recycling Site<br />\
    <img src="styles/legend/landuse_1_145.png" /> Religious Community Site<br />\
    <img src="styles/legend/landuse_1_146.png" /> Religious Meeting Place<br />\
    <img src="styles/legend/landuse_1_147.png" /> Research Site<br />\
    <img src="styles/legend/landuse_1_148.png" /> Retail Complex<br />\
    <img src="styles/legend/landuse_1_149.png" /> Retail Site<br />\
    <img src="styles/legend/landuse_1_150.png" /> Riding Stables<br />\
    <img src="styles/legend/landuse_1_151.png" /> Road Freight Site<br />\
    <img src="styles/legend/landuse_1_152.png" /> Rugby Ground (Spectating)<br />\
    <img src="styles/legend/landuse_1_153.png" /> Rugby Pitch Or Ground (Participation)<br />\
    <img src="styles/legend/landuse_1_154.png" /> Rugby Stadium<br />\
    <img src="styles/legend/landuse_1_155.png" /> Sailing Centre<br />\
    <img src="styles/legend/landuse_1_156.png" /> School<br />\
    <img src="styles/legend/landuse_1_157.png" /> Service Area<br />\
    <img src="styles/legend/landuse_1_158.png" /> Sheep Dip<br />\
    <img src="styles/legend/landuse_1_159.png" /> Shooting Range<br />\
    <img src="styles/legend/landuse_1_160.png" /> Skateboard Park<br />\
    <img src="styles/legend/landuse_1_161.png" /> Ski Centre<br />\
    <img src="styles/legend/landuse_1_162.png" /> Smallholding<br />\
    <img src="styles/legend/landuse_1_163.png" /> Social Care Services Site<br />\
    <img src="styles/legend/landuse_1_164.png" /> Solar Power Site<br />\
    <img src="styles/legend/landuse_1_165.png" /> Sports Or Exercise Facility<br />\
    <img src="styles/legend/landuse_1_166.png" /> Sports Pavilion<br />\
    <img src="styles/legend/landuse_1_167.png" /> Steel Works<br />\
    <img src="styles/legend/landuse_1_168.png" /> Swimming Pool<br />\
    <img src="styles/legend/landuse_1_169.png" /> Synagogue<br />\
    <img src="styles/legend/landuse_1_170.png" /> Telecommunications Site<br />\
    <img src="styles/legend/landuse_1_171.png" /> Telephone Exchange<br />\
    <img src="styles/legend/landuse_1_172.png" /> Tennis Site<br />\
    <img src="styles/legend/landuse_1_173.png" /> Tenpin Bowling Centre<br />\
    <img src="styles/legend/landuse_1_174.png" /> Theatre<br />\
    <img src="styles/legend/landuse_1_175.png" /> Timber Distribution Or Storage Site<br />\
    <img src="styles/legend/landuse_1_176.png" /> Timber Mill<br />\
    <img src="styles/legend/landuse_1_177.png" /> Tourist Attraction<br />\
    <img src="styles/legend/landuse_1_178.png" /> Tourist Information Centre<br />\
    <img src="styles/legend/landuse_1_179.png" /> Training Site<br />\
    <img src="styles/legend/landuse_1_180.png" /> Travellers Site<br />\
    <img src="styles/legend/landuse_1_181.png" /> Unclassified Site<br />\
    <img src="styles/legend/landuse_1_182.png" /> University<br />\
    <img src="styles/legend/landuse_1_183.png" /> University Halls Of Residence<br />\
    <img src="styles/legend/landuse_1_184.png" /> University School<br />\
    <img src="styles/legend/landuse_1_185.png" /> University Sports Or Exercise Facility<br />\
    <img src="styles/legend/landuse_1_186.png" /> University Support Site<br />\
    <img src="styles/legend/landuse_1_187.png" /> Vehicle Repair Garage<br />\
    <img src="styles/legend/landuse_1_188.png" /> Vehicle Testing Site<br />\
    <img src="styles/legend/landuse_1_189.png" /> Ventilating Station<br />\
    <img src="styles/legend/landuse_1_190.png" /> Visitor Information Centre<br />\
    <img src="styles/legend/landuse_1_191.png" /> War Memorial<br />\
    <img src="styles/legend/landuse_1_192.png" /> Waste Disposal Site<br />\
    <img src="styles/legend/landuse_1_193.png" /> Waste Processing Site<br />\
    <img src="styles/legend/landuse_1_194.png" /> Waste Water Treatment Works<br />\
    <img src="styles/legend/landuse_1_195.png" /> Water Distribution Site<br />\
    <img src="styles/legend/landuse_1_196.png" /> Water Monitoring Station<br />\
    <img src="styles/legend/landuse_1_197.png" /> Water Treatment Site<br />\
    <img src="styles/legend/landuse_1_198.png" /> Youth Hostel<br />\
    <img src="styles/legend/landuse_1_199.png" /> Youth Recreational Or Social Club<br />\
    <img src="styles/legend/landuse_1_200.png" /> <br />'
        });

lyr_googlesat_0.setVisible(true);lyr_landuse_1.setVisible(true);
var layersList = [lyr_googlesat_0,lyr_landuse_1];
lyr_landuse_1.set('fieldAliases', {'fid': 'fid', 'osid': 'osid', 'toid': 'toid', 'versiondate': 'versiondate', 'versionavailablefromdate': 'versionavailablefromdate', 'versionavailabletodate': 'versionavailabletodate', 'changetype': 'changetype', 'geometry_area_m2': 'geometry_area_m2', 'geometry_evidencedate': 'geometry_evidencedate', 'geometry_updatedate': 'geometry_updatedate', 'geometry_capturemethod': 'geometry_capturemethod', 'theme': 'theme', 'description': 'description', 'description_evidencedate': 'description_evidencedate', 'description_updatedate': 'description_updatedate', 'oslandusetiera': 'oslandusetiera', 'oslandusetierb': 'oslandusetierb', 'oslanduse_evidencedate': 'oslanduse_evidencedate', 'oslanduse_updatedate': 'oslanduse_updatedate', 'oslanduse_capturemethod': 'oslanduse_capturemethod', 'stakeholder': 'stakeholder', 'name1_text': 'name1_text', 'name1_language': 'name1_language', 'name1_evidencedate': 'name1_evidencedate', 'name1_updatedate': 'name1_updatedate', 'name2_text': 'name2_text', 'name2_language': 'name2_language', 'name2_evidencedate': 'name2_evidencedate', 'name2_updatedate': 'name2_updatedate', 'extentdefinition': 'extentdefinition', 'matcheduprn': 'matcheduprn', 'matcheduprn_method': 'matcheduprn_method', 'address_classificationcode': 'address_classificationcode', 'address_primarydescription': 'address_primarydescription', 'address_secondarydescription': 'address_secondarydescription', 'address_classificationcorrelation': 'address_classificationcorrelation', 'address_classificationsource': 'address_classificationsource', 'addresscount_total': 'addresscount_total', 'addresscount_residential': 'addresscount_residential', 'addresscount_commercial': 'addresscount_commercial', 'addresscount_other': 'addresscount_other', 'nlud_code': 'nlud_code', 'nlud_orderdescription': 'nlud_orderdescription', 'nlud_groupdescription': 'nlud_groupdescription', 'mainbuildingid': 'mainbuildingid', 'status': 'status', 'status_updatedate': 'status_updatedate', });
lyr_landuse_1.set('fieldImages', {'fid': 'TextEdit', 'osid': 'TextEdit', 'toid': 'TextEdit', 'versiondate': 'DateTime', 'versionavailablefromdate': 'DateTime', 'versionavailabletodate': 'DateTime', 'changetype': 'TextEdit', 'geometry_area_m2': 'TextEdit', 'geometry_evidencedate': 'DateTime', 'geometry_updatedate': 'DateTime', 'geometry_capturemethod': 'TextEdit', 'theme': 'TextEdit', 'description': 'TextEdit', 'description_evidencedate': 'DateTime', 'description_updatedate': 'DateTime', 'oslandusetiera': 'TextEdit', 'oslandusetierb': 'TextEdit', 'oslanduse_evidencedate': 'DateTime', 'oslanduse_updatedate': 'DateTime', 'oslanduse_capturemethod': 'TextEdit', 'stakeholder': 'TextEdit', 'name1_text': 'TextEdit', 'name1_language': 'TextEdit', 'name1_evidencedate': 'DateTime', 'name1_updatedate': 'DateTime', 'name2_text': 'TextEdit', 'name2_language': 'TextEdit', 'name2_evidencedate': 'DateTime', 'name2_updatedate': 'DateTime', 'extentdefinition': 'TextEdit', 'matcheduprn': 'TextEdit', 'matcheduprn_method': 'TextEdit', 'address_classificationcode': 'TextEdit', 'address_primarydescription': 'TextEdit', 'address_secondarydescription': 'TextEdit', 'address_classificationcorrelation': 'TextEdit', 'address_classificationsource': 'TextEdit', 'addresscount_total': 'Range', 'addresscount_residential': 'Range', 'addresscount_commercial': 'Range', 'addresscount_other': 'Range', 'nlud_code': 'TextEdit', 'nlud_orderdescription': 'TextEdit', 'nlud_groupdescription': 'TextEdit', 'mainbuildingid': 'TextEdit', 'status': 'TextEdit', 'status_updatedate': 'DateTime', });
lyr_landuse_1.set('fieldLabels', {'fid': 'hidden field', 'osid': 'hidden field', 'toid': 'inline label - always visible', 'versiondate': 'hidden field', 'versionavailablefromdate': 'hidden field', 'versionavailabletodate': 'hidden field', 'changetype': 'hidden field', 'geometry_area_m2': 'hidden field', 'geometry_evidencedate': 'hidden field', 'geometry_updatedate': 'hidden field', 'geometry_capturemethod': 'hidden field', 'theme': 'hidden field', 'description': 'inline label - always visible', 'description_evidencedate': 'hidden field', 'description_updatedate': 'hidden field', 'oslandusetiera': 'inline label - always visible', 'oslandusetierb': 'inline label - always visible', 'oslanduse_evidencedate': 'inline label - always visible', 'oslanduse_updatedate': 'hidden field', 'oslanduse_capturemethod': 'hidden field', 'stakeholder': 'inline label - always visible', 'name1_text': 'hidden field', 'name1_language': 'hidden field', 'name1_evidencedate': 'hidden field', 'name1_updatedate': 'hidden field', 'name2_text': 'hidden field', 'name2_language': 'hidden field', 'name2_evidencedate': 'hidden field', 'name2_updatedate': 'hidden field', 'extentdefinition': 'hidden field', 'matcheduprn': 'hidden field', 'matcheduprn_method': 'hidden field', 'address_classificationcode': 'hidden field', 'address_primarydescription': 'hidden field', 'address_secondarydescription': 'hidden field', 'address_classificationcorrelation': 'hidden field', 'address_classificationsource': 'hidden field', 'addresscount_total': 'hidden field', 'addresscount_residential': 'hidden field', 'addresscount_commercial': 'hidden field', 'addresscount_other': 'hidden field', 'nlud_code': 'hidden field', 'nlud_orderdescription': 'hidden field', 'nlud_groupdescription': 'hidden field', 'mainbuildingid': 'hidden field', 'status': 'hidden field', 'status_updatedate': 'hidden field', });
lyr_landuse_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});