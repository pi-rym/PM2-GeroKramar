const { Router } = require('express');
const {getAllMovies , postMovieController} = require('../controller/movieController');

const movieRouter = Router();

movieRouter.get('/', getAllMovies);
movieRouter.post('/', postMovieController)

module.exports = movieRouter