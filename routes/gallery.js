//File path: {{project_directory}}/routes/gallery.js
var express = require('express');
var router = express.Router();
var db = require('./../models');
var Gallery = db.gallery;
var User = db.users;
var _ = require('lodash');
var session = require('express-session');
var ensureAuthenticated = require('./../lib');

//GET http://localhost:3000/gallery
//post a new image to the image gallery array
//renders a form that is able to create a new image for the gallery
router.route('/new')
  .get(ensureAuthenticated, function(req, res) {
    res.render('newPhoto', {});
  });

// router.route('/createuser')
//   .get(function(req, res) {
//     res.render('createuser', {});
//   });

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
          shuffleGallery: _.shuffle(gallery),
          user: req.user,
          selectedImage: photoId
        });
      });
    });
  })
  .put(ensureAuthenticated, function(req, res) {
    var photoId = req.params.id;
    Gallery.update({
      image: req.body.url,
      title: req.body.title,
      link: req.body.link,
      info: req.body.info
    }, {
      where : {
        id : photoId
      }
    })
    .then(function(gallery) {
      res.redirect('/gallery/' + photoId);
    });
  })
  .delete(ensureAuthenticated, function(req, res) {
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
      title: req.body.title,
      link: req.body.link,
      info: req.body.info
    })
    .then(function(gallery) {
      res.redirect('/');
    });
  });

// // post a new instance of a user into the database
// router.route('/')
//   .post(function(req, res) {
//     console.log('req', req);
//     User.create({
//       username: req.body.username,
//       password: req.body.password
//     })
//     .then(function(gallery) {
//       res.redirect('/');
//     });
//   });

//renders a form to edit a gallery image by it's :id param
router.route('/:id/edit')
  .get(ensureAuthenticated, function(req, res) {
    var photoId = req.params.id;
    Gallery.findOne({
      where : {
        id : photoId
      }
    })
    .then(function(thisObj) {
      res.render('editImage', {
        selectedImage : {
          id: thisObj.id,
          image: thisObj.image,
          title: thisObj.title,
          link: thisObj.link,
          info: thisObj.info
        }
      });
    });
});

module.exports = router;