var $hipscore = 0;


function addScore(){
  $inputs = $('.checked').find('input');
  for (var i = 0; i < $inputs.length; i++) {
    $numString = $inputs[i].value;
    $num = parseInt($numString);
    $hipscore += $num;
  }
  return $hipscore;
}


function createUser(){
  var userInfo = {};
  userInfo.username = $('#newusername').val();
  userInfo.email = $('#newemail').val();
  userInfo.password = $('#newpassword').val();
  userInfo.hipscore = addScore();
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
  $('#login-submit').on('click', function(e){
    e.preventDefault();
    var username = $('#username').val();
    var password = $("#password").val();
    var payload = { username: username, password: password };
    console.log(username, password);
    $.ajax({
      method: 'post',
      url: '/api/auth',
      data: payload,
      success: function(data){
        Cookies.set('jwt_token', data.token);
        Cookies.set('current_user', data.current_user);
        window.location.replace('/hipmap');
        //Don't reload when live, but call the remove modal function.
      }
    });
  });
}

function editUser(){

}

function logout(){
  //logout on click
  Cookies.remove('jwt_token');
  Cookies.remove('current_user');
  window.location.replace('/');
}


$(document).ready(function(){
  $('#apply').on('click', function(e){
    e.preventDefault();
    createUser();
  });

  loginUser();
  // addScore();
  $('#edit').on('click', function(e){
    e.preventDefault();
    console.log('waddup');
  })

  $('#logout').on('click', function(e){
    e.preventDefault();
    logout();
  });
});
