
function getURLVar(urlVarName) {
	//divide the URL in half at the '?'
	var urlHalves = String(document.location).split('?');
	var urlVarValue = '';
	if(urlHalves[1]){
		//load all the name/value pairs into an array
		var urlVars = urlHalves[1].split('&');
		//loop over the list, and find the specified url variable
		for(i=0; i<=(urlVars.length); i++){
			if(urlVars[i]){
				//load the name/value pair into an array
				var urlVarPair = urlVars[i].split('=');
				if (urlVarPair[0] && urlVarPair[0] == urlVarName) {
					//I found a variable that matches, load it's value into the return variable
					urlVarValue = urlVarPair[1];
				}
			}
		}
	}
	return urlVarValue;
}
 
//language param
var locationStr = getURLVar("lang");
if (locationStr) {
	djConfig = {
		parseOnLoad: true,
		locale: locationStr
	};
} else {
	if (document.all) loc = navigator.userLanguage
	else loc = navigator.language;
	djConfig = {
		parseOnLoad: true,
		locale: loc
	};
}

//zoom param
var map_zoom = getURLVar("zoom");
if (map_zoom == '') map_zoom = 1;

//x,y params
var coordx = getURLVar("x");
if (coordx == '') coordx = 150000;
var coordy = getURLVar("y");
if (coordy == '') coordy = 170000;

function map_init(){
	
	// Set map options and initiate map
	bounds = new OpenLayers.Bounds(125755.369856309,157893.305693269,175084.491014552,185238.0478827535);
	
	var options = {
		controls: [],
		maxExtent: bounds,
		minResolution: 0.27164010072961095,
		maxResolution: 46.3021759376852,
		projection: "EPSG:31370",
		units: 'm'
	};
	
	map = new OpenLayers.Map('urbis_map', options);
	
	//setup layers	
	var layerName = "urbisFR";
	if (locationStr == "nl") layerName = "urbisNL";
	layer1 = new OpenLayers.Layer.WMS("Urbis", "http://geoserver.gis.irisnet.be/wms?", {
		layers: layerName,
		format: 'image/png',
		transparent: true
	}, {
		buffer: 0,
		isBaseLayer: true,
		displayInLayerSwitcher: true
	});
	
	map.addLayers([layer1]);
	
	//setup controls and initial zooms
	map.addControl(new OpenLayers.Control.Navigation());
	map.setCenter(new OpenLayers.LonLat(coordx, coordy), map_zoom);
}
