var express = require('express');
var router = express.Router();
var passport = require('../lib/passportStrategy.js');
var User = require('../models/user.js');
var Location = require( '../models/location.js');
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/terms', function(req, res, next){
  res.render('terms');
});


router.use( passport.authenticate("jwt", { session: false }) );

router.get('/hipmap', function(req, res, next){
  var currentUser = req.user;
    Location.findOne({score: currentUser.hipscore }, function(err, locationData){
      if(err){
       console.log(err)
      } else {
        console.log("location data: " + locationData);
        // app was crashing because there wasnt logic to account for a null location
        // i jokingly seeded this data but dont know if its the format you guys use
        // this is likely why it was crashing on heroku
        if( !locationData ){
          locationData = Location.create({
            name: "The Commodore",
            latitude: "40.714574",
            longitude: "-73.9581547",
            score: 100,
            venues: []
          })
        }
          res.render('hipmap', { userData: currentUser, locationData: locationData })
      }
    });
});

router.get('/profile', function(req, res, next) {
  var currentUser = req.user;
  if(currentUser){
    Location.findOne({score: currentUser.hipscore }, function(err, locationData){
      res.render('profile', { userData: currentUser, locationData: locationData })
    });
  }
});

router.get('/ajax', function(req, res, next){
  var currentUser = JSON.parse(req.cookies.current_user);
  User.findOne({username: currentUser.username }, function(err, userData){
    Location.findOne({score: userData.hipscore }, function(err, locationData){
      res.render('ajax', { userData: userData, locationData: locationData })
    });
  })
})

router.get('/api/foursquare', function(req, res){
  res.json(data);
})


module.exports = router
