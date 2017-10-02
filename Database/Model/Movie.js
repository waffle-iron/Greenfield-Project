var db = require('../config');
var mongoose = require('mongoose');



//create our movie model 
var movieSchema = mongoose.Schema({
  id: Number,
  title: String,
 // genresname: String,// genrs:[{id: 10752 , name: "War"},{id: 18, name: "Drama"}]
  release_date: Date,
  popularity: String,
 // poster_path: String,
  overview: String,
  vote_count: String,
  vote_average: Number 
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;



