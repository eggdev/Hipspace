// THIS CAN ALL BE DELETED EVENTUALLY SO I CAN HAVE MY OWN FRONT END JS FILE TO WORK IN -- RIGHT?????

// var hipspace = {};
//
// hipspace.getYelpAPI = function(){
//   $.getJSON('/api/yelp', function(data){
//     console.log(data);
//   })
// }
//
// hipspace.getGooglePlacesAPI = function(){
//   // $.getJSON('https://')
// }
//
//
//
//
// $(function() {
//   console.log('scripts loaded...');
//   hipspace.getYelpAPI();
// });

// CC -- PLAYING WITH SEMANTIC UI ELEMENTS

$(function(){
  $('a.item').click(function(){
    $('.item').removeClass('active');
    $(this).addClass('active');
  });
  $('.accordion').accordion();
});
