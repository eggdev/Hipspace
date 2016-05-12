var dotEnv          = require('dotenv').config(),
    express         = require('express'),
    morgan          = require('morgan'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    app             = express(),
    indexRouter     = require('./server/routes/index.js'),
    apiAuthRouter   = require('./server/routes/api/auth.js'),
    apiUsersRouter  = require('./server/routes/api/users.js'),
    locationsRouter = require('./server/routes/api/locations.js');
    path            = require('path');

// connect to db
// process.env.MONGOLAB_URI is needed for when we deploy to Heroku
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/hipspace_db" );

// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// flash messages, NEEDS express-flash
// app.use(flash());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/public/views'));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

// Set static file root folder
app.use(express.static('client/public/'));

app.use('/api/auth', apiAuthRouter);

app.use('/api/users', apiUsersRouter);
app.use('/api/locations', locationsRouter);
app.use('/', indexRouter);

// Listen on port for connections
// process.env.PORT is needed for when we deploy to Heroku
var port = process.env.PORT || 3000;

app.listen( port, function() {
  console.log("free tacos at 3000");
});
