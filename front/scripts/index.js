
const renderCard = require('./renderCard')
const axios = require('axios')




const fetchMoviesCards = async() => {
    try {
      const data = await axios.get('https://students-api.2.us-1.fl0.io/movies')
        renderCard(data); 
        
    } catch (error) {
        console.log('No se pudieron cargar las cards')
        console.log(error);
    }

}



//  Consumo de end point con Jquery
// $.get('https://students-api.2.us-1.fl0.io/movies', function(response) {
// });






