var $hipscore = 0;


function addScore( score ){
  $inputs = $('.checked').find('input');
  for (var i = 0; i < $inputs.length; i++) {
    $numString = $inputs[i].value;
    $num = parseInt($numString);
    score += $num;
  }
  return score;
}


function createUser(){
  var userInfo = {};
  userInfo.username = $('#newusername').val();
  userInfo.email = $('#newemail').val();
  userInfo.password = $('#newpassword').val();
  userInfo.hipscore = addScore( $hipscore );
  console.log( userInfo.hipscore );
  $.ajax({
    method: 'post',
    url: '/api/users',
    data: userInfo,
    success: function(data){
      console.log("SUCCESS IN MIGHTY HIGHGARDEN");
      //Log user in,
      //Get rid of the modal,
      //Have them take quiz
      var payload = { username: userInfo.username, password: userInfo.password };
      $.ajax({
        method: 'post',
        url: '/api/auth',
        data: payload,
        success: function(data){
          Cookies.set('jwt_token', data.token);
          Cookies.set('current_user', data.current_user);
          window.location.replace('/hipmap');
        }
      })
    }
  });
}
  // login on click
  // prev default
  // get fields (username/pass) in object - payload
  // ajax post to api/auth
  // data is payload
  // on success, cookies.set user_token, data.token
  // cookes.set current_user, data.current_user
  // redirect to whatever

function loginUser(){
  $('#login-form').on('submit', function(e){
    e.preventDefault();
    var username = $('#username').val();
    var password = $("#password").val();
    var payload = { username: username, password: password };
    $('#login-submit').addClass('loading');
    console.log(username, password);
    $.ajax({
      method: 'post',
      url: '/api/auth',
      data: payload,
      success: function(data){
        Cookies.set('jwt_token', data.token);
        Cookies.set('current_user', data.current_user);
        window.location = '/hipmap';
      }
    });
  });
}
function updateScore(){
  var id = $("#userID").text();
  var newScore = 0;
  $("#preferences-form").on('click', '#save-preferences-button', function(e){
    e.preventDefault();
    var newUsername = $('#profile-form #username').val();
    var newPassword = $('#profile-form #password').val();
    var newEmail = $('#profile-form #email').val();
    var hipscore = addScore(newScore);
    console.log(hipscore);
    var payload = JSON.stringify({username: newUsername,password:newPassword,email:newEmail,hipscore:hipscore});

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


function updateThis(){
  var id = $("#userID").text();
  $("#profile-form").on('click', '#edit-profile-button', function(e){
    e.preventDefault();
    var newUsername = $('#profile-form #username').val();
    var newPassword = $('#profile-form #password').val();
    var newEmail = $('#profile-form #email').val();
    var hipscore = parseInt($('#userScore').text() );
    var payload = JSON.stringify({username: newUsername,password:newPassword,email:newEmail,hipscore:hipscore});

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

function logout(){
  //logout on click
  Cookies.remove('jwt_token');
  Cookies.remove('current_user');
  window.location.replace('/');
}


$(document).ready(function(){
  $('#create-user').on('submit', function(e){
    e.preventDefault();
    createUser();
    $('#apply').addClass('loading');
  });


  loginUser();
  updateThis();
  updateScore();

  $('#logout').on('click', function(e){
    e.preventDefault();
    logout();
  });
});
