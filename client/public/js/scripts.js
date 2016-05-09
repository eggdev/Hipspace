

// SIGNUP FORM VALIDATION
function formSubmit (){

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
    });
}
formSubmit();


// PARALLAX FUNCTIONS - CC

// this sets the scroll on the window
  $(window).on("scroll", function(){

    var $height = $(window).height();
    var $scrolled = $(window).scrollTop();
// background
    var $background = $('.bg');
    $background.css("top", ($scrolled * -1) + "px");
// logo bar thing
    var $logoBox = $('#big-logo');
    $logoBox.css("top", ($scrolled * -2) + "px");
// custom hipscore
    var $scoreBox = $('#hipscore');
    $scoreBox.css("top", ($scrolled * -2) + "px");
// dummy listings + ads
    var $listingBox = $('#adspace');
    $listingBox.css("top", ($scrolled * -2) + "px");
});

// MODAL FUNCTIONS
function modal(){
  $('.ui.modal')
  .modal('show');
}
modal();

// CHECKBOX FUNCTIONS
function checkbox(){
  $('.ui.checkbox')
  .checkbox()
;
}
checkbox();


// SOCIAL MEDIA BUTTON JIGGGLE - NOT WORKING
function jiggle(){

$('.social-buttons.button')
  .transition({
    animation : 'jiggle',
    duration  : 800,
    interval  : 200
  });
};
jiggle();
