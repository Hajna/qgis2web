var size = 0;
var placement = 'point';
function categories_texas_iou_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'AEP Texas Inc.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,44,65,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(40,44,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CenterPoint Energy Houston Electric, LLC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,24,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(137,24,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'El Paso Electric Company':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,182,60,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(243,182,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Entergy Texas, Inc.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(21,77,47,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(21,77,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Oncor Electric Delivery Company LLC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,16,47,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(211,16,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Southwestern Electric Power Company':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,97,46,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(235,97,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Southwestern Public Service Company':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(39,53,131,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(39,53,131,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Texas-New Mexico Power Company':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,39,129,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(61,39,129,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_texas_iou_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("COMPANY_NAME");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Liberation Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_texas_iou_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
