
const renderCard = require('./renderCard')
const axios = require('axios')


// $.get('https://students-api.up.railway.app/movies', function(response) {
//     renderCard(response);
// });


const fetchMoviesCards = async() => {
    try {
      const response = await axios.get('http://localhost:3000/movie');
      renderCard(response.data); // Asegúrate de pasar response.data en lugar de solo response
    } catch (error) {
        console.log('No se pudieron cargar las cards')
        console.log(error);
    }
}

fetchMoviesCards()


// https://students-api.up.railway.app/movies
//  Consumo de end point con Jquery
// $.get('https://students-api.2.us-1.fl0.io/movies', function(response) {
// });






