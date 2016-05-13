$(function(){
  checkbox();
  movingOwl();
  dropdown();
})

//semantic requirements for the toggles and dropdowns to run
function checkbox(){
   $('.ui.checkbox').checkbox();
}

function dropdown(){
  $('select.dropdown').dropdown();
}

// this function moves the owl across the bottom of the profile screen
function movingOwl(){
  var $owl = $("#owl");
  var distance = 1200;
  setInterval(function(){
    $owl.css('left', distance + 'px');
    if(distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 80);
}
