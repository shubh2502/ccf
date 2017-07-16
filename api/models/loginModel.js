
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LoginSchema = new Schema({
  id:Number,
  userName:{
    type:String,
    Required: 'User Name is required'
  },
  password:{
    type:String,
    Required: 'password is required'
  },
  addedOn:{
    type:Date,
    default:Date.now
  },
  lastUpdatedOn:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('login', LoginSchema);