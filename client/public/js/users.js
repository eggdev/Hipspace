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
})
