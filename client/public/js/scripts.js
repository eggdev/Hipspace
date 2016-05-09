// THIS CAN ALL BE DELETED EVENTUALLY SO I CAN HAVE MY OWN FRONT END JS FILE TO WORK IN -- RIGHT?????

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
function modal(){
  $('.ui.modal')
  .modal('show');
}
modal();


// SOCIAL MEDIA BUTTON JIGGGLE - NOT WORKING
// function jiggle(){
//
// $('.social-buttons.button')
//   .transition({
//     animation : 'jiggle',
//     duration  : 800,
//     interval  : 200
//   });
// };
// jiggle();


// CAROUSEL - INSTEAD OF MODAL FOR QUIZ, ETC., WHAT ABOUT A CAROUSEL?
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     animateOut: 'slideOutDown',
//     animateIn: 'flipInX',
//     items:1,
//     margin:30,
//     stagePadding:30,
//     smartSpeed:450
// });
// });
// END CAROUSEL
