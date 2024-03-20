const { Schema } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: String,
  rate: Number,
  poster: String,
});



module.exports = movieSchema;
