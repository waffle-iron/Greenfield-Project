var db = require('../config');
var mongoose = require('mongoose');

//create our movie model 
var movieSchema = mongoose.Schema({
  image: String,
  id: Number,
  title: String,
  overview: String

  
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;



