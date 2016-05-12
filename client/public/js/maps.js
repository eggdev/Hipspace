$(".ui.checkbox").on('click', function(){
  // checkbox();
  clearMarkers();
  getChecked();
})

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
// These are the specific categories we need to return
// 'Dive Bar'
// 'Dog Park'
// 'Yoga Studio'
// 'Indie Movie Theater'
// 'Thrift / Vintage Store'
// 'Record Shop'
// 'Coffee Shop'
// 'Bike Shop'
// 'Farmers Market'
// 'Street Fair'
// 'Art Gallery'
// 'Distillery'
function categorizePlaces( category ){
  if ( category == 'Speakeasy' || category == 'American Restaurant' || category == 'Bar' || category == 'Sake Bar' || category == 'Beer Garden' || category == 'Gastropub' || category == 'Brewery' || category == 'Pub'){
    return 'Dive Bar';
  }
  else if( category == 'Dog Run' || category == "Playground" || category == 'Park' || category == 'Other Great Outdoors' || category == 'Track'){
    return 'Dog Park';
  }
  else if ( category == 'Gym / Fitness Studio' || category == 'Massage Studio' || category == 'Athletics & Sports' || category == 'Cycle Studio' || category == 'Gym'){
    return 'Yoga Studio';
  }
  else if ( category == 'Theater' || category == 'Performing Arts Venue' || category == 'General Entertainment' || category == 'Movie Theater'|| category == 'Music Venue' ){
    return 'Indie Movie Theater';
  }
  else if ( category == 'Antique Shop' || category == 'Miscellaneous Shop' || category == 'Clothing Store' || category == 'Bookstore'){
    return 'Thrift / Vintage Store';
  }
  else if ( category == 'Coffee Shop' || category == 'Pet Café' || category == 'Pet Café' || category == 'Café'){
    return 'Coffee Shop';
  }
  else if ( category == 'Bike Rental / Bike Share' ){
    return 'Bike Shop';
  }
  else if ( category == 'Farm' || category == 'Vegetarian / Vegan Restaurant' ){
    return 'Farmers Market';
  }
  else if ( category == 'Plaza' || category == 'Street Food Gathering' || category == 'Flea Market'){
    return 'Street Fair';
  }
  else if ( category == 'Photography Lab'){
    return 'Art Gallery';
  }
  else if ( category == 'Whisky Bar' || category == 'Lounge' || category == 'Wine Shop' || category == 'Wine Shop' || category == 'Cocktail Bar'){
    return 'Distillery';
  }
  else {
    return category;
  }
}



function getImageFromFolder( cat ){
  if( cat == 'Yoga Studio'){
    return 'yoga';
  }
  else if( cat == 'Dive Bar'){
    return 'beer';
  }
  else if( cat == 'Dog Park'){
    return 'dog-paw';
  }
  else if ( cat == 'Indie Movie Theater'){
    return 'theater-film';
  }
  else if ( cat == 'Thrift / Vintage Store'){
    return 'thrift-store';
  }
  else if ( cat == 'Record Shop'){
    return 'record';
  }
  else if ( cat == 'Coffee Shop'){
    return 'coffee';
  }
  else if ( cat == 'Bike Shop'){
    return 'bike';
  }
  else if ( cat == 'Farmers Market'){
    return 'farmers-market';
  }
  else if ( cat == 'Street Fair'){
    return 'fair-stand';
  }
  else if ( cat == 'Art Gallery'){
    return 'art';
  }
  else if ( cat == 'Distillery'){
    return 'whisky';
  }
  // KEEP GOING!
}



function createMarkers( location, category ){
  for(var i=0; i< location.venues.length; i++){
    if(categorizePlaces(location.venues[i].category) == category ){
      // `console.log`( location.venues[i] );
      venueLoc = {lat: parseFloat(location.venues[i].lat), lng: parseFloat(location.venues[i].long) }
      var catImage = getImageFromFolder( category );
      console.log(catImage);
      var iconBase = '/images/';

      var marker = new google.maps.Marker({
        position: venueLoc,
        map: map,
        icon: {url: iconBase+catImage+'.svg', scaledSize: new google.maps.Size(30,30)}
      });
      addVenueInfo( location.venues[i], marker);
      markers.push(marker);
    }
  }
}

function addVenueInfo( venue, marker) {
  // console.log(marker);
  var infowindow = new google.maps.InfoWindow({content: '<p>PIZZA</p>'});
  marker.addListener('click', function(){
    infowindow.open(map, this);
    var contentStr = '<h5>'+venue.name+'</h5>';
    infowindow.setContent(contentStr);
  });
}


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
