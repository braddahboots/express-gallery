//File path: {{project_directory}}/routes/gallery.js
var express = require('express');
var app = express();
var router = express.Router();
var db = require('./../models');
var Gallery = db.gallery;
var _ = require('lodash');

//GET http://localhost:3000/gallery
//post a new image to the image gallery array
//renders a form that is able to create a new image for the gallery
router.route('/new')
  .get(function(req, res) {
    res.render('newPhoto', {
    });
});

//when routed to gallery/:id the user will see a single image
//should include a link to delete the photo from the gallery
//should include a link to edit the specific gallery photo
router.route('/:id')
  .get(function(req, res) {
    var photoId = req.params.id;
    Gallery.findOne({
      where : {
        id : photoId
      }
    })
    .then(function(hero_image) {
      Gallery.findAll({
        where : {
          id : {
            ne : hero_image.id
          }
        },
        limit : 3
      })
      .then(function(gallery) {
        res.render('details', {
          heroImage: hero_image,
          // gallery.filter(function(obj) {return obj.id == photoId;})[0],
          shuffleGallery: _.shuffle(gallery),
          selectedImage: photoId
        });
      });
    });
  })
  // .put(function(req, res) {})
  .delete(function(req, res) {
    var photoId = req.params.id;
    Gallery.destroy({
      where : {
        id : photoId
      }
    })
    .then(function(gallery) {
      res.redirect('/');
    });
  });

//post a new image to the image gallery array
router.route('/')
  .post(function(req, res) {
    Gallery.create({
      image: req.body.url,
      info: req.body.info,
      link: req.body.link
    })
    .then(function(gallery) {
      res.redirect('/');
    });
});

//renders a form to edit a gallery image by it's :id param
router.route('/:id/edit')
  .get(function(req, res) {
    res.redner('editImage', {
      id: req[i].id,
      submitButtonText: 'Edit Photo'
    });
});

module.exports = router;