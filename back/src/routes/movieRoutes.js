const { Router } = require('express');
const getAllMovies = require('../controller/movieController');

const movieRouter = Router();

movieRouter.get('/', getAllMovies);

module.exports = movieRouter