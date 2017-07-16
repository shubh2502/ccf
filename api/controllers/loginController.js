'use strict';


var mongoose = require('mongoose'),
login = mongoose.model('login');

exports.checkUserNamePassword = function(req, res) {
  login.find({"userName":req.query.userName,"password":req.query.password}, function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};


exports.registerUser = function(req, res) {
  console.log("Response",req.body);
  var login_collection = new login(req.body);
  login_collection.save(function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};


exports.isUserResgistered = function(req, res) {
  login.find({"userName":req.query.userName}, function(err, packet) {
    if (err)
      res.send(err);
    res.json(packet);
  });
};
