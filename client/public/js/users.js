var $hipscore = 0;

//Updates the score of the hipscore based on the variable that is passed. Is used to create the initial score from the index page as well as update the score on the profile page.
function addScore( score ){
  $inputs = $('.checked').find('input');
  for (var i = 0; i < $inputs.length; i++) {
    $numString = $inputs[i].value;
    $num = parseInt($numString);
    score += $num;
  }
  return score;
}

//This function will gather the information from the create user form when the form is submitted and passes it to an AJAX call to the API/USERS database. It will then post the information and make another call to the API/AUTH route to create tokens so the user can be considered logged in.
function createUser(){
  $('#create-user').off().on('submit', function(e){
    e.preventDefault();
    $('#apply').addClass('loading');
    var userInfo = {};
    userInfo.username = $('#newusername').val();
    userInfo.email = $('#newemail').val();
    userInfo.password = $('#newpassword').val();
    userInfo.hipscore = addScore( $hipscore );
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
            window.location = '/hipmap';
          },
          error: function(data){
            console.log(data);
          }
        })
      }
    });
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

// This is used on the profile.ejs page. It takes the information from the updated profile form page and applies it with a new hipscore to the the database. It updates the information so that the user can update both the name and email as well as the score.
function updateScore(){
  var id = $("#userID").text();
  var newScore = 0;
  $("#preferences-form").on('click', '#save-preferences-button', function(e){
    e.preventDefault();
    var newUsername = $('#profile-form #username').val();
    var newEmail = $('#profile-form #email').val();
    var hipscore = addScore(newScore);
    var payload = JSON.stringify({username: newUsername ,email:newEmail,hipscore:hipscore});
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

//This is used so that the user is able to update only their information, such as name and email. It will keep their score the same. This is so that people don't update just thier username and password and their score gets set to 0 or adds unintentially. It will update only if they actively attempt to update it.
function updateThis(){
  var id = $("#userID").text();
  $("#profile-form").on('click', '#edit-profile-button', function(e){
    e.preventDefault();
    var newUsername = $('#profile-form #username').val();
    var newEmail = $('#profile-form #email').val();
    var hipscore = parseInt($('#userScore').text() );
    var payload = {username: newUsername,email:newEmail,hipscore:hipscore};

    $.ajax({
      url: '/api/users/'+id,
      method: 'put',
      data: payload,
      success: function(response){
        window.location.reload();
      }
    });
  });
}

//Removes the cookies from the page.
function logout(){
  //logout on click
  Cookies.remove('jwt_token');
  Cookies.remove('current_user');
  window.location = '/';
}

// Runs all the functions for the document.
$(document).ready(function(){
  createUser();
  loginUser();
  updateThis();
  updateScore();

  $('#logout').on('click', function(e){
    e.preventDefault();
    logout();
  });
});
