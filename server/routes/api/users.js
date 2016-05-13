var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js');


// Create a new user
usersRouter.post('/', function(req, res, next) {
  // console.log(req.body);
  User.create(req.body, function( err, dbUser ) {
    if (err) { return res.status(500).end() }
    res.json( dbUser );
  });
});

//Updates a users information based on their username, email and hipscore based on what occurs on the profile page.
usersRouter.put('/:id', function(req, res, next){
  var updated = { _id: req.params.id, username: req.body.username, email: req.body.email, hipscore: req.body.hipscore };
  User.findOneAndUpdate({ _id: req.params.id }, updated, function(err, response){
    if(err){console.log(err);}
    res.json( response );
  })
});

//Protects the get user route.
usersRouter.use(passport.authenticate('jwt', { session: false}));

// GET all users
usersRouter.get('/', function(req, res, next) {

  User.find(function( err, dbUsers ){
    res.json( dbUsers );
  });
});



module.exports = usersRouter;
