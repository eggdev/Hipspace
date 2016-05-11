$(document).ready(function(){
  $('#create-user').on('submit', function(e){
    e.preventDefault();
    var userInfo = {};
    userInfo.username = $('#username').val();
    userInfo.email = $('#email').val();
    userInfo.password = $('#password').val();

    $.ajax({
      method: 'post',
      url: '/api/users',
      data: userInfo,
      success: function(){
        console.log("SUCCESS IN MIGHTY HIGHGARDEN");
      }
    })
  })
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
    var username = $('#login-form').find('[name=username]').val();
    var password = $("#login-form").find('[name=password]').val();
    var payload = { username: username, password: password };
    console.log(payload);
    $.ajax({
      method: 'post',
      url: '/api/auth',
      data: payload,
      success: function(data){
        Cookies.set('jwt_token', data.token);
        Cookies.set('current_user', data.current_user);
        window.location.replace('/');
        //Don't reload when live, but call the remove modal function.
      }
    });
  });


  //logout on click
  $('#logout').on('click', function(e){
    e.preventDefault();
    Cookies.remove('user_token');
    window.location.reload();
  })
})
