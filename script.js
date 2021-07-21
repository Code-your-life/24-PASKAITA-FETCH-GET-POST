//Get prom API data
fetch('https://radial-reinvented-shoe.glitch.me')
    .then(res => res.json())
    .then(data => data.forEach(element => {
        createCard(element)
    }))

function createCard(data) {
    const randomProp = data;
    const img = document.createElement('img');
    img.classList.add('propImg');
    img.src = randomProp.image;

    
    const price= document.createElement('h3').innerText = `€ ${randomProp.price}`;
    
    const city= document.createElement('h1').innerText = randomProp.city;
    
    const desc= document.createElement('p').innerText = randomProp.description;
    const div = document.createElement('div');
    div.classList.add('propCity');
    const article = document.createElement('article');
    article.classList.add('propertyCard');

    const divPrice = document.createElement('div');
    divPrice.classList.add('propPrice');

    const divCity = document.createElement('div');
    divCity.classList.add('propCity');

    const divDesc = document.createElement('div');
    divDesc.classList.add('propDesc');

    const container = document.querySelector('.container');

    divPrice.append(price)
    divCity.append(city)
    divDesc.append(desc)
    div.append(divPrice, divCity, divDesc);
    article.append(img, div);
    container.append(article);
}