var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.set('view engine', 'ejs');
app.use(session(
  {
    secret: 'asdlkfsdflasdaslf',
    resave: false,
    saveUninitialized: true
  }
));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, JSON.stringify(user));
});

passport.deserializeUser(function(obj, done) {
  done(null, JSON.parse(obj));
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
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

app.post('/login',
  passport.authenticate('local', {successRedirect: '/secret',
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

app.get('/', function(req, res) {
  res.send('hello');
});

app.get('/secret', ensureAuthenticated, function(req, res) {
  res.send("This isn't where you parked your car");
});

function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {return next(); }
  res.redirect('/login');
}

app.listen(4111);

var User = {
  findOne : function (opts, cb) {
    var user = {
      id : 1,
      username: opts.username,
      password: 'my secret password',
      //look up instance method for validPassword - maybe also look up dynamic field
      validPassword: function(password) {
        return (password === 'my secret password');
      }
    };
    cb(null, user);
  }
};