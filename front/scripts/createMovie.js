const axios = require('axios');
const endpoint = 'http://localhost:3000/movie'


const getData = ()=>{
    const title = document.getElementById('title').value
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const rate = document.getElementById('rate').value;
    const selectedGenres = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
      selectedGenres.push(checkbox.value);
    });

    const movie = {
        title,
        year,
        director,
        duration,
        rate,
        genre: selectedGenres
    }
   
    return movie

}

const createMovie = async()=> {
    try {
        const data = await axios.post(endpoint, getData());


    } catch (error) {
        
    }

}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');


