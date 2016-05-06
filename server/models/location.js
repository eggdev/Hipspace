var express = require('express');
var mongoose = require('mongoose');


//Side Note. My idea for creating our own API is potentially a reach in capability, but I think that it will work, and it will reallllly simplify how we enter information.

//In regards to each individual api, our information will have to be quite accurate. We'll have to know how to get the name of the business for each and every variety of categories that is included in these API's.

//All will have different routes to get to a different bit of information. So we need to find out the path that it will take to get the name of each business (park, location, etc...) and have that saved as a variable.

//Refer to the locations router at this point (server/routes/api/locations.js)

var LocationSchema = mongoose.schema({
  name: {type: String}, //i.e. Williamsburg
  location_area: {type: Number }//i.e. This will be the radius that our map will show
  //Yelp Info
  yelp: {
    bars: [{
      name: {type: String}, //i.e. The Metronome
      category: {type: String}, //i.e. Cocktail Bar
      latitude: { type: Number}, //i.e. 40.713264
      longitue: { type: Number }, //i.e. -73.962638
      prices: {type: String }, //i.e. $
      snippet: {type: String}, //i.e. Loved the 3 crumb swizzle. Apparently the name comes from reaching down into the couch between the cushions and finding some crumbs and then shaking them...
      rating: {type: Number} //i.e. 4 - We can make this display as stars if we want
    }],
    yoga_studios: [{
      //Yoga Studios on Yelp
    }],
    record_stores: [{
      //Record Stores on Yelp
    }],
  },
  google_places: {
    //Google Places Info
  }
  zillow: {
    //Zillow Info
  },
  nyc_api: {
    //NYC API Info
    crime: {
      //NYC Crime Info
    },
    parks: {
      //NYC Parks Info
    }
    //ETC...
  }
});
