// Store our API endpoint inside queryUrl
var queryUrl = "https://data.sfgov.org/resource/5cei-gny5.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    console.log(data);
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(SFevictionData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the eviction
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3> Eviction ID: " + feature.properties.eviction_id +
      "</h3><hr><p> SF Neighborhood: " + feature.properties.neighborhood + "</p>" + "<hr><p>Date of Notice: " + new Date(feature.properties.file_date) + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the SF evictions object
  // Run the onEachFeature function once for each piece of data in the array
  var evictions = L.geoJSON(SFevictionData, {
    onEachFeature: onEachFeature
  });

  // Sending our evictions layer to the createMap function
  createMap(evictions);
}

function createMap(evictions) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Evictions: evictions
  };

  // Create our map, giving it the streetmap and eviction layers to display on load
  var myMap = L.map("map", {
    center: [
        37.7749, -122.4194
    ],
    zoom: 13,
    layers: [streetmap, evictions]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

L.choropleth(geojsonData, {
	valueProperty: 'eviction_id', // which property in the features to use
	scale: ['white', 'red'], // chroma.js scale - include as many as you like
	steps: 5, // number of breaks or steps in range
	mode: 'q', // q for quantile, e for equidistant, k for k-means
	style: {
		color: '#fff', // border color
		weight: 2,
		fillOpacity: 0.8
	},
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.value)
	}
}).addTo(map)
