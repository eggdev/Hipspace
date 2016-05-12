$(function(){
  checkbox();
  movingOwl();
  raindrop();
  $('select.dropdown').dropdown();
  newScore();
})

function updateThis(){
  var id = $("#userID").text();

  $("#profile-form").on('click', '#edit-profile-button', function(e){
    e.preventDefault();
    var newUsername = $('#profile-form #username').val();
    var newPassword = $('#profile-form #password').val();
    var newEmail = $('#profile-form #email').val();
    var hipscore = $('#userScore').text();
    var payload = JSON.stringify({ username: newUsername, password: newPassword, email: newEmail, hipscore: hipscore });

    $.ajax({
      url: '/api/users/'+id,
      method: 'PUT',
      contentType: 'application/json',
      data: payload,
      success: function(response){
        window.location.reload();
      }
    });
  });

}

updateThis();

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

function raindrop(){
  var $drop = $("#raindrop");
  var distance = 900;
  setInterval(function(){
    $drop.css('top', distance + 'px');
    if(distance < -300) {
      distance = 900;
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
