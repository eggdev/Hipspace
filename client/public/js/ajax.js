var hipspace = {};

//HIPSTER PLACES

//40.689420, -73.968094
var fortGreene = {
  name: "Fort Greene",
  latitude: '40.689420',
  longitude: '-73.968094',
  score: 8,
  venues: []
}

//40.696197, -73.988433
var brooklynHeights = {
  name: 'Brooklyn Heights',
  latitude: '40.696197',
  longitude: '-73.988433',
  score: 7,
  venues: []
}

//40.677178, -74.006497
var redHook = {
  name: 'Red Hook',
  latitude: '40.677178',
  longitude: '-74.006497',
  score: 5,
  venues: []
}

//40.714088, -73.954456
var williamsburg = {
  name: "Williamsburg",
  latitude: '40.714088',
  longitude: '-73.954456',
  score: 11,
  venues: []
}

// 40.722208, -73.986307
var lowerEastSide = {
  name: 'Lower East Side',
  latitude: '40.722208',
  longitude: '-73.986307',
  score: 9,
  venues: [ ]
};

//NON HIPSTER
//40.662206, -73.882501
var eastNewYork = {
  name: "East New York",
  latitude: '40.662206' ,
  longitude: '-73.882501',
  score: 4,
  venues: []
}

//40.834517, -73.917673
var concourse = {
  name: 'Concourse Village',
  latitude: '40.834517',
  longitude: '-73.917673',
  score: 3,
  venues: []
}

//40.644525, -74.010917
var sunsetPark = {
  name: 'Sunset Park',
  latitude: '40.644525',
  longitude: '-74.010917',
  score: 2,
  venues: []
}

//40.745242, -73.866009
var corona = {
  name: 'Corona',
  latitude: '40.745242',
  longitude: '-73.866009',
  score: 1,
  venues: []
}
//
// 40.663867, -73.910267
var brownsville = {
  name: 'Brownsville',
  latitude: '40.663867',
  longitude: '-73.910267',
  score: 0,
  venues: []
}

hipspace.locationArray = [fortGreene, brooklynHeights, redHook, williamsburg, lowerEastSide, eastNewYork, concourse, sunsetPark, corona, brownsville]

var divebarsID = '4bf58dd8d48988d118941735';
var speakeasyID = '4bf58dd8d48988d1d4941735';
var artGalleryID = "4bf58dd8d48988d1e2931735";
var indieMovieTheaterID = '4bf58dd8d48988d17e941735';
var dogParkID = '4bf58dd8d48988d1e5941735';
var thriftStoreID = '4bf58dd8d48988d101951735';
var recordStoreID= '4bf58dd8d48988d10d951735';
var yogaStudioID = '4bf58dd8d48988d102941735';
var farmersMarketID = '4bf58dd8d48988d1fa941735';
var whiskeyBarID = '4bf58dd8d48988d122941735'; //NEW
var streetFairID = '5267e4d8e4b0ec79466e48c5'; //NEW
var bikeShopID = '4bf58dd8d48988d115951735'; //NEW
var petCafeID = '56aa371be4b08b9a8d573508'; //NEW
var distilleryID = '4e0e22f5a56208c4ea9a85a0'; //NEW

hipspace.categoryIds = [
  divebarsID,
  artGalleryID,
  indieMovieTheaterID,
  dogParkID,
  thriftStoreID,
  recordStoreID,
  yogaStudioID,
  farmersMarketID,
  whiskeyBarID,
  streetFairID,
  bikeShopID,
  petCafeID,
  distilleryID,
  speakeasyID
];

hipspace.makeAJAXRequest = function(arr, catID ){
  var apiURL = 'https://api.foursquare.com/v2/venues/explore?intent=browse&ll='+arr.latitude+','+arr.longitude+'&categoryId='+catID+'&client_id=RMA23XH3V05XD5NAPDQPPJYQI3TVEP504H2SJHVITI4PD5OQ&client_secret=FZMII5SMVZBERXDCIUTZCS1YGUCB24QZOMGXVKA5LB5KD2PH&v=20130815'
  $.ajax({
    method: 'get',
    url: apiURL,
    success: function(data){
      var venueArray = data.response.groups[0].items
      // console.log(venueArray);
      for(var i=0; i< venueArray.length; i++){
        var venue = {};
        var distance = venueArray[i].venue.location.distance
        if(distance < 1000){
          venue.name = venueArray[i].venue.name;
          venue.category = venueArray[i].venue.categories[0].name;
          venue.lat = venueArray[i].venue.location.lat;
          venue.long = venueArray[i].venue.location.lng;
          arr.venues.push( venue );
        }
      }
    }
  })
}

hipspace.getAllAPIinfo = function(loc, categories){
  for(var x=0; x<loc.length; x++){
    for(var i=0; i<categories.length; i++){
      hipspace.makeAJAXRequest(loc[x], categories[i] )
    }
  }
}
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
}


$(document).ready(function(){
  $('#button').on('click', function(){
    hipspace.getAllAPIinfo( hipspace.locationArray, hipspace.categoryIds);
  });

  $('#submit').on('click', function(e){
    e.preventDefault();
    locations = [fortGreene, brooklynHeights, redHook, williamsburg, lowerEastSide, eastNewYork, concourse, sunsetPark, corona, brownsville];
    for(var i=0; i< locations.length;i++){
      $.ajax({
        method: 'POST',
        url: '/api/locations',
        data: locations[i],
        success: function(){
          console.log('information sent');
        }
      });
    }
  });

  $('#updateCats').on('click', function(){
    for(var i=0; i < hipspace.locationArray.length; i++){
      var venueArray = hipspace.locationArray[i].venues
      console.log( hipspace.locationArray[i].name);

      for(var x = 0; x < venueArray.length; x++){
        var category = venueArray[x].category;
        if(category == 'Bar'){
          category = 'Dive Bar';
        }
      }
    }
  });

  $('#getLocations').on('click', function(e){
    e.preventDefault();
    $.ajax({
      method:'get',
      url: '/api/locations',
      success: function( locations ){
        // console.log(locations);
        for(var i=0; i<locations.length; i++){
          for(var x=0; x<locations[i].venues.length; x++){
            console.log(locations[i].venues[x].category);
          }
        }
      }
    });
  });
});
