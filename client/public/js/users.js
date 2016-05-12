$(document).ready(function(){
  $('#create-user').on('submit', function(e){
    e.preventDefault();
    var userInfo = {};
    userInfo.username = $('#newusername').val();
    userInfo.email = $('#newemail').val();
    userInfo.password = $('#newpassword').val();

    $.ajax({
      method: 'post',
      url: '/api/users',
      data: userInfo,
      success: function(){
        console.log("SUCCESS IN MIGHTY HIGHGARDEN");
        //Log user in,
        //Get rid of the modal,
        //Have them take quiz
      }
    });
  });
  // login on click
  // prev default
  // get fields (username/pass) in object - payload
  // ajax post to api/auth
  // data is payload
  // on success, cookies.set user_token, data.token
  // cookes.set current_user, data.current_user
  // redirect to whatever
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

  $('#edit').on('click', function(e){
    e.preventDefault();
  })


  //logout on click
  $('#logout').on('click', function(e){
    e.preventDefault();
    Cookies.remove('jwt_token');
    Cookies.remove('current_user');
    window.location.replace('/');
  });
});
