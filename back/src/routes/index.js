const {Router} = require ('express');
const movieRouter = require("./movieRoutes")
const router = Router();



router.get('/movie', movieRouter)

module.exports = router;