// export function didUserGuessCorrect(computerThrow) {
//     if (computerThrow === 1) {
//         return 'rock';
//     }
//     if (computerThrow === 2) {
//         return 'paper';
//     }
//     if (computerThrow === 3) {
//         return 'scissors';
//     }
// }

export function didUserWin(userGuess, computerThrow) {
    if (userGuess === 'rock' && computerThrow === 'scissors'
        || userGuess === 'scissors' && computerThrow === 'paper'
        || userGuess === 'paper' && computerThrow === 'rock') {
        return 'win';
    } else if (userGuess === computerThrow) {
        return 'draw';
    } else {
        return 'lose';
    }
}