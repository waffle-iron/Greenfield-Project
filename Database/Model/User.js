var db = require('../config');
var mongoose = require('mongoose');

//create our user model 
var userSchema = mongoose.Schema({
	id: Number,
	username: String,
	password: String 
});

var User = mongoose.model('User' , userSchema);

module.exports = User;



