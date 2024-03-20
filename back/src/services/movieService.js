const Movie = require('../models/Movie')

// class movie {
//     constructor({ title, poster, director, year, duration }) {
//         if (!title || !poster || !director) {
//             throw new Error('Se requieren las propiedades "title", "poster" y "director" para crear una instancia de Movie.');
//         }
//         this.title = title;
//         this.poster = poster;
//         this.director = director;
//         this.year = year
//         this.duration = duration
//     }
// }
// const axios = require('axios');

const getMovies = async () => {
    try {
        // const response = await axios.get('https://students-api.up.railway.app/movies');
        // const movies = response.data.map(movieData => new Movie(movieData));
        // return movies;
       const response = await Movie.find()
       return response;
       

    } catch (error) {
        console.error('Error al obtener las películas:', error.message);
        throw new Error('No se pudieron obtener las películas');
    }
};

const postMovie = async (movieData) => {
    try {
        // Aquí se asume que 'movieData' contiene la información necesaria para crear una película.
        const newMovie = await Movie.create(movieData);
        return newMovie;
    } catch (error) {
        console.error('Error al crear la película:', error.message);
        throw new Error('Error al crear la película: ' + error.message);
    }
};


module.exports = { getMovies, postMovie };