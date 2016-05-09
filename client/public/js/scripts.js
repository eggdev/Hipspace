

// SIGNUP FORM VALIDATION
// function formSubmit (){
//
//   $('.ui.signup form')
//     .form({
//       fields: {
//         username: {
//           identifier: 'username',
//           rules: [
//             {
//               type   : 'empty',
//               prompt : 'Please enter a username'
//             }
//           ]
//         },
//         email: {
//           identifier  : 'email',
//           rules: [
//             {
//               type   : 'email',
//               prompt : 'Please enter a valid e-mail'
//             }
//           ]
//         },
//         password: {
//           identifier: 'password',
//           rules: [
//             {
//               type   : 'empty',
//               prompt : 'Please enter a password'
//             },
//             {
//               type   : 'minLength[6]',
//               prompt : 'Your password must be at least {ruleValue} characters'
//             }
//           ]
//         },
//         terms: {
//           identifier: 'terms',
//           rules: [
//             {
//               type   : 'checked',
//               prompt : 'You must agree to the terms and conditions'
//             }
//           ]
//         }
//       }
//     });
// }
// formSubmit();

// FORM VALIDATION NOT WORKING
// $('.ui.form').form(validationRules, { onSuccess: submitForm });
// END FORM VALIDATION NOT WORKING

// BEGINNING OF LATEST VERSION FORM VALIDATION
$(document).ready(function() {

// validation
 $('.ui.form').form({
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'email',
          prompt : 'Please enter an email'
        }
      ]
    }
},
{
    inline: true,
    on: 'blur',
    transition: 'fade down',
    onSuccess: validationpassed
});

// called if correct data added to form
function validationpassed() {

    // Multiple instances may have been bound to the form, only submit one.
    // This is a workaround and not ideal.
    // Improvements welcomed.

    if (window.lock != "locked") {
        var myform = $('.ui.form');
        $.ajax({
            type: myform.attr('method'),
            url: myform.attr('action'),
            data: myform.serialize(),
            success: function (data) {
                //if successful at posting the form via ajax.
                myformposted(data);
                window.lock = "";
            }
        });
    }
    window.lock = "locked";
}

// stop the form from submitting normally
$('.ui.form').submit(function(e){
    //e.preventDefault(); usually use this, but below works best here.
    return false;
});

function myformposted(data) {
    // clear your form and do whatever you want here
    $('.ui.form').find("input[type=text], textarea").val("");
    //$('.ui.submit.button').after("<div>Message sent. Thank you.</div>");
    $('.ui.submit.button').after(data);
}
});
// END OF FORM VALIDATION


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
