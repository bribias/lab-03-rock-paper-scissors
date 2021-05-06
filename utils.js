


export function didUserGuessCorrect(computerThrow) {
    if (computerThrow === 1) {
        return 'rock';
    }
    if (computerThrow === 2) {
        return 'paper';
    }
    if (computerThrow === 3) {
        return 'scissors';
    }
}

export function didUserWin(userThrow, computerThrow) {
    if (
        (userThrow === 'rock' && computerThrow === 'scissors')
        || (userThrow === 'scissors' && computerThrow === 'paper')
        || (userThrow === 'paper' && computerThrow === 'rock')
    ) {
        return 'win';
    } else if (
        (userThrow === 'rock' && computerThrow === 'rock')
        || (userThrow === 'scissors' && computerThrow === 'scissors')
        || (userThrow === 'paper' && computerThrow === 'paper')
    ) {
        return 'draw';
    } else if (
        (userThrow === 'rock' && computerThrow === 'paper')
        || (userThrow === 'scissors' && computerThrow === 'rock')
        || (userThrow === 'paper' && computerThrow === 'scissors')
    ) {
        return 'lose';
    }
}