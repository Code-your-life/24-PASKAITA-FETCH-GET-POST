

function postData(e) {
    e.preventDefault();
    const image = document.querySelector('.imgPlace').value;
    const city = document.querySelector('#city').value;
    const price = document.querySelector('.pricePlace').value;
    const description = document.querySelector('.desPlace').value;
  
    fetch('https://radial-reinvented-shoe.glitch.me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image, city, price, description})
    })
        .then(res => res.json())
        
        .catch((error) => {
            console.error('Error:', error);
        });

}

const formAction = document.querySelector('.form');
formAction.addEventListener('submit', postData);

//Modal

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
  
