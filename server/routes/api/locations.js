var express = require('express');
var locationsRouter = express.Router();
var Location = require('../../models/location.js');
//Removed Notes for creating API as plans changed slightly. Most of the technique is the same, specifics are different.

locationsRouter.get('/', function(req, res){
  Location.find(function(err, locations){
    res.json( locations );
  })
})


locationsRouter.post('/', function(req, res, next) {
  var locationObject = req.body
  Location.create( locationObject , function( err, newLocation ) {
    if (err) { res.status(500).end() }
    res.json( newLocation );
  });
});

module.exports = locationsRouter;
