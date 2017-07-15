
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LoginSchema = new Schema({
  id:Number,
  userName:String, 
  password:String,
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