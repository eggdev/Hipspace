var express = require('express');
var router = express.Router();
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/
var path = require('path');


//Gets access to the YELP API through the Yelp NPM Package.
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.yelp_consumer_key,
  consumer_secret: process.env.yelp_consumer_secret,
  token: process.env.yelp_token,
  token_secret: process.env.yelp_token_secret,
});


router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html'));
});

router.get('/profile', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/profile.html'));
});

router.get('/api/yelp', function(req, res){
  yelp.search({ term: 'bars', location: 'williamsburg, ny' }).then(function(data) {
    res.json(data);
  }).catch(function (err) {
    console.error(err);
  });
});


router.get('/api/foursquare', function(req, res){
  res.json(data);
})

module.exports = router;
