var express = require('express');
var app = express();
var db = require('./models');
var Gallery = db.gallery;
var User = db.users;
var _ = require('lodash');
var bodyParser = require('body-parser');
var galleryRouter = require('./routes/gallery');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var ensureAuthenticated = require('./lib');

//tell express which template engine we are using by NPM module name
app.set('view engine', 'jade');

//tell express where our template files live
app.set('views', './views/');

//for any static request to express use this path and all files within
app.use(express.static('./public'));

app.use(session(
  {
    secret: 'asdlkfsdflasdaslf',
    resave: false,
    saveUninitialized: true
  }
));

//parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//calls on the methodOverride function to overide forms call
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//start router
app.use('/gallery', galleryRouter);

//establishing a cookie on the user at initial login within the session
passport.serializeUser(function(user, done) {
  done(null, JSON.stringify(user));
});

//pulls the id from the user obj
passport.deserializeUser(function(obj, done) {
  done(null, JSON.parse(obj));
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where : {
        username: username
      }
    })
    .then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// check the database to see if user exists
app.post('/login',
  passport.authenticate('local', {successRedirect: '/',
                                  failureRedirect: '/login',
                                  failureFlash: true})
);

app.get('/login', function(req, res) {
  res.render('login', {user: req.user, messages: req.flash('error')});
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


//create a route to a Create User Page
//create user page should render a form that takes username / password
//once submitted should redirect to gallery route page
app.get('/createuser', function(req, res) {
    res.render('createuser', {});
  });

app.post('/createuser', function(req, res) {
  var newUser = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  User.findOne({
    where : {
      username : newUser
    }
  })
  .then(function(user) {
    if(user) {
      throw new Error('Username already exists');
    }
    else if(password !== password2) {
      throw new Error('Passwords do not match, please re-type your passwords');
    }else{
      User.create({
        username: newUser,
        password: password
      });
    }
  })
  .then(function(gallery) {
    res.redirect('/');
  });
});

//root directory will render the list gallery photos located within index
app.get('/', function(req, res) {
  Gallery.findAll()
    .then(function(gallery){
      res.render('index', {
        imageGallery: gallery,
        user: req.user
      });
    });
});

//create server and listen to address 3000
var server = app.listen(3000, function() {});
db.sequelize.sync();