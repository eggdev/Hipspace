var express = require('express');
var mongoose = require('mongoose');
//Removed notes about Schema and creating API as plan has changed.

//Locations to include - Williamsburg, Red Hook, Greenpoint, Fort Greene, Lower East Side, Harlem, East Harlem, Brooklyn Heights, Park Slope, Hoboken, Upper West Side, Upper East Side, Midtown, Greenwich Village, Astoria, Long Island City, Journal Square

var LocationSchema = mongoose.Schema({
    name: { type: String },
    latitude: {type: String},
    longitude: {type: String},
    venues: [{
      name: { type: String },
      category: { type: String },
      lat: { type: String },
      long: { type: String }
    }]
});

module.exports = mongoose.model('Location', LocationSchema)
