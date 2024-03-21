const axios = require("axios");
// instancio el endpoint para quitarle responsabilidades al callback
const endpoint = "http://localhost:3000/movie";

// Funcion en la que se toman los datos del HTML, y se validan los datos
const getData = () => {
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById('poster').value;
  const selectedGenres = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    selectedGenres.push(checkbox.value);
  });

  // Asumiendo que si alguna validación falla, deseas detener la operación
  if (!validarFecha(year) || !validateFormEmply(title, director, duration, rate, poster, selectedGenres)) {
    return null; // Retorna null para indicar fallo en la validación
  }

  const movie = {
    title,
    year,
    director,
    duration,
    rate,
    genre: selectedGenres,
    poster 
  };

  return movie; // Solo retorna movie si todas las validaciones son exitosas
};
//Envio de dato
const createMovie = async () => {
  try {
    const response = await axios.post(endpoint, getData());
    console.log(response.data);
    alert(`Se creó la película con éxito`);
    clearForm();
  } catch (error) {
    console.error(error.response ? error.response.data : "Error desconocido");
    alert("Hubo un error al crear la película.");
  }
};

// Función para vaciar el formulario
const clearForm = () => {
  // Limpia campos de texto y números
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("poster").value = "";
  
  // Limpia todos los checkboxes seleccionados
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });

  
};

// evento al boton submit
const buttonSubmit = document.getElementById('btnSubmit')
buttonSubmit.addEventListener (
  "click", createMovie
)

// Evento para limpiar el formulario
const btnClear = document.getElementById ('btnClear')
btnClear.addEventListener(
  "click", clearForm
)

//validaciones del lado del Front

const validarFecha = (year) => {
  if (year < 1895 || year > 2024 || isNaN(year)) {
    alert("El año de creación de película ingresada no es válida");
    return false; // Indica fallo en la validación
  }
  return true; // Indica éxito en la validación
};

// Validar que los campos no esten vacios
const validateFormEmply = (title, director, duration, rate, poster, checkboxes) => {
  if (title.trim() === "" || director.trim() === "" || duration.trim() === "" || isNaN(rate) ||poster.trim() === "") {
    alert('Algún campo de texto está vacío');
    return false;
  }
  if (rate <1 || rate >10) {
    alert('La valoracion tiene que rondar entre 1 y 10');
    return false;
  }
  if (checkboxes.length < 1 || checkboxes.length > 5) {
    alert("Selecciona entre 1 y 5 géneros.");
    return false;
  }
  return true;
}

// Funcion en la que se toman los datos del HTML, y se validan los datos


// //Envio de dato
// const createMovie = async () => {
//   const movieData = getData(); // Obtiene los datos o null si hay fallo en validación
//   if (!movieData) {
//     console.log("La creación de la película se ha detenido debido a un error en la validación.");
//     return; // Detiene la función si la validación falló
//   }
  
//   try {
//     const response = await axios.post(endpoint, movieData);
//     console.log(response.data);
//     alert(`Se creó la película con éxito`);
//     clearForm();
//   } catch (error) {
//     console.error(error.response ? error.response.data : "Error desconocido");
//     alert("Hubo un error al crear la película.");
//   }
// };


