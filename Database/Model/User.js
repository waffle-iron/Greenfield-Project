var db = require('../config');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

//create our user model 
var userSchema = mongoose.Schema({
	id: Number,
	username: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true }
});

var User = mongoose.model('User' , userSchema);


module.exports = User;



