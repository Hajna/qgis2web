var size = 0;
var placement = 'point';
function categories_cali_substations_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'IID':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(209,81,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LADWP':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(202,103,60,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Other':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(144,228,65,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PCORP':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(123,238,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PG&E':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(152,100,205,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SCE':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(231,213,20,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SDG&E':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(19,209,155,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SMUD':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(239,67,222,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WAPA':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(51,171,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,0.8862745098039215)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(52,67,226,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_cali_substations_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Owner");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_cali_substations_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
