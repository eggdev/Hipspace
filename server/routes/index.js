var express = require('express');
var router = express.Router();

var User = require('../models/user.js');
var Location = require( '../models/location.js');
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/


router.get('/', function(req, res, next) {
  var currentUser = JSON.parse(req.cookies.current_user);
  if(currentUser){
    console.log(currentUser);
    User.findOne({username: currentUser.username }, function(err, userData){
      Location.findOne({score: userData.hipscore }, function(err, locationData){
        res.render('index', { userData: userData, locationData: locationData })
      });
    });
  }else {
    res.render('login_modal');
  }
});


router.get('/profile', function(req, res, next) {
  res.render('profile');
});


router.get('/ajax', function(req, res, next){
  var currentUser = JSON.parse(req.cookies.current_user);
  User.findOne({username: currentUser.username }, function(err, userData){
    Location.findOne({score: userData.hipscore }, function(err, locationData){
      res.render('ajax', { userData: userData, locationData: locationData })
    });
  })
})

router.get('/login', function(req, res, next){
  res.render('login_modal');
})

router.get('/api/foursquare', function(req, res){
  res.json(data);
})

module.exports = router;
