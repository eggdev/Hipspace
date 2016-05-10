console.log('sessions');
var sessions = {};

//1 and 2
var redirect = function(){
  var client_id = 'b0fa16e505be4069a9609c96164c8c08';

  var baseUrl = 'https://accounts.spotify.com/authorize';

  var queryParams = [
    'client_id=b0fa16e505be4069a9609c96164c8c08',
    'response_type=token',
    'redirect_uri=http://localhost:3000',
    'state=spotify_authorization_redirect',
    'scope=user-read-email playlist-read-private'
  ].join('&');

  window.location = baseUrl + '?' + queryParams;
}

//3
var getFromHash = function( param ){
  // Hash string, contains the hash character
  var hash = window.location.hash;
  //remove first character
  hash = hash.substr(1).split('&');
  //Returns only elements that match param criteria
  hash = hash.filter(function( paramString ){
    return paramString.indexOf(param) >= 0;
  });
  return hash.length ? hash[0].split('=')[1] : null;
}

//4
var handleSpotifyRedirection = function(){
  var token = getFromHash('access_token');
  var state = getFromHash('state');

  if(token && state){
    //set the cookie
    Cookies.set('spotify_token', token);
    window.location.hash = '';
  }
}


// ----------------------------
// Utility Functions

function isLoggedInToSpotify(){
  var token = Cookies.get('spotify_token');
  return token ? true : false;
}

function setLoggedInState(){
  var token = Cookies.get('spotify_token');
  $.ajax({
    url: 'https://api.spotify.com/v1/me',
    headers: {
      "Authorization":"Bearer "+ token
    },
    success: function(response){
      spotifyUser = response;

      var h3 = $('<h3>').text(spotifyUser.id);
      $('header').append(h3);
      $('#login').hide();
      $('#logout').show();

      getUserPlaylists();
    }
  })
}

function getUserPlaylists(){
  var token = Cookies.get('spotify_token');
  $.ajax({
    url: 'https://api.spotify.com/v1/users/'+spotifyUser.id+'/playlists',
    headers: {
      'Authorization': "Bearer "+token
    },
    success: function(response){
      console.log(response);
      renderPlaylist(response);
    }
  })
}

function renderPlaylist(response){
  var playlistsArray = response.items;
  for(var i=0; i< playlistsArray.length; i++){
    var playlist = $('<li>');
    // var image = $('<img>').attr('src', playlistsArray[i].images[0].url);
    var name = $('<h4>').text(playlistsArray[i].name);
    playlist.append(name);
    $('#playlist').append(playlist);
  }
}

function setLoginLinkHandler(){
  $('#login').on('click', function(e){
    e.preventDefault();
    redirect();
  });
}

function setLogoutLinkHandler(){
  $('#logout').on('click', function(e){
    e.preventDefault();
    Cookies.remove('spotify_token');
    window.location.reload();
  });
}

function init(){
  handleSpotifyRedirection();
  if( isLoggedInToSpotify()){
    setLoggedInState();
  }
}

$(document).ready(function(){
  init();
  setLoginLinkHandler();
  setLogoutLinkHandler();
})
