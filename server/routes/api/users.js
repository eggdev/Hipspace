var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js');


// Create a new user
usersRouter.post('/', function(req, res, next) {
  User.create(req.body, function( err, dbUser ) {
    if (err) { res.status(500).end() }
    res.json(dbUser);
  });
});

usersRouter.put('/:id', function(req, res, next){
  var updated = { _id: req.params.id, username: req.body.username, password: req.body.password, email: req.body.email, hipscore: req.body.hipscore };

  User.findOneAndUpdate({ _id: req.params.id }, updated, function(err, response){
    if(err){
      console.log(err);
    }
    // console.log(response);
    // console.log(updated);
    res.json( response );
  })
  // console.log(req.params.id);
  // console.log(req.body.username);
  // console.log(req.body.password);
  // console.log(req.body.email);
})

usersRouter.use(passport.authenticate('jwt', { session: false}));

// GET all users
usersRouter.get('/', function(req, res, next) {
  User.find(function( err, dbUsers ){
    res.json( dbUsers );
  });
});

<<<<<<< HEAD
// router.put('/profile/:id', function(req,res){
//   var id = req.params.id;
//   var newUsername = req.body.newUsername;
//   var newEmail = req.body.newEmail;
//   var newPassword = req.body.newPassword;
//
//   users.forEach(function(user,index){
//     if( user.id === Number(id)){
//       user.username = newUsername;
//       user.password = newPassword;
//       user.email = newEmail;
//     }
//   });
//
//   res.send('successfully update product');
//
// });


// usersRouter.put('/:id', function(req, res, next){
//   User.findOne(req.params.id, function(err, user){
//     res.json( user );
//   })
// })
=======
>>>>>>> master

module.exports = usersRouter;
