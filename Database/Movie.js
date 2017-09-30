var db = require('../config');
var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  id: Number,
  title: String,
  description: String
  
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;



