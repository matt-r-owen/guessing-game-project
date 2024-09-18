const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 0;
let numAttempts = 0;

function randomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function checkGuess(intGuess) {
    if (intGuess > secretNumber) {
        console.log("Too high");
        return false;
    }

    if (intGuess < secretNumber) {
        console.log("Too low");
        return false;
    }

    console.log("Correct!");
    return true;
}

function askGuess() {
    rl.question('Enter a guess ', (answer) => {
        if (checkGuess(Number(answer)) === false) {
            numAttempts--;

            if (numAttempts > 0) {
                return askGuess();
            }

            console.log("You Lose");
        } else (console.log("You Win!"));

        rl.close();
    });
}

function askRange() {
    rl.question('Enter a minimum number ', (minNum) => {
        rl.question('Enter a maximum number ', (maxNum) => {
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}`);
            secretNumber = randomInRange(Number(minNum), Number(maxNum));
            askGuess();
        });
    });
}

function askLimit() {
    rl.question('How many guesses do you want? ', (guessCount) => {
        numAttempts = Number(guessCount);
        askRange();
    });
}

console.log(askLimit());
