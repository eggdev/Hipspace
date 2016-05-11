$(document).ready(function(){
  console.log('maps');
})

var map;

function initMap() {
  var myLatLng = {lat: parseFloat(williamsburg.latitude), lng: parseFloat(williamsburg.longitude)};
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 15
  });
}

hipspace.createMarkers = function(){
  for(var i=0; i< williamsburg.venues.length; i++){
    if(williamsburg.venues[i].category == 'Yoga Studio'){
      venueLoc = {lat: williamsburg.venues[i].lat, lng: williamsburg.venues[i].long }
      var iconBase = '/images/'
      var marker = new google.maps.Marker({
        position: venueLoc,
        map: map,
        icon: {url: iconBase + 'yoga.svg', scaledSize: new google.maps.Size(40,40)}
      });
    }
    console.log("yo");
  }
}
