const movieService = require('../services/movieService')

const getAllMovies = async (req, res)=>{
    try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
   
}
const postMovieController = async (req, res) => {
    try {
        // Supongo que 'req.body' contiene la información de la película
        await movieService.postMovie(req.body);
        res.status(201).json({message: 'Pelicula creada con exito'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getAllMovies , postMovieController}
  
