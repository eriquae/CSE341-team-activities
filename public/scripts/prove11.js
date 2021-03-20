// const { io } = require("socket.io-client");

const socket = io()

let jsonResult;
function getHeroes() {
    fetch('/prove11/fetchAll', {
        method: 'GET',
    })
    .then(result => {
        return result.json();
    })
    .then(result => {
        console.log(result);
        jsonResult = result;

      
        let heroes_ul = document.createElement('ul');
        result.avengers.forEach((hero) => {
            console.log(hero)
            let avenger = document.createElement('li');
            avenger.innerHTML = hero.name;
            heroes_ul.appendChild(avenger);
        })

        let heroes = document.getElementById('heroes');
        heroes.innerHTML = "";
        heroes.appendChild(heroes_ul);
    })
    .catch(err => {
        console.log(err);
    });
};

function insertHeroes() {
    fetch('/prove11/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            heroName: document.getElementById('newNames').value,
        })
    })
    .then(result => {
        return result.json();
    })
    .then(result => {
        console.log(result);
        socket.emit('add')
    })
    .catch(err => {
        console.log(err);
    });
};

socket.on('add', () => {
    getHeroes();
});

getHeroes();