'use strict';


var mongoose = require('mongoose'),
login = mongoose.model('login');

exports.checkUserNamePassword = function(req, res) {
  login.find({}, function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};


exports.registerUser = function(req, res) {
  var login_collection = new login(req.body);
  login_collection.save(function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};


exports.isUserResgistered = function(req, res) {
  login.findById(req.params.userName, function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};
