const {Router} = require ('express');
const movieRouter = require("./movieRoutes")
const router = Router();



router.use('/movie', movieRouter)

module.exports = router;