export function didUserGuessCorrect(userGuess, computerThrow) {
    if (userGuess === computerThrow) return true;
    else return false;
}

function didUserWin(userThrow, computerThrow) {
    if (
        (userThrow === 'rock' && computerThrow === 'scissors')
        || (userThrow === 'scissors' && computerThrow === 'paper')
        || (userThrow === 'paper' && computerThrow === 'rock')
    ) {
        return true;
    }
}