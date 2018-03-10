require([
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!",
],function(Map, MapView) { 
    var map = new Map({
	basemap: "gray-vector"
    });

    var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [-98.58, 39.83], // center map at center of US
	zoom: 4
    });
});
