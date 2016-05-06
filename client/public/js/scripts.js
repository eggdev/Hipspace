$(function() {
  console.log('scripts loaded...');
  $.getJSON('/api/yelp', function(data){
    console.log(data);
  })
});
