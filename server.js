var express = require('express');
var app = express();
var db = require('./models');
var Gallery = db.gallery;
var _ = require('lodash');
var bodyParser = require('body-parser');
var galleryRouter = require('./routes/gallery');
var methodOverride = require('method-override');

//tell express which template engine we are using by NPM module name
app.set('view engine', 'jade');

//tell express where our template files live
app.set('views', './views/');

//for any static request to express use this path and all files within
app.use(express.static('./public'));

//parse application
app.use(bodyParser.urlencoded({ extended: false }));

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

//root directory will render the list gallery photos located within index
app.get('/', function(req, res) {
  Gallery.findAll()
    .then(function(gallery){
      res.render('index', {
        imageGallery: gallery
      });
    });
});

//create server and listen to address 3000
var server = app.listen(3000, function() {});