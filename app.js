// import functions and grab DOM elements
import { didUserGuessCorrect } from './utils.js';
import { didUserWin } from './utils.js';

const button = document.querySelector('#guess-button');
const currentResultDiv = document.querySelector('#current-result');
const winsDiv = document.querySelector('#total-wins');
const lossesDiv = document.querySelector('#total-losses');


// initialize state
let totalGuesses = 0;
let totalWins = 0;

// set event listeners 
button.addEventListener('click', () => {

    const selectedRadio = document.querySelector('input:checked');
    const userGuess = selectedRadio.value;
    let randomNumber = Math.ceil(Math.random() * 3);
    const userWon = didUserGuessCorrect(userGuess, randomNumber);


    if (userWon) {
        totalWins++;
        currentResultDiv.textContent = 'HEYOHHHH YOU GOT IT!';
    } else {
        currentResultDiv.textContent = 'WOMP WOMPPPPP. Try again!';
    }

    totalGuesses++;
    // update DOM to reflect the new state

    winsDiv.textContent = `You killed it ${totalWins}`;
    lossesDiv.textContent = `You failed ${totalGuesses - totalWins}`;

});

