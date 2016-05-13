var express = require('express');
var router = express.Router();
var passport = require('../lib/passportStrategy.js');
var User = require('../models/user.js');
var Location = require( '../models/location.js');
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/

// Gets the index page
router.get('/', function(req, res, next) {
  res.render('index');
});

// Gets the terms and conditions page
router.get('/terms', function(req, res, next){
  res.render('terms');
});

//Protects the following routes
router.use( passport.authenticate("jwt", { session: false }) );

//Gets the hipmap based on the score that the user has. Matches the users score with the locations score
router.get('/hipmap', function(req, res, next){
  var currentUser = req.user;
    Location.findOne({score: currentUser.hipscore }, function(err, locationData){
      res.render('hipmap', { userData: currentUser, locationData: locationData })
    });
});


//Gets the profile route based on the users information. It puts down all the users info and the map info so that all is accessible on the users profile page.
router.get('/profile', function(req, res, next) {
  var currentUser = req.user;
  if(currentUser){
    Location.findOne({score: currentUser.hipscore }, function(err, locationData){
      res.render('profile', { userData: currentUser, locationData: locationData })
    });
  }
});


//Gets the ajax route that was uses for development and seeding the database.
router.get('/ajax', function(req, res, next){
  var currentUser = JSON.parse(req.cookies.current_user);
  User.findOne({username: currentUser.username }, function(err, userData){
    Location.findOne({score: userData.hipscore }, function(err, locationData){
      res.render('ajax', { userData: userData, locationData: locationData })
    });
  })
})

//Accesses our Foursquare api.
router.get('/api/foursquare', function(req, res){
  res.json(data);
})


module.exports = router
