const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};


const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const myJoke = document.createElement('p');
    myJoke.innerText = data.joke;
    document.querySelector('#jokeContainer').appendChild(myJoke)
  });

};





window.onload = () => fetchJoke();