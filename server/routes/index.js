var express = require('express'),
    router = express.Router(),
    /*
      'path' is needed because relative paths ../../ are considered malicious
      when importing modules in node. Example: importing routes in index.js
    */
    path = require('path');

    var Yelp = require('yelp');
    var yelp = new Yelp({
      consumer_key: 'Se5JW4VgD-MMj1actPs4eA',
      consumer_secret: 'gpSRWEKdpDcch4b_4JHo1U0K4fk',
      token: 'Fh8tOgAFFNjOozhQSu7IoYe5kyab28AQ',
      token_secret: 'u6dsr5i6L1bU-ADsY6XYdgW2gPk',
    })


router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html') );
});

module.exports = router;
