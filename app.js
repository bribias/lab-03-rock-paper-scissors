// import functions and grab DOM elements

import { didUserWin } from './utils.js';

const button = document.querySelector('#guess-button');
const currentResultDiv = document.querySelector('#current-result');
const winsDiv = document.querySelector('#total-wins');
const lossesDiv = document.querySelector('#total-losses');
const tiesDiv = document.querySelector('#total-ties');

// initialize state
const choice = ['rock', 'paper', 'scissors'];
let totalGuesses = 0;
let totalWins = 0;
let totalTies = 0;

// set event listeners
button.addEventListener('click', () => {
    const compSelect = choice[Math.floor(Math.random()*choice.length)];
    
    const selectedRadio = document.querySelector('input:checked');
    const userGuess = selectedRadio.value;
    
    const winner = didUserWin(userGuess, compSelect);
    if (winner === 'win') {
        totalWins++;
        currentResultDiv.textContent = 'HEYOHHHH YOU GOT IT!';
    } else if (winner === 'draw') {
        totalTies++;
        currentResultDiv.textContent = 'Welp, it is a tie';
    } else {
        currentResultDiv.textContent = 'WOMP WOMPPPPP. Try again!';
    }
    console.log(compSelect);
    totalGuesses++;
    // update DOM to reflect the new state
    winsDiv.textContent = `You killed it ${totalWins}`;
    lossesDiv.textContent = `You failed ${totalGuesses - totalWins}`;
    tiesDiv.textContent = `You tied ${totalTies}`;
});