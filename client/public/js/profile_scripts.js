$(function(){
  checkbox();
  movingOwl();
  $('select.dropdown').dropdown();
  newScore();
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

function addScore(){
  var $hipscore = 0;
  $inputs = $('.checked').find('input');
  for (var i = 0; i < $inputs.length; i++) {
    $numString = $inputs[i].value;
    $num = parseInt($numString);
    $hipscore = $hipscore + $num;
  };
  $("#score").empty();
  $("#score").append($hipscore);
}

function newScore(){
  $("#save-preferences-button").on('click',function(){
    addScore();
  })
}
