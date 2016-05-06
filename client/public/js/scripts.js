

var hipspace = {};

hipspace.getYelpAPI = function(){
  $.getJSON('/api/yelp', function(data){
    console.log(data);
  })
}

hipspace.getGooglePlacesAPI = function(){
  // $.getJSON('https://')
}




$(function() {
  console.log('scripts loaded...');
  hipspace.getYelpAPI();
});
