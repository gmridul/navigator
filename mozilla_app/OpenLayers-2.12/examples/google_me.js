var map;


function init() {
    map = new OpenLayers.Map({
        div: "map",
        projection: new OpenLayers.Projection("EPSG:900913")
    });
	var markers = new OpenLayers.Layer.Markers( "Markers" );	
    var gmap = new OpenLayers.Layer.Google("Google Streets");
    
    map.addLayers([gmap,markers]);
    var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
	var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
	markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(81.0,24.9),icon));
	markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(81.0,24.9),icon.clone()));
	
    //map.Size(150,150);

    //map.addControl(new OpenLayers.Control.LayerSwitcher());

    map.setCenter(
        new OpenLayers.LonLat(81.0, 24.9).transform(
			new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 
        5
    );
}

