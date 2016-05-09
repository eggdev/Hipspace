// CC -- PLAYING WITH SEMANTIC UI ELEMENTS

// $(function(){
//   $('a.item').click(function(){
//     $('.item').removeClass('active');
//     $(this).addClass('active');
//   });
//   $('.accordion').accordion();
// });

// $(function(){
//   $('.ui.checkbox')
//     .checkbox();
// }

// SIGNUP FORM VALIDATION

$('.ui.form')
  .form({
    fields: {
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          },
          {
            type   : 'minLength[6]',
            prompt : 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
      terms: {
        identifier: 'terms',
        rules: [
          {
            type   : 'checked',
            prompt : 'You must agree to the terms and conditions'
          }
        ]
      }
    }
  })
;


// PARALLAX FUNCTIONS - CC

// this sets the scroll on the window
  $(window).on("scroll", function(){

    var $height = $(window).height();
    var $scrolled = $(window).scrollTop();

// background

    var $background = $('.bg');
    $background.css("top", ($scrolled * -1) + "px");
    // var $logoBox = $('#big-logo');
    // $logoBox.css("top", ($scrolled * -1) + "px");

    var $scoreBox = $('.hipscore');
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
