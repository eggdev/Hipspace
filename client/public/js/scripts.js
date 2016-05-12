

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
    $logoBox.css("top",  ($scrolled * .5) + "px");
// custom hipscore
    var $currentTop = $("#main-content").css("top")
    var $content = $("#main-content");
    $content.css('top', $currentTop + (($scrolled * -1) + "px"));
});

// MODAL FUNCTIONS
// function modal(){
//   $('.ui.modal')
//   .modal('show');
// }
// modal();

// LOG IN MODAL - CALLED WHEN GET SCORE BUTTON ON INDEX IS CALLED
function loginModal(){
    $('#get-score-button').click(function(){$('.ui.modal')
        .modal('show')
    });
}
loginModal();

function loginModalHeader(){
    $('#log-in-header-button').click(function(){$('.ui.modal')
        .modal('show')
    });
}
loginModalHeader();

function loginModalAfterQuiz(){
    $('#loginquiz').click(function(){$('.ui.modal')
        .modal('show')
    });
}
loginModalAfterQuiz();

// CHECKBOX FUNCTIONS
function checkbox(){
  $('.ui.checkbox')
  .checkbox();
}
checkbox();

$(".ui.checkbox").on('click', function(){
  // checkbox();
  clearMarkers();
  getChecked();
})

var map;
var markers = [];
function initMap() {
  var myLatLng = {lat: parseFloat($('#hiddenlat').text()), lng: parseFloat($('#hiddenlong').text())};
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    draggable: false,
    zoom: 15
  });
}

function getChecked(){
  var $location = $('#hiddenloc').text();
  var $inputs = $('.checked').find('input');
  var allInputs = $('.ui.toggle.checkbox');
  console.log($inputs);
  for(var i=0; i < $inputs.length; i++){
    $.ajax({
      index: i,
      method: 'get',
      url: '/api/locations/'+$location,
      success: function(data){
        createMarkers( data, $inputs[this.index].name );
      }
    });
  }
}

function createMarkers( location, category ){
  for(var i=0; i< location.venues.length; i++){
    if(location.venues[i].category == category ){
      // console.log( location.venues[i] );
      venueLoc = {lat: parseFloat(location.venues[i].lat), lng: parseFloat(location.venues[i].long) }
      // var iconBase = '/images/'
      var marker = new google.maps.Marker({
        position: venueLoc,
        map: map
        // icon: {url: iconBase + 'yoga.svg', scaledSize: new google.maps.Size(40,40)}
      });
      markers.push(marker);
    }
  }
}

function addVenueInfo( venue, marker) {
  console.log(marker);
  var infowindow = new google.maps.InfoWindow();
  marker.addListener('click', function(){
    console.log('marker clicked');
    infowindow.open(map, this);
    var contentStr = '<h5>'+venue.name+'</h5>';
    infowindow.setContent(contentStr);
  });
}


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}



// DROPDOWN FUNCTIONS
function dropdown(){
    $('.ui.dropdown')
  .dropdown({
    maxSelections: 1
  });
}
dropdown();


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
