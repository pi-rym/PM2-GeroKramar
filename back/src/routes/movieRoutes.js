const { Router } = require('express');
const movieController = require('../controller/movieController');

const movieRouter = Router();

movieRouter.get('/', movieController.getAllMovies);

module.exports = movieRouter;