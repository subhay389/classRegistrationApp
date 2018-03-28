var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongojs = require('mongojs');
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
  RegistrationForm.registration_forms.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RegistrationForm */
router.post('/', function(req, res, next) {
  console.log("------------inside routes save")
  RegistrationForm.registration_forms.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RegistrationForm */
router.put('/:id', function(req, res, next) {
  console.log("------------inside routes update")
  RegistrationForm.registration_forms.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RegistrationForm */
router.delete('/:id', function(req, res, next) {
  console.log("-------------inside routes delete")
  RegistrationForm.registration_forms.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;