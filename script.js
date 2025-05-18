const firstButton = document.querySelector('.first-button');
console.log(firstButton);

let secondButton = document.querySelector('.second-button');

secondButton.innerText = '9b done!';

let result = '';
function displayText(chosen) {
    if (chosen === 'heads') {
        result = 'You chose: heads';
        document.querySelector('p').innerHTML = result;
    } else if (chosen === 'tails') {
        result = 'You chose: tails';
        document.querySelector('p').innerHTML = result;
    }
    
}


