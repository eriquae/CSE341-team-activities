let jsonResult;

function getPokemon(button) {
    let api;
    if (typeof button === 'undefined') {
        api = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    }
    else if (button.id === 'previous') {
        api = jsonResult.previous;
    }
    else if (button.id === 'next') {
        api = jsonResult.next;
    }
    fetch(api, {
        method: 'GET',
    })
    .then(result => {
        return result.json();
    })
    .then(result => {
        console.log(result);
        jsonResult = result;

        if(result.next === null) {
            document.getElementById('next').disabled = true;
        }
        else {
            document.getElementById('next').disabled = false;
        }

        if(result.previous === null) {
            document.getElementById('previous').disabled = true;
        }
        else {
            document.getElementById('previous').disabled = false;
        }

        let pokemon = document.createElement('ul');
        result.results.forEach((poke) => {
            console.log(poke)
            let mon = document.createElement('li');
            mon.innerHTML = poke.name;
            pokemon.appendChild(mon);
        })

        let products = document.getElementById('products');
        products.innerHTML = "";
        products.appendChild(pokemon);
    })
    .catch(err => {
        console.log(err);
    });
};

getPokemon();