var express = require('express');
var mongoose = require('mongoose');


//Side Note. My idea for creating our own API is potentially a reach in capability, but I think that it will work, and it will reallllly simplify how we enter information.

//In regards to each individual api, our information will have to be quite accurate. We'll have to know how to get the name of the business for each and every variety of categories that is included in these API's.

//All will have different routes to get to a different bit of information. So we need to find out the path that it will take to get the name of each business (park, location, etc...) and have that saved as a variable.

//Refer to the locations router at this point (server/routes/api/locations.js)

var LocationSchema = mongoose.schema({
  location: {
    name: { type: String },
    bars: { type: Array }
  }
});
