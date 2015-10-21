var express = require('express');
var app = express();
var jade = require('jade');
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
    imageGallery: [{
      image: 'http://www.arch2o.com/wp-content/uploads/2013/08/Arch2o-Innovation-Tower-Zaha-Hadid-69.jpg',
      info: 'Shadow Halls',
      link: 'www.devleague.com'
      },
      {
        image: 'http://designlike.com/wp-content/uploads/2010/12/baron-buildbaton.jpg',
        info: 'The Collapsing Building',
        link: 'www.devleague.com'
      },
      {
        image: 'http://edmonleong1.sites.livebooks.com/data/photos/1300_1r9s7a6078.jpg',
        info: 'The Something out of Halo Building',
        link: 'www.devleague.com'
      },
      {
        image:  'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/09/Za-Architects-Heart-of-the-District1.jpg',
        info: 'Alien Invasion Building',
        link: 'www.devleague.com'
      }]
  });
});

//when routed to gallery/:id the user will see a single image
//should include a link to delete the photo from the gallery
//should include a link to edit the specific gallery photo
app.get('/gallery/:id', function(req, res) {
  var photoId = req.params.id;
  res.sendFile(photoId, function(err) {
    if(err) {
      consol.log(err);
      res.status(err.status).end();
    } else {
      consol.log('Sent:', photoId);
    }
  })
  .delete(function(req, res) {
    res.send('Link to delete image');
  })
  .put(function(req, res) {
    res.send('Link to update image');
  });
});

//renders a form that is able to create a new image for the gallery
app.get('/gallery/new', function(req, res) {
  res.render('index', {
    imageGallery: [],
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



