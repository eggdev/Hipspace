$(function(){
  checkbox();
  movingOwl();
  $('select.dropdown').dropdown();

})

function checkbox(){
   $('.ui.checkbox').checkbox();
}


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
