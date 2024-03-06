// creacion de entidad card 


class Card{
    constructor(id ,title, year, director, duration, poster){
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.poster = poster;

    }
}

//creacion de metodos para card

class Repository {
    constructor(){
        this.cards = [];
        this.id = 0;
    }
    getAllCards(){
        return this.cards;
    }
    createCard({title, year, director, duration, poster}){
        this.id++;
        const card = new Card(this.id, title, year, director, duration, poster);
        this.cards.push(card);
        return card; // Devolver la tarjeta creada
    }
}
// Instacia de metodos 
const repository = new Repository();

//mapeo de funcion
const mapCards= card=>{
    const divDescrip = document.createElement('div');
    divDescrip.className = 'descriptions';
    const h2 = document.createElement('h2');
    h2.textContent = `${card.title}`
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', card.poster);
    const p = document.createElement('p')
    p.textContent = `
    year: ${card.year}
    director: ${card.director}
    duration: ${card.duration}
    `
    const btn = document.createElement('button');
    const i = document.createElement('i');
    i.className = 'fab';
    i.classList.add('fa-youtube');

    divDescrip.appendChild(imgCard);
    divDescrip.appendChild(h2);
    divDescrip.appendChild(p);
    btn.appendChild(i);
    divDescrip.appendChild(btn);
    return divDescrip;
}

// Creacion de tarjetas en el DOM
const renderCard = (movies) => {
    const contentCards = document.getElementById('content-cards');
    contentCards.innerHTML = ''; // Limpiar el contenido existente

    movies.forEach(movie => {
        // Crear una tarjeta para cada película
        const card = repository.createCard(movie); // Asumiendo que `movie` tiene las propiedades necesarias
        const cardElement = mapCards(card); // Crear el elemento DOM para la tarjeta
        contentCards.appendChild(cardElement); // Agregar la tarjeta al DOM
    });
}


// Consumo de end point con Jquery
$.get('https://students-api.2.us-1.fl0.io/movies', function(response) {
    renderCard(response); // Asegúrate de que `response` es el arreglo de películas
});






