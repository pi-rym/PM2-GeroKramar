const {Router} = require ('express');
const movieRouter = require("./movieRoutes")
const router = Router();
const movieController = require("../controller/movieController")


router.get('/movie', movieRouter)

module.exports = router;