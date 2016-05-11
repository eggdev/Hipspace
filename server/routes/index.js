var express = require('express');
var router = express.Router();

var User = require('../models/user.js');
/*
  'path' is needed because relative paths ../../ are considered malicious
  when importing modules in node. Example: importing routes in index.js
*/


router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/profile', function(req, res, next) {
  res.render('profile');
});


router.get('/ajax', function(req, res, next){
  var currentUser = JSON.parse(req.cookies.current_user);
  res.render('ajax');
  // res.sendFile('public/index1.html' , { root : __dirname})
})

router.get('/login', function(req, res, next){
  res.render('login_modal');
})

router.get('/api/foursquare', function(req, res){
  res.json(data);
})

module.exports = router;
