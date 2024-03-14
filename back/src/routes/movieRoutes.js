const {Router} = require('express');
const movieController = require ('../controller/') // falta la ruta

const movieRouter =  Router();
movieRouter.get('/', movieController);

module.export = movieRouter;
