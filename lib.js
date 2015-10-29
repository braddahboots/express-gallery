//middleware to auth user login status
function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {return next(); }
  res.redirect('/login');
}

module.exports = ensureAuthenticated;