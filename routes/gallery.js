//File path: {{project_directory}}/routes/gallery.js
var express = require('express');
var router = express.Router();

//GET http://localhost:3000/gallery
//post a new image to the image gallery array
router.get('/new', function(req, res) {
  res.render('index', {
    imageGallery: [],
    submitButtonText: 'New Photo'
  });
});

//when routed to gallery/:id the user will see a single image
//should include a link to delete the photo from the gallery
//should include a link to edit the specific gallery photo
app.get('/:id', function(req, res) {
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

//renders a form to edit a gallery image by it's :id param
app.get('/:id/edit', function(req, res) {
  res.redner('editImage', {
    id: req[i].id,
    submitButtonText: 'Edit Photo'
  });
});

//updates a single image by it's :id param
app.put('/:id', function(req, res) {
  res.send('Updates to photo');
});

//deletes a single image within gallery by it's :id param
app.delete('/:id', function(req, res) {
  res.send('DELETE image');
});