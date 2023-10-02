const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const body = document.body;

greenButton.addEventListener('click', () => {
    if (body.style.backgroundColor === 'green') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'green';
    }
});

redButton.addEventListener('click', () => {
    if (body.style.backgroundColor === 'red') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'red';
    }
});

blueButton.addEventListener('click', () => {
    if (body.style.backgroundColor === 'blue') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'blue';
    }
});