var express = require('express');
var router = express.Router();
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/
var path = require('path');


router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html'));
});


router.get('/profile', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/profile.html'));
});


router.get('/ajax', function(req, res, next){
  res.sendFile( path.resolve('client/public/views/ajax.html'));
})


router.get('/api/foursquare', function(req, res){
  res.json(data);
})

module.exports = router;
