var db = require('../config');
var mongoose = require('mongoose');



//create our movie model 
var movieSchema = mongoose.Schema({
  id: Number,
  title: String,
  release_date: Date,
  popularity: String,
  overview: String,
  vote_count: String,
  vote_average: Number,
  poster_path: String
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;



