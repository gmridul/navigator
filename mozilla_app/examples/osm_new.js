var map;
function init() {
    
    // The overlay layer for our marker, with a simple diamond as symbol
    var overlay = new OpenLayers.Layer.Vector('Overlay', {
        styleMap: new OpenLayers.StyleMap({
            externalGraphic: '../img/marker.png',
            graphicWidth: 20, graphicHeight: 24, graphicYOffset: -24,
            title: '${tooltip}'
        })
    });

    // The location of our marker and popup. We usually think in geographic
    // coordinates ('EPSG:4326'), but the map is projected ('EPSG:3857').
    var myLocation = new OpenLayers.Geometry.Point(73.0,18.9)
        .transform('EPSG:4326', 'EPSG:3857');

    // We add the marker with a tooltip text to the overlay
    overlay.addFeatures([
        new OpenLayers.Feature.Vector(myLocation, {tooltip: 'OpenLayers'})
    ]);

    // A popup with some information about our location
    var popup = new OpenLayers.Popup.FramedCloud("Popup", 
        myLocation.getBounds().getCenterLonLat(), null,
        'This is where we are!', null,
        true // <-- true if we want a close (X) button, false otherwise
    );
    
    var osm = new OpenLayers.Layer.OSM();
    // Finally we create the map
    map = new OpenLayers.Map({
        div: "map", projection: "EPSG:3857",
        layers: [osm, overlay],
        center: myLocation.getBounds().getCenterLonLat(), zoom: 5
    });
    // and add the popup to it.
    map.addPopup(popup);
}
