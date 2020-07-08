
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

// var sfRealEstate = "sfRealEstate.json"
d3.csv('static/real_estate.csv', function(response) {
  
  console.log(response);

  for (var i = 0; i < response.length; i++) {
   
    var lat = response[i].lat;
    var lng = response[i].lng;
    var property = response[i].property_type;
    var price = response[i].price;
    var address = response[i].address;
    var area = response[i].sqfoot;
       
        // console.log(lat)
        // console.log(lng)   
    L.marker([lat, lng])
    .bindPopup("<h3>Type:" + property + "</h3><h3>Price $: "+ price + 
    "</h3><h3>Address: " + address + "</h3><h3>Area: " + area + "</h3>")
    .addTo(myMap);
    
  }
}
);
// var location = parseFloat(lat);
      // console.log(lat)
