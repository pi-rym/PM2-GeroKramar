class Movie {
    constructor({ title, poster, director, year, duration }) {
        if (!title || !poster || !director) {
            throw new Error('Se requieren las propiedades "title", "poster" y "director" para crear una instancia de Movie.');
        }
        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year
        this.duration = duration
    }
}
const axios = require('axios');
const getMovies = async () => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        const movies = response.data.map(movieData => new Movie(movieData));
        return movies;
    } catch (error) {
        console.error('Error al obtener las películas:', error.message);
        throw new Error('No se pudieron obtener las películas');
    }
};


module.exports = { getMovies, Movie };