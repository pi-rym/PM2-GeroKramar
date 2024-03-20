const { Schema , model } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true },
  year: Number,
  director: { type: String, required: true },
  duration: String,
  genre: [String],
  rate: Number,
  poster: { type: String, required: true },
});

const Movie = model('Movie', movieSchema)


module.exports = Movie;
