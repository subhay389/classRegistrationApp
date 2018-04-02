var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');
//var RegistrationForm = require('../models/RegistrationForm.js');
var RegistrationForm = mongojs('mongodb://shitosh:shitosh@ds253918.mlab.com:53918/hu_registration', ['registration_forms']);

/* GET ALL RegistrationForm */
router.get('/', function(req, res, next) {
  console.log('------------Inside routes get all');
  RegistrationForm.registration_forms.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE RegistrationForm BY ID */
router.get('/:id', function(req, res, next) {
  console.log("--------------inside routes get by id")
  RegistrationForm.registration_forms.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, form){
		if (err){
			res.send(err);
		}
		res.json(form);
	});
});

/* SAVE RegistrationForm */
router.post('/', function(req, res, next) {
  console.log("------------inside routes save")
  RegistrationForm.registration_forms.save(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RegistrationForm */
router.put('/:id', function(req, res, next) {
  delete req.body._id;

  RegistrationForm.registration_forms.update({_id: mongojs.ObjectID(req.params.id)}, req.body, {}, function(err, form){
  //RegistrationForm.registration_forms.update(req.params.id, req.body, {}, function(err, form){  
  console.log("------------inside routes update finish") 
   if (err){
			res.send(err);
		}
		res.json(form);
  });
  
});


/* DELETE RegistrationForm */
router.delete('/:id', function(req, res, next) {
  console.log("-------------inside routes delete")
  RegistrationForm.registration_forms.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, form){
		if (err){
			res.send(err);
		}
		res.json(form);
	});
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.send({user : req.user}) // get the user out of session and pass to template

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})


router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));



router.get('/auth/google/callback',
  passport.authenticate('google', 
  {
    successRedirect : '/registration-form',
    failureRedirect : '/'
  }
));

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}

module.exports = router;
//module.exports = passport;