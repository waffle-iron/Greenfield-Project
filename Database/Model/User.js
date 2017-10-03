var db = require('../config');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var promise=require('promise');


//create our user model 
var userSchema = mongoose.Schema({
	id: Number,
	username: String,
	password: String 
});

var User = mongoose.model('User' , userSchema);

// User.comparePassword = function(candidatePassword, savedPassword, callback) {
//   bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
//     if (err) {
//     	return callback(err,null);
//     }
//     callback(null, isMatch);
//   });
// };
module.exports = User;



