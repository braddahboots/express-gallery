var express = require('express');
var app = express();
var jade = require('jade');
var listings = require('./listings');
// var gallery = require('./routes/gallery');

//tell express which template engine we are using by NPM module name
app.set('view engine', 'jade');

//tell express where our template files live
app.set('views', './views/');

//for any static request to express use this path and all files within
app.use(express.static('./public'));

//root directory will render the list gallery photos located within index
app.get('/', function(req, res) {
  res.render('index', {
    imageGallery: listings
  });
});

//when routed to gallery/:id the user will see a single image
//should include a link to delete the photo from the gallery
//should include a link to edit the specific gallery photo
app.get('/gallery/:id', function(req, res) {
  var photoId = req.params.id;
  if(photoId !== null)




  //find the photo by its id witin the listing array
  //then remove from array and store it to a new key
  res.render('details', {
    imageGallery: listings,
    selectedImage: photoId
  });
  // .delete(function(req, res) {
  //   res.send('Link to delete image');
  // })
  // .put(function(req, res) {
  //   res.send('Link to update image');
  // });
});

//renders a form that is able to create a new image for the gallery
app.get('/gallery/new', function(req, res) {
  res.render('index', {
    submitButtonText: 'New Photo'
  });
});

//post a new image to the image gallery array
app.post('/gallery', function(req, res) {
  res.send('New instance of a image to add to gallery');
});

//renders a form to edit a gallery image by it's :id param
app.get('/gallery/:id/edit', function(req, res) {
  res.redner('editImage', {
    id: req[i].id,
    submitButtonText: 'Edit Photo'
  });
});

//updates a single image by it's :id param
app.put('/gallery/:id', function(req, res) {
  res.send('Updates to photo');
});

//deletes a single image within gallery by it's :id param
app.delete('/gallery/:id', function(req, res) {
  res.send('DELETE image');
});

//create server and listen to address 3000
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Photo gallery server listening at http://%s:%s', host, port);
});



