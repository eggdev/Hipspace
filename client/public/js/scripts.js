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

// $(function(){
//   $('a.item').click(function(){
//     $('.item').removeClass('active');
//     $(this).addClass('active');
//   });
//   $('.accordion').accordion();
// });


// PARALLAX FUNCTIONS - CC

// this sets the scroll on the window
  $(window).on("scroll", function(){

    var $height = $(window).height();
    var $scrolled = $(window).scrollTop();

// background

    var $background = $('.bg');
    $background.css("top", ($scrolled * -1) + "px");

    var $scoreBox = $('.break');
    $scoreBox.css("top", ($scrolled * 1.5) + "px");

})

// MODAL FUNCTIONS

// SIMPLE VERSION
// function modalOne(){
//   $('.ui.basic.modal')
//     .modal('show');
// }
// modalOne();

// CARD VERSION
function modalTwo(){
  $('.ui.modal')
  .modal('show');
}
modalTwo();
