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
var format_lu_landuse1land_use_landuse1_1 = new ol.format.GeoJSON();
var features_lu_landuse1land_use_landuse1_1 = format_lu_landuse1land_use_landuse1_1.readFeatures(json_lu_landuse1land_use_landuse1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lu_landuse1land_use_landuse1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lu_landuse1land_use_landuse1_1.addFeatures(features_lu_landuse1land_use_landuse1_1);
var lyr_lu_landuse1land_use_landuse1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lu_landuse1land_use_landuse1_1, 
                style: style_lu_landuse1land_use_landuse1_1,
                popuplayertitle: "lu_land use 1 — land_use_land use 1",
                interactive: true,
    title: 'lu_land use 1 — land_use_land use 1<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_0.png" /> Abattoir<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_1.png" /> Airfield<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_2.png" /> Airport With Scheduled Services<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_3.png" /> Allotments<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_4.png" /> Ambulance Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_5.png" /> Amenity And Open Space Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_6.png" /> Amusement And Show Place Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_7.png" /> Amusement Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_8.png" /> Animal Treatment Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_9.png" /> Animal Welfare Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_10.png" /> Aquatic Animal Attraction<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_11.png" /> Art Gallery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_12.png" /> Art Gallery And Library And Museum<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_13.png" /> Arts Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_14.png" /> Athletics Ground<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_15.png" /> Attraction Or Leisure Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_16.png" /> Balancing Pond<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_17.png" /> Biogas Power Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_18.png" /> Boat Maintenance Or Storage Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_19.png" /> Boating Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_20.png" /> Botanical Garden<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_21.png" /> Bowls Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_22.png" /> Brewery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_23.png" /> Bus Depot<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_24.png" /> Bus Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_25.png" /> Business Or Industrial Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_26.png" /> Camping And Caravanning Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_27.png" /> Car Cleaning Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_28.png" /> Caravan Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_29.png" /> Cathedral<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_30.png" /> Cattery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_31.png" /> Cattery And Kennels<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_32.png" /> Cemetery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_33.png" /> Central Government Services<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_34.png" /> Chapel<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_35.png" /> Chemical Works<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_36.png" /> Children\'s Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_37.png" /> Children\'s Nursery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_38.png" /> Church<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_39.png" /> Cinema<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_40.png" /> Coach And Commercial Vehicle Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_41.png" /> College<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_42.png" /> Commercial Hostel<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_43.png" /> Commercial Vehicle Service Area<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_44.png" /> Communal Residential Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_45.png" /> Community Meeting Place<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_46.png" /> Community Services<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_47.png" /> Conference Or Exhibition Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_48.png" /> Construction Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_49.png" /> Crematorium<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_50.png" /> Cricket Ground (Participation)<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_51.png" /> Curling Rink<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_52.png" /> Cycle Hire Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_53.png" /> Cycling Sports Facility<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_54.png" /> Dairy Processing Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_55.png" /> Distillery<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_56.png" /> Distribution Or Storage Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_57.png" /> Docks<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_58.png" /> Dry Dock<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_59.png" /> Education Support Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_60.png" /> Educational Field Study Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_61.png" /> Electricity Distribution Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_62.png" /> Electricity Sub Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_63.png" /> Farm Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_64.png" /> Ferry Passenger Terminal<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_65.png" /> Ferry Vehicular Terminal<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_66.png" /> Filling Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_67.png" /> Fire Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_68.png" /> Fishing Lake<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_69.png" /> Flood Or Water Controlling Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_70.png" /> Football Ground (Participation)<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_71.png" /> Football Ground (Spectating)<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_72.png" /> Football Stadium<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_73.png" /> Garden Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_74.png" /> Gas Distribution Or Storage Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_75.png" /> Gas Governor<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_76.png" /> Go-Kart Track<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_77.png" /> Golf Clubhouse<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_78.png" /> Golf Course<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_79.png" /> Golf Driving Range<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_80.png" /> Health Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_81.png" /> Heating Plant<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_82.png" /> HM Coastguard Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_83.png" /> Holiday Accommodation<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_84.png" /> Horse Racing Or Breeding Stables<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_85.png" /> Horticulture<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_86.png" /> Hospice<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_87.png" /> Hospital<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_88.png" /> Hotel<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_89.png" /> Hydroelectric Power Generating<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_90.png" /> Ice Rink<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_91.png" /> Industry And Business Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_92.png" /> Inshore Rescue Boat Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_93.png" /> Kennels<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_94.png" /> Kingdom Hall<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_95.png" /> Law Court<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_96.png" /> Leisure Or Sports Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_97.png" /> Library<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_98.png" /> Lighthouse<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_99.png" /> Local Government Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_100.png" /> Lock<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_101.png" /> Manufacturing Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_102.png" /> Marina<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_103.png" /> Medical Care Accommodation<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_104.png" /> Medical Care Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_105.png" /> Memorial<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_106.png" /> Meteorological Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_107.png" /> Military Accommodation Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_108.png" /> Military Reserves Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_109.png" /> Military Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_110.png" /> Mixed Use Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_111.png" /> Mosque<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_112.png" /> Multi-Purpose Community Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_113.png" /> Museum<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_114.png" /> Nautical Navigation Beacon<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_115.png" /> Observing Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_116.png" /> Outdoor Activity Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_117.png" /> Paddling Pool<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_118.png" /> Park And Ride Car Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_119.png" /> Picnic Area<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_120.png" /> Place Of Worship<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_121.png" /> Play Area<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_122.png" /> Playing Field<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_123.png" /> Police Headquarters<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_124.png" /> Police Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_125.png" /> Police Support Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_126.png" /> Post Office<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_127.png" /> Power Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_128.png" /> Prison<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_129.png" /> Private Residential Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_130.png" /> Public Car Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_131.png" /> Public Convenience<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_132.png" /> Public House<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_133.png" /> Public Park Or Garden<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_134.png" /> Public Recycling Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_135.png" /> Public Waste Disposal Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_136.png" /> Pumping Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_137.png" /> Pupil Referral Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_138.png" /> Quarry<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_139.png" /> Rail Freight Transport<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_140.png" /> Rail Maintenance Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_141.png" /> Railway Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_142.png" /> Recreation Ground<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_143.png" /> Recreational Or Social Club<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_144.png" /> Recycling Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_145.png" /> Religious Community Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_146.png" /> Religious Meeting Place<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_147.png" /> Research Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_148.png" /> Retail Complex<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_149.png" /> Retail Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_150.png" /> Riding Stables<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_151.png" /> Road Freight Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_152.png" /> Rugby Ground (Spectating)<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_153.png" /> Rugby Pitch Or Ground (Participation)<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_154.png" /> Rugby Stadium<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_155.png" /> Sailing Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_156.png" /> School<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_157.png" /> Service Area<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_158.png" /> Sheep Dip<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_159.png" /> Shooting Range<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_160.png" /> Skateboard Park<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_161.png" /> Ski Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_162.png" /> Smallholding<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_163.png" /> Social Care Services Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_164.png" /> Solar Power Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_165.png" /> Sports Or Exercise Facility<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_166.png" /> Sports Pavilion<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_167.png" /> Steel Works<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_168.png" /> Swimming Pool<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_169.png" /> Synagogue<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_170.png" /> Telecommunications Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_171.png" /> Telephone Exchange<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_172.png" /> Tennis Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_173.png" /> Tenpin Bowling Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_174.png" /> Theatre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_175.png" /> Timber Distribution Or Storage Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_176.png" /> Timber Mill<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_177.png" /> Tourist Attraction<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_178.png" /> Tourist Information Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_179.png" /> Training Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_180.png" /> Travellers Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_181.png" /> Unclassified Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_182.png" /> University<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_183.png" /> University Halls Of Residence<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_184.png" /> University School<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_185.png" /> University Sports Or Exercise Facility<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_186.png" /> University Support Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_187.png" /> Vehicle Repair Garage<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_188.png" /> Vehicle Testing Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_189.png" /> Ventilating Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_190.png" /> Visitor Information Centre<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_191.png" /> War Memorial<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_192.png" /> Waste Disposal Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_193.png" /> Waste Processing Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_194.png" /> Waste Water Treatment Works<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_195.png" /> Water Distribution Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_196.png" /> Water Monitoring Station<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_197.png" /> Water Treatment Site<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_198.png" /> Youth Hostel<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_199.png" /> Youth Recreational Or Social Club<br />\
    <img src="styles/legend/lu_landuse1land_use_landuse1_1_200.png" /> <br />'
        });
var format_lu_roads_pavements_etcland_use_roads_pavements_etc_2 = new ol.format.GeoJSON();
var features_lu_roads_pavements_etcland_use_roads_pavements_etc_2 = format_lu_roads_pavements_etcland_use_roads_pavements_etc_2.readFeatures(json_lu_roads_pavements_etcland_use_roads_pavements_etc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lu_roads_pavements_etcland_use_roads_pavements_etc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lu_roads_pavements_etcland_use_roads_pavements_etc_2.addFeatures(features_lu_roads_pavements_etcland_use_roads_pavements_etc_2);
var lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lu_roads_pavements_etcland_use_roads_pavements_etc_2, 
                style: style_lu_roads_pavements_etcland_use_roads_pavements_etc_2,
                popuplayertitle: "lu_roads_pavements_etc — land_use_roads_pavements_etc",
                interactive: true,
    title: 'lu_roads_pavements_etc — land_use_roads_pavements_etc<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_0.png" /> Central Reservation<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_1.png" /> Cycle Way<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_2.png" /> Ford<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_3.png" /> Lay-by<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_4.png" /> Level Crossing<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_5.png" /> Path<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_6.png" /> Path And Steps<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_7.png" /> Pavement<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_8.png" /> Pavement And Steps<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_9.png" /> Pedestrian Crossing<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_10.png" /> Road<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_11.png" /> Roofed Path<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_12.png" /> Shared Use Carriageway<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_13.png" /> Towing Path<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_14.png" /> Track<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_15.png" /> Traffic Calming<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_16.png" /> Transport Curtilage<br />\
    <img src="styles/legend/lu_roads_pavements_etcland_use_roads_pavements_etc_2_17.png" /> <br />'
        });
var format_lu_landusemoredetailland_use_landusemoredetail_3 = new ol.format.GeoJSON();
var features_lu_landusemoredetailland_use_landusemoredetail_3 = format_lu_landusemoredetailland_use_landusemoredetail_3.readFeatures(json_lu_landusemoredetailland_use_landusemoredetail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lu_landusemoredetailland_use_landusemoredetail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lu_landusemoredetailland_use_landusemoredetail_3.addFeatures(features_lu_landusemoredetailland_use_landusemoredetail_3);
var lyr_lu_landusemoredetailland_use_landusemoredetail_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lu_landusemoredetailland_use_landusemoredetail_3, 
                style: style_lu_landusemoredetailland_use_landusemoredetail_3,
                popuplayertitle: "lu_land use more detail — land_use_land use more detail",
                interactive: true,
    title: 'lu_land use more detail — land_use_land use more detail<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_0.png" /> Arable Or Grazing Land<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_1.png" /> Bare Earth Or Grass<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_2.png" /> Boulder<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_3.png" /> Boulders Or Rock<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_4.png" /> Boulders Or Rock And Mud<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_5.png" /> Boulders Or Rock And Mud And Sand Or Shingle<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_6.png" /> Boulders Or Rock And Sand Or Shingle<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_7.png" /> Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_8.png" /> Coniferous Trees And Scattered Boulders Or Scattered Rock<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_9.png" /> Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_10.png" /> Construction Site<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_11.png" /> Games Court<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_12.png" /> Heath Or Rough Grassland<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_13.png" /> Heath Or Rough Grassland And Marsh<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_14.png" /> Heath Or Rough Grassland And Marsh And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_15.png" /> Heath Or Rough Grassland And Scattered Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_16.png" /> Heath Or Rough Grassland And Scattered Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_17.png" /> Heath Or Rough Grassland And Scattered Mixed Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_18.png" /> Heath Or Rough Grassland And Scattered Mixed Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_19.png" /> Heath Or Rough Grassland And Scattered Non-Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_20.png" /> Heath Or Rough Grassland And Scattered Non-Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_21.png" /> Heath Or Rough Grassland And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_22.png" /> Helipad<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_23.png" /> Livestock Pen<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_24.png" /> Made Surface<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_25.png" /> Marsh<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_26.png" /> Marsh And Non-Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_27.png" /> Marsh And Non-Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_28.png" /> Marsh And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_29.png" /> Mixed Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_30.png" /> Mixed Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_31.png" /> Mud<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_32.png" /> Mud And Sand Or Shingle<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_33.png" /> Non-Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_34.png" /> Non-Coniferous Trees And Scattered Boulders Or Scattered Rock<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_35.png" /> Non-Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_36.png" /> Orchard<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_37.png" /> Quarry<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_38.png" /> Residential Garden<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_39.png" /> Runway<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_40.png" /> Saltmarsh<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_41.png" /> Sand Or Shingle<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_42.png" /> Scattered Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_43.png" /> Scattered Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_44.png" /> Scattered Mixed Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_45.png" /> Scattered Mixed Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_46.png" /> Scattered Non-Coniferous Trees<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_47.png" /> Scattered Non-Coniferous Trees And Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_48.png" /> Scrub<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_49.png" /> Slipway<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_50.png" /> Sloping Masonry<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_51.png" /> Slurry Bed<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_52.png" /> Spoil Heap<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_53.png" /> Steps<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_54.png" /> Taxiway<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_55.png" /> Tennis Court<br />\
    <img src="styles/legend/lu_landusemoredetailland_use_landusemoredetail_3_56.png" /> <br />'
        });
var format_lu_buildingsland_use_buildings_4 = new ol.format.GeoJSON();
var features_lu_buildingsland_use_buildings_4 = format_lu_buildingsland_use_buildings_4.readFeatures(json_lu_buildingsland_use_buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lu_buildingsland_use_buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lu_buildingsland_use_buildings_4.addFeatures(features_lu_buildingsland_use_buildings_4);
var lyr_lu_buildingsland_use_buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lu_buildingsland_use_buildings_4, 
                style: style_lu_buildingsland_use_buildings_4,
                popuplayertitle: "lu_buildings — land_use_buildings",
                interactive: true,
    title: 'lu_buildings — land_use_buildings<br />\
    <img src="styles/legend/lu_buildingsland_use_buildings_4_0.png" /> End-Connected<br />\
    <img src="styles/legend/lu_buildingsland_use_buildings_4_1.png" /> Multi-Connected<br />\
    <img src="styles/legend/lu_buildingsland_use_buildings_4_2.png" /> Semi-Connected<br />\
    <img src="styles/legend/lu_buildingsland_use_buildings_4_3.png" /> Standalone<br />\
    <img src="styles/legend/lu_buildingsland_use_buildings_4_4.png" /> <br />'
        });

lyr_googlesat_0.setVisible(true);lyr_lu_landuse1land_use_landuse1_1.setVisible(true);lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2.setVisible(false);lyr_lu_landusemoredetailland_use_landusemoredetail_3.setVisible(false);lyr_lu_buildingsland_use_buildings_4.setVisible(true);
var layersList = [lyr_googlesat_0,lyr_lu_landuse1land_use_landuse1_1,lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2,lyr_lu_landusemoredetailland_use_landusemoredetail_3,lyr_lu_buildingsland_use_buildings_4];
lyr_lu_landuse1land_use_landuse1_1.set('fieldAliases', {'fid': 'fid', 'osid': 'osid', 'toid': 'toid', 'versiondate': 'versiondate', 'versionavailablefromdate': 'versionavailablefromdate', 'versionavailabletodate': 'versionavailabletodate', 'changetype': 'changetype', 'geometry_area_m2': 'geometry_area_m2', 'geometry_evidencedate': 'geometry_evidencedate', 'geometry_updatedate': 'geometry_updatedate', 'geometry_capturemethod': 'geometry_capturemethod', 'theme': 'theme', 'description': 'description', 'description_evidencedate': 'description_evidencedate', 'description_updatedate': 'description_updatedate', 'oslandusetiera': 'oslandusetiera', 'oslandusetierb': 'oslandusetierb', 'oslanduse_evidencedate': 'oslanduse_evidencedate', 'oslanduse_updatedate': 'oslanduse_updatedate', 'oslanduse_capturemethod': 'oslanduse_capturemethod', 'stakeholder': 'stakeholder', 'name1_text': 'name1_text', 'name1_language': 'name1_language', 'name1_evidencedate': 'name1_evidencedate', 'name1_updatedate': 'name1_updatedate', 'name2_text': 'name2_text', 'name2_language': 'name2_language', 'name2_evidencedate': 'name2_evidencedate', 'name2_updatedate': 'name2_updatedate', 'extentdefinition': 'extentdefinition', 'matcheduprn': 'matcheduprn', 'matcheduprn_method': 'matcheduprn_method', 'address_classificationcode': 'address_classificationcode', 'address_primarydescription': 'address_primarydescription', 'address_secondarydescription': 'address_secondarydescription', 'address_classificationcorrelation': 'address_classificationcorrelation', 'address_classificationsource': 'address_classificationsource', 'addresscount_total': 'addresscount_total', 'addresscount_residential': 'addresscount_residential', 'addresscount_commercial': 'addresscount_commercial', 'addresscount_other': 'addresscount_other', 'nlud_code': 'nlud_code', 'nlud_orderdescription': 'nlud_orderdescription', 'nlud_groupdescription': 'nlud_groupdescription', 'mainbuildingid': 'mainbuildingid', 'status': 'status', 'status_updatedate': 'status_updatedate', });
lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2.set('fieldAliases', {'fid': 'fid', 'osid': 'osid', 'toid': 'toid', 'versiondate': 'versiondate', 'versionavailablefromdate': 'versionavailablefromdate', 'versionavailabletodate': 'versionavailabletodate', 'firstdigitalcapturedate': 'firstdigitalcapturedate', 'changetype': 'changetype', 'geometry_area_m2': 'geometry_area_m2', 'geometry_evidencedate': 'geometry_evidencedate', 'geometry_updatedate': 'geometry_updatedate', 'geometry_capturemethod': 'geometry_capturemethod', 'theme': 'theme', 'description': 'description', 'description_evidencedate': 'description_evidencedate', 'description_updatedate': 'description_updatedate', 'description_capturemethod': 'description_capturemethod', 'oslandcovertiera': 'oslandcovertiera', 'oslandcovertierb': 'oslandcovertierb', 'oslandcover_evidencedate': 'oslandcover_evidencedate', 'oslandcover_updatedate': 'oslandcover_updatedate', 'oslandcover_capturemethod': 'oslandcover_capturemethod', 'oslandusetiera': 'oslandusetiera', 'oslandusetierb': 'oslandusetierb', 'oslanduse_evidencedate': 'oslanduse_evidencedate', 'oslanduse_updatedate': 'oslanduse_updatedate', 'oslanduse_capturemethod': 'oslanduse_capturemethod', 'istidal': 'istidal', 'associatedstructure': 'associatedstructure', 'isobscured': 'isobscured', 'physicallevel': 'physicallevel', 'capturespecification': 'capturespecification', });
lyr_lu_landusemoredetailland_use_landusemoredetail_3.set('fieldAliases', {'fid': 'fid', 'osid': 'osid', 'toid': 'toid', 'versiondate': 'versiondate', 'versionavailablefromdate': 'versionavailablefromdate', 'versionavailabletodate': 'versionavailabletodate', 'firstdigitalcapturedate': 'firstdigitalcapturedate', 'changetype': 'changetype', 'geometry_area_m2': 'geometry_area_m2', 'geometry_evidencedate': 'geometry_evidencedate', 'geometry_updatedate': 'geometry_updatedate', 'geometry_capturemethod': 'geometry_capturemethod', 'theme': 'theme', 'description': 'description', 'description_evidencedate': 'description_evidencedate', 'description_updatedate': 'description_updatedate', 'description_capturemethod': 'description_capturemethod', 'oslandcovertiera': 'oslandcovertiera', 'oslandcovertierb': 'oslandcovertierb', 'landform': 'landform', 'oslandcover_evidencedate': 'oslandcover_evidencedate', 'oslandcover_updatedate': 'oslandcover_updatedate', 'oslandcover_capturemethod': 'oslandcover_capturemethod', 'oslandusetiera': 'oslandusetiera', 'oslandusetierb': 'oslandusetierb', 'oslanduse_evidencedate': 'oslanduse_evidencedate', 'oslanduse_updatedate': 'oslanduse_updatedate', 'oslanduse_capturemethod': 'oslanduse_capturemethod', 'istidal': 'istidal', 'associatedstructure': 'associatedstructure', 'operationalstatus': 'operationalstatus', 'isobscured': 'isobscured', 'physicallevel': 'physicallevel', 'capturespecification': 'capturespecification', });
lyr_lu_buildingsland_use_buildings_4.set('fieldAliases', {'fid': 'fid', 'osid': 'osid', 'versiondate': 'versiondate', 'versionavailablefromdate': 'versionavailablefromdate', 'versionavailabletodate': 'versionavailabletodate', 'changetype': 'changetype', 'geometry_area_m2': 'geometry_area_m2', 'geometry_updatedate': 'geometry_updatedate', 'theme': 'theme', 'description': 'description', 'description_updatedate': 'description_updatedate', 'buildingpartcount': 'buildingpartcount', 'isinsite': 'isinsite', 'primarysite_id': 'primarysite_id', 'containingsitecount': 'containingsitecount', 'ismainbuilding': 'ismainbuilding', 'mainbuilding_id': 'mainbuilding_id', 'mainbuilding_updatedate': 'mainbuilding_updatedate', 'buildinguse': 'buildinguse', 'oslandusetiera': 'oslandusetiera', 'addresscount_total': 'addresscount_total', 'addresscount_residential': 'addresscount_residential', 'addresscount_commercial': 'addresscount_commercial', 'addresscount_other': 'addresscount_other', 'buildinguse_updatedate': 'buildinguse_updatedate', 'connectivity': 'connectivity', 'connectivitycount': 'connectivitycount', 'connectivity_updatedate': 'connectivity_updatedate', 'constructionmaterial': 'constructionmaterial', 'constructionmaterial_evidencedate': 'constructionmaterial_evidencedate', 'constructionmaterial_updatedate': 'constructionmaterial_updatedate', 'constructionmaterial_source': 'constructionmaterial_source', 'constructionmaterial_capturemethod': 'constructionmaterial_capturemethod', 'constructionmaterial_thirdpartyprovenance': 'constructionmaterial_thirdpartyprovenance', 'buildingage_period': 'buildingage_period', 'buildingage_year': 'buildingage_year', 'buildingage_evidencedate': 'buildingage_evidencedate', 'buildingage_updatedate': 'buildingage_updatedate', 'buildingage_source': 'buildingage_source', 'buildingage_capturemethod': 'buildingage_capturemethod', 'buildingage_thirdpartyprovenance': 'buildingage_thirdpartyprovenance', 'basementpresence': 'basementpresence', 'basementpresence_selfcontained': 'basementpresence_selfcontained', 'basementpresence_evidencedate': 'basementpresence_evidencedate', 'basementpresence_updatedate': 'basementpresence_updatedate', 'basementpresence_source': 'basementpresence_source', 'basementpresence_capturemethod': 'basementpresence_capturemethod', 'basementpresence_thirdpartyprovenance': 'basementpresence_thirdpartyprovenance', });
lyr_lu_landuse1land_use_landuse1_1.set('fieldImages', {'fid': 'TextEdit', 'osid': 'TextEdit', 'toid': 'TextEdit', 'versiondate': 'DateTime', 'versionavailablefromdate': 'DateTime', 'versionavailabletodate': 'DateTime', 'changetype': 'TextEdit', 'geometry_area_m2': 'TextEdit', 'geometry_evidencedate': 'DateTime', 'geometry_updatedate': 'DateTime', 'geometry_capturemethod': 'TextEdit', 'theme': 'TextEdit', 'description': 'TextEdit', 'description_evidencedate': 'DateTime', 'description_updatedate': 'DateTime', 'oslandusetiera': 'TextEdit', 'oslandusetierb': 'TextEdit', 'oslanduse_evidencedate': 'DateTime', 'oslanduse_updatedate': 'DateTime', 'oslanduse_capturemethod': 'TextEdit', 'stakeholder': 'TextEdit', 'name1_text': 'TextEdit', 'name1_language': 'TextEdit', 'name1_evidencedate': 'DateTime', 'name1_updatedate': 'DateTime', 'name2_text': 'TextEdit', 'name2_language': 'TextEdit', 'name2_evidencedate': 'DateTime', 'name2_updatedate': 'DateTime', 'extentdefinition': 'TextEdit', 'matcheduprn': 'TextEdit', 'matcheduprn_method': 'TextEdit', 'address_classificationcode': 'TextEdit', 'address_primarydescription': 'TextEdit', 'address_secondarydescription': 'TextEdit', 'address_classificationcorrelation': 'TextEdit', 'address_classificationsource': 'TextEdit', 'addresscount_total': 'Range', 'addresscount_residential': 'Range', 'addresscount_commercial': 'Range', 'addresscount_other': 'Range', 'nlud_code': 'TextEdit', 'nlud_orderdescription': 'TextEdit', 'nlud_groupdescription': 'TextEdit', 'mainbuildingid': 'TextEdit', 'status': 'TextEdit', 'status_updatedate': 'DateTime', });
lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2.set('fieldImages', {'fid': 'TextEdit', 'osid': 'TextEdit', 'toid': 'TextEdit', 'versiondate': 'DateTime', 'versionavailablefromdate': 'DateTime', 'versionavailabletodate': 'DateTime', 'firstdigitalcapturedate': 'DateTime', 'changetype': 'TextEdit', 'geometry_area_m2': 'TextEdit', 'geometry_evidencedate': 'DateTime', 'geometry_updatedate': 'DateTime', 'geometry_capturemethod': 'TextEdit', 'theme': 'TextEdit', 'description': 'TextEdit', 'description_evidencedate': 'DateTime', 'description_updatedate': 'DateTime', 'description_capturemethod': 'TextEdit', 'oslandcovertiera': 'TextEdit', 'oslandcovertierb': 'TextEdit', 'oslandcover_evidencedate': 'DateTime', 'oslandcover_updatedate': 'DateTime', 'oslandcover_capturemethod': 'TextEdit', 'oslandusetiera': 'TextEdit', 'oslandusetierb': 'TextEdit', 'oslanduse_evidencedate': 'DateTime', 'oslanduse_updatedate': 'DateTime', 'oslanduse_capturemethod': 'TextEdit', 'istidal': 'CheckBox', 'associatedstructure': 'TextEdit', 'isobscured': 'CheckBox', 'physicallevel': 'TextEdit', 'capturespecification': 'TextEdit', });
lyr_lu_landusemoredetailland_use_landusemoredetail_3.set('fieldImages', {'fid': 'TextEdit', 'osid': 'TextEdit', 'toid': 'TextEdit', 'versiondate': 'DateTime', 'versionavailablefromdate': 'DateTime', 'versionavailabletodate': 'DateTime', 'firstdigitalcapturedate': 'DateTime', 'changetype': 'TextEdit', 'geometry_area_m2': 'TextEdit', 'geometry_evidencedate': 'DateTime', 'geometry_updatedate': 'DateTime', 'geometry_capturemethod': 'TextEdit', 'theme': 'TextEdit', 'description': 'TextEdit', 'description_evidencedate': 'DateTime', 'description_updatedate': 'DateTime', 'description_capturemethod': 'TextEdit', 'oslandcovertiera': 'TextEdit', 'oslandcovertierb': 'TextEdit', 'landform': 'TextEdit', 'oslandcover_evidencedate': 'DateTime', 'oslandcover_updatedate': 'DateTime', 'oslandcover_capturemethod': 'TextEdit', 'oslandusetiera': 'TextEdit', 'oslandusetierb': 'TextEdit', 'oslanduse_evidencedate': 'DateTime', 'oslanduse_updatedate': 'DateTime', 'oslanduse_capturemethod': 'TextEdit', 'istidal': 'CheckBox', 'associatedstructure': 'TextEdit', 'operationalstatus': 'TextEdit', 'isobscured': 'CheckBox', 'physicallevel': 'TextEdit', 'capturespecification': 'TextEdit', });
lyr_lu_buildingsland_use_buildings_4.set('fieldImages', {'fid': 'TextEdit', 'osid': 'TextEdit', 'versiondate': 'DateTime', 'versionavailablefromdate': 'DateTime', 'versionavailabletodate': 'DateTime', 'changetype': 'TextEdit', 'geometry_area_m2': 'TextEdit', 'geometry_updatedate': 'DateTime', 'theme': 'TextEdit', 'description': 'TextEdit', 'description_updatedate': 'DateTime', 'buildingpartcount': 'Range', 'isinsite': 'CheckBox', 'primarysite_id': 'TextEdit', 'containingsitecount': 'Range', 'ismainbuilding': 'CheckBox', 'mainbuilding_id': 'TextEdit', 'mainbuilding_updatedate': 'DateTime', 'buildinguse': 'TextEdit', 'oslandusetiera': 'TextEdit', 'addresscount_total': 'Range', 'addresscount_residential': 'Range', 'addresscount_commercial': 'Range', 'addresscount_other': 'Range', 'buildinguse_updatedate': 'DateTime', 'connectivity': 'TextEdit', 'connectivitycount': 'Range', 'connectivity_updatedate': 'DateTime', 'constructionmaterial': 'TextEdit', 'constructionmaterial_evidencedate': 'DateTime', 'constructionmaterial_updatedate': 'DateTime', 'constructionmaterial_source': 'TextEdit', 'constructionmaterial_capturemethod': 'TextEdit', 'constructionmaterial_thirdpartyprovenance': 'TextEdit', 'buildingage_period': 'TextEdit', 'buildingage_year': 'Range', 'buildingage_evidencedate': 'DateTime', 'buildingage_updatedate': 'DateTime', 'buildingage_source': 'TextEdit', 'buildingage_capturemethod': 'TextEdit', 'buildingage_thirdpartyprovenance': 'TextEdit', 'basementpresence': 'TextEdit', 'basementpresence_selfcontained': 'TextEdit', 'basementpresence_evidencedate': 'DateTime', 'basementpresence_updatedate': 'DateTime', 'basementpresence_source': 'TextEdit', 'basementpresence_capturemethod': 'TextEdit', 'basementpresence_thirdpartyprovenance': 'TextEdit', });
lyr_lu_landuse1land_use_landuse1_1.set('fieldLabels', {'fid': 'hidden field', 'osid': 'hidden field', 'toid': 'inline label - always visible', 'versiondate': 'hidden field', 'versionavailablefromdate': 'hidden field', 'versionavailabletodate': 'hidden field', 'changetype': 'hidden field', 'geometry_area_m2': 'hidden field', 'geometry_evidencedate': 'hidden field', 'geometry_updatedate': 'hidden field', 'geometry_capturemethod': 'hidden field', 'theme': 'hidden field', 'description': 'inline label - always visible', 'description_evidencedate': 'hidden field', 'description_updatedate': 'hidden field', 'oslandusetiera': 'inline label - always visible', 'oslandusetierb': 'inline label - always visible', 'oslanduse_evidencedate': 'inline label - always visible', 'oslanduse_updatedate': 'hidden field', 'oslanduse_capturemethod': 'hidden field', 'stakeholder': 'inline label - always visible', 'name1_text': 'hidden field', 'name1_language': 'hidden field', 'name1_evidencedate': 'hidden field', 'name1_updatedate': 'hidden field', 'name2_text': 'hidden field', 'name2_language': 'hidden field', 'name2_evidencedate': 'hidden field', 'name2_updatedate': 'hidden field', 'extentdefinition': 'hidden field', 'matcheduprn': 'hidden field', 'matcheduprn_method': 'hidden field', 'address_classificationcode': 'hidden field', 'address_primarydescription': 'hidden field', 'address_secondarydescription': 'hidden field', 'address_classificationcorrelation': 'hidden field', 'address_classificationsource': 'hidden field', 'addresscount_total': 'hidden field', 'addresscount_residential': 'hidden field', 'addresscount_commercial': 'hidden field', 'addresscount_other': 'hidden field', 'nlud_code': 'hidden field', 'nlud_orderdescription': 'hidden field', 'nlud_groupdescription': 'hidden field', 'mainbuildingid': 'hidden field', 'status': 'hidden field', 'status_updatedate': 'hidden field', });
lyr_lu_roads_pavements_etcland_use_roads_pavements_etc_2.set('fieldLabels', {'fid': 'hidden field', 'osid': 'hidden field', 'toid': 'hidden field', 'versiondate': 'hidden field', 'versionavailablefromdate': 'hidden field', 'versionavailabletodate': 'hidden field', 'firstdigitalcapturedate': 'hidden field', 'changetype': 'hidden field', 'geometry_area_m2': 'hidden field', 'geometry_evidencedate': 'hidden field', 'geometry_updatedate': 'hidden field', 'geometry_capturemethod': 'hidden field', 'theme': 'hidden field', 'description': 'inline label - always visible', 'description_evidencedate': 'hidden field', 'description_updatedate': 'hidden field', 'description_capturemethod': 'hidden field', 'oslandcovertiera': 'inline label - visible with data', 'oslandcovertierb': 'inline label - visible with data', 'oslandcover_evidencedate': 'hidden field', 'oslandcover_updatedate': 'hidden field', 'oslandcover_capturemethod': 'hidden field', 'oslandusetiera': 'inline label - always visible', 'oslandusetierb': 'inline label - always visible', 'oslanduse_evidencedate': 'hidden field', 'oslanduse_updatedate': 'hidden field', 'oslanduse_capturemethod': 'hidden field', 'istidal': 'hidden field', 'associatedstructure': 'hidden field', 'isobscured': 'hidden field', 'physicallevel': 'hidden field', 'capturespecification': 'hidden field', });
lyr_lu_landusemoredetailland_use_landusemoredetail_3.set('fieldLabels', {'fid': 'hidden field', 'osid': 'hidden field', 'toid': 'hidden field', 'versiondate': 'hidden field', 'versionavailablefromdate': 'hidden field', 'versionavailabletodate': 'hidden field', 'firstdigitalcapturedate': 'hidden field', 'changetype': 'hidden field', 'geometry_area_m2': 'hidden field', 'geometry_evidencedate': 'hidden field', 'geometry_updatedate': 'hidden field', 'geometry_capturemethod': 'hidden field', 'theme': 'hidden field', 'description': 'inline label - always visible', 'description_evidencedate': 'hidden field', 'description_updatedate': 'hidden field', 'description_capturemethod': 'hidden field', 'oslandcovertiera': 'inline label - visible with data', 'oslandcovertierb': 'inline label - always visible', 'landform': 'inline label - always visible', 'oslandcover_evidencedate': 'hidden field', 'oslandcover_updatedate': 'hidden field', 'oslandcover_capturemethod': 'hidden field', 'oslandusetiera': 'hidden field', 'oslandusetierb': 'hidden field', 'oslanduse_evidencedate': 'hidden field', 'oslanduse_updatedate': 'hidden field', 'oslanduse_capturemethod': 'hidden field', 'istidal': 'hidden field', 'associatedstructure': 'hidden field', 'operationalstatus': 'hidden field', 'isobscured': 'hidden field', 'physicallevel': 'hidden field', 'capturespecification': 'hidden field', });
lyr_lu_buildingsland_use_buildings_4.set('fieldLabels', {'fid': 'hidden field', 'osid': 'hidden field', 'versiondate': 'hidden field', 'versionavailablefromdate': 'hidden field', 'versionavailabletodate': 'hidden field', 'changetype': 'hidden field', 'geometry_area_m2': 'hidden field', 'geometry_updatedate': 'hidden field', 'theme': 'hidden field', 'description': 'inline label - visible with data', 'description_updatedate': 'inline label - visible with data', 'buildingpartcount': 'inline label - visible with data', 'isinsite': 'inline label - visible with data', 'primarysite_id': 'hidden field', 'containingsitecount': 'hidden field', 'ismainbuilding': 'inline label - visible with data', 'mainbuilding_id': 'inline label - visible with data', 'mainbuilding_updatedate': 'hidden field', 'buildinguse': 'inline label - always visible', 'oslandusetiera': 'inline label - always visible', 'addresscount_total': 'inline label - always visible', 'addresscount_residential': 'inline label - always visible', 'addresscount_commercial': 'inline label - always visible', 'addresscount_other': 'inline label - always visible', 'buildinguse_updatedate': 'hidden field', 'connectivity': 'inline label - always visible', 'connectivitycount': 'hidden field', 'connectivity_updatedate': 'hidden field', 'constructionmaterial': 'inline label - always visible', 'constructionmaterial_evidencedate': 'hidden field', 'constructionmaterial_updatedate': 'hidden field', 'constructionmaterial_source': 'hidden field', 'constructionmaterial_capturemethod': 'hidden field', 'constructionmaterial_thirdpartyprovenance': 'hidden field', 'buildingage_period': 'inline label - always visible', 'buildingage_year': 'inline label - always visible', 'buildingage_evidencedate': 'hidden field', 'buildingage_updatedate': 'hidden field', 'buildingage_source': 'hidden field', 'buildingage_capturemethod': 'hidden field', 'buildingage_thirdpartyprovenance': 'hidden field', 'basementpresence': 'hidden field', 'basementpresence_selfcontained': 'hidden field', 'basementpresence_evidencedate': 'hidden field', 'basementpresence_updatedate': 'hidden field', 'basementpresence_source': 'hidden field', 'basementpresence_capturemethod': 'hidden field', 'basementpresence_thirdpartyprovenance': 'hidden field', });
lyr_lu_buildingsland_use_buildings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});