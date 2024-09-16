const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = 4;

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
            return askGuess();
        }

        console.log("You Win!");
        rl.close();
    });
}

console.log(askGuess());
