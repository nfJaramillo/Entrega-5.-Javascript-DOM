


const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character';
const containerRef = document.getElementById('row');


async function getData() {
  const result = await fetch(API_RICK_MORTHY);
  const data = await result.json();
  console.log('result', data);
  return data;
}

async function render(){
    const data = await getData();
    const dataMapped = data.results.map((character) => {



        let col = document.createElement('div');
        col.className = 'col-sm-4';

        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';
        card.style = "width: 18rem;"

        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = character.image;
        img.alt ="...";

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let title = document.createElement('h5');
        title.innerText = character.name;
        title.className = 'card-title';

        let text = document.createElement('p');
        text.innerText = character.species;
        text.className = 'card-text';

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        containerRef.appendChild(col);
    })
}

render();
