
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
const mapCards = card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const img = document.createElement('img');
    img.src = card.poster; // Asegúrate de que 'card.poster' es la URL de la imagen
    img.alt = `Poster de ${card.title}`;

    const descriptions = document.createElement('div');
    descriptions.className = 'descriptions';

    const h1 = document.createElement('h1');
    h1.textContent = card.title;

    const p1 = document.createElement('p');
    p1.textContent = `Year: ${card.year}` 
    const p2 = document.createElement('p');
    p2.textContent = `Director: ${card.director}` 
    const p3 = document.createElement('p');
    p3.textContent = `Duration: ${card.duration}`;
    

    const button = document.createElement('button');
    button.textContent = 'Ver Ahora';

    descriptions.appendChild(h1);
    descriptions.appendChild(p1);
    descriptions.appendChild(p2);
    descriptions.appendChild(p3);
    descriptions.appendChild(button);

    cardElement.appendChild(img);
    cardElement.appendChild(descriptions);

    return cardElement;
};
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

module.exports = 
    renderCard;

