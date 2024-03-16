const {Router} = require('express');
const movieController = require("../controller/") 

const movieRouter =  Router();
movieRouter.get('/', movieController);

module.export = movieRouter;
