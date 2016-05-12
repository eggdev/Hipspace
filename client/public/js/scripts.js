
// SIGNUP FORM VALIDATION - NOT WORKING???? PROBABLY NEEDS TO BE DELETED

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
    //
    // $('.ui.submit.button').after("<div>Message sent. Thank you.</div>");
    $('.ui.submit.button').after(data);
    }
});
// END OF FORM VALIDATION


// THIS FUNCTION CONTROLS THE PARALLAX ON THE HIPMAP PAGE

// this sets the scroll on the window
  $(window).on("scroll", function(){
    var $height = $(window).height();
    var $scrolled = $(window).scrollTop();
// this sets the background scroll
    var $background = $('.bg');
    $background.css("top", ($scrolled * -1) + "px");
// this sets the logo bar scroll
    var $logoBox = $('#big-logo');
    $logoBox.css("top",  ($scrolled * .5) + "px");
// this sets the custom hipscore box + ad box scroll (these divs are slaved)
    var $currentTop = $("#main-content").css("top")
    var $content = $("#main-content");
    $content.css('top', $currentTop + (($scrolled * -1) + "px"));
});


// THIS FUNCTION TRIGGERS THE LOGIN MODAL WHEN YOU CLICK THE BUTTON IN THE HEADER
function loginModalHeader(){
    $('#log-in-header-button').click(function(){$('.ui.modal')
        .modal('show')
    });
}
loginModalHeader();


// THIS FUNCTION CONTROLS THE LOGIN MODAL AFTER YOU TAKE THE QUIZ
function loginModalAfterQuiz(){
    $('#loginquiz').click(function(){$('.ui.modal')
        .modal('show')
    });
}
loginModalAfterQuiz();


// THIS FUNCTION CONTROLS THE ANCHOR LINK ON THE INDEX PAGE AND PREVENTS IT FROM CHANGING THE ADDRESS IN THE BROWSER'S NAVIGATION
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// THIS FUNCTION CONTROLS ALL CHECKBOXES
function checkbox(){
  $('.ui.checkbox')
  .checkbox();
}
checkbox();


// THIS FUNCTION CONTROLS ALL DROPDOWNS
function dropdown(){
    $('.ui.dropdown')
  .dropdown({
    maxSelections: 1
  });
}
dropdown();
