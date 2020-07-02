// Query the data set 
var myMap = L.map("map", {
    center: [37.7704655,-122.4335514],
    zoom: 13
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

var newtry = "sfRealEstate.json";

d3.json(newtry, function(response) {
  
  console.log(response);

  for (var i = 0; i < response.length; i++) {
   
    var lat = response[i].lat;
    var lng = response[i].lng;
       
        // console.log(lat)
        // console.log(lng)   
    L.marker([lat, lng]).addTo(myMap);
    
  }
}
);
// var location = parseFloat(lat);
      // console.log(lat)
