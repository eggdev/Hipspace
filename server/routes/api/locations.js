var express = require('express');
var locationRouter = express.Router();


//Then when we run our post to our own Local API, we can just create one massive object in the post route that touches
//on all of the spots of this schema. So for me, I'll show below what I'm going to have to do to get a bars name and a
//bars category from the Yelp API.

// The rest of the information is going to be specific likely to yelp, and can probably be used for the Yoga Studios
//and the Record Stores and other things. We may find other data more valuable for those ones, but I'll go through and
//pick out the things that I find.

// Say my API query is going to be 'bars' in 'Williamsburg, NY'

// var yelpBars = "THE INFO FROM THE API QUERY"
// var locationName = yelpBars.businesses[0].location.city;
// var barsArray = yelpBars.businesses
//
// var barsObject = {};
//
// var allBarsArr = [];
//
// for (var i=0; i< barsArray; i++){
//   barsObject.name = yelpBars.businesses[i].name;
//   barsObject.snippet = yelpBars.businesses[i].snippet;
//   barsObject.rating = yelpBars.businesses[i].rating;
//   barsObject.category = yelpBars.businesses[i].categories[0][0];
//   barsObject.prices = yelpBars.businesses[i].prices;
//   barsObject.latitude = yelpBars.businesses[i].location.coordinate.latitude;
//   barsObject.longitude = yelpBars.businesses[i].location.coordinate.longitude;
//   allBarsArr.push(barsObject);
// }
//
// var locationObject = {
//   name: locationName,
//   yelp: {
//     bars: allBarsArr,
//     yoga_studios: allYogaStudios,
//     record_stores: allRecordStores
//   }
// }

//I think this makes "sense" on some level, but it will probably need to be refined as a strategy. I'm not exactly sure
//how we're going to bring in all the info into this page, it's probably going to have to be a manually called POST
//request. We may have to do it one API Query at a time, which probably won't be that awful. As in, we do the one above
//to get all of the Bars for Williamsburg, then do one to get all of the Yoga Studios in Williamsburg, and then one to
//store all the Record Stores in Williamsburg, so on and so forth.

//What might not be a bad idea, would be to write out all of these paths to information in "SPIKE" file and then we can
//just copy and paste it when it comes time. I think we may want to wait until we are pushed to Heroku before getting
//to deep into dealing with all of this data, but we should try and get at least one neighborhood up as dummy data so
//that we can work with the algorithm and the rendering of the sweet drop on icons that we are going to have made.

//Final note, as I'm getting off the train - Let's try and get one full on location created for Monday by Lunch so that
//we can start expanding. Ready - GO!

// locationRouter.post('/api/locations', function(req, res, next) {
//
//   Location.create( locationObject , function( err, newLocation ) {
//     if (err) { res.status(500).end() }
//     res.json( newLocation );
//   });
// });
