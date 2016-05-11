$(document).ready(function(){
  console.log('maps');
})

var hipspace = {};

var map;

function initMap() {
  var myLatLng = {lat: parseFloat($('#hiddenlat').text()), lng: parseFloat($('#hiddenlong').text())};
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 15
  });
}


function addScore(){
  var $hipscore = 0;
  $inputs = $('.checked').find('input');
  for (var i = 0; i < $inputs.length; i++) {
    $numString = $inputs[i].value;
    $num = parseInt($numString);
    $hipscore = $hipscore + $num;
  };
  $("#score").empty();
  $("#score").append($hipscore);
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
var map;
var markers = [];
function initMap() {
  var myLatLng = {lat: parseFloat($('#hiddenlat').text()), lng: parseFloat($('#hiddenlong').text())};
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    draggable: false,
    zoom: 15
  });
}

function getChecked(){
  var $location = $('#hiddenloc').text();
  var $inputs = $('.checked').find('input');
  var allInputs = $('.ui.toggle.checkbox');
  console.log($inputs);
  for(var i=0; i < $inputs.length; i++){
    $.ajax({
      index: i,
      method: 'get',
      url: '/api/locations/'+$location,
      success: function(data){
        createMarkers( data, $inputs[this.index].name );
      }
    });
  }
}
function createMarkers( location, category ){
  for(var i=0; i< location.venues.length; i++){
    if(location.venues[i].category == category ){
      console.log( location.venues[i] );
      venueLoc = {lat: parseFloat(location.venues[i].lat), lng: parseFloat(location.venues[i].long) }
      // var iconBase = '/images/'
      var marker = new google.maps.Marker({
        position: venueLoc,
        map: map
        // icon: {url: iconBase + 'yoga.svg', scaledSize: new google.maps.Size(40,40)}
      });
      markers.push(marker);
    }
  }
}
