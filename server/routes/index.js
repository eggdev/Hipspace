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
  consumer_key: 'Se5JW4VgD-MMj1actPs4eA',
  consumer_secret: 'gpSRWEKdpDcch4b_4JHo1U0K4fk',
  token: 'Fh8tOgAFFNjOozhQSu7IoYe5kyab28AQ',
  token_secret: 'u6dsr5i6L1bU-ADsY6XYdgW2gPk',
});


router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html'));
});


router.get('/api/yelp', function(req, res){
  yelp.search({ term: 'bars', location: 'williamsburg, ny' }).then(function(data) {
    res.json(data);
  }).catch(function (err) {
    console.error(err);
  });
});


module.exports = router;
