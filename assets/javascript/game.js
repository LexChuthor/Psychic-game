var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compLetter;
var numWins = document.getElementById("numWins");
var numLoss = document.getElementById("numLoss");
var remainingGuesses = document.getElementById("remainingGuesses");
var guessedChars = document.getElementById("guessedChars");

document.onkeyup = function (event) {
    if (guessesLeft === 9) {
        compLetter = letters[Math.floor(Math.random() * letters.length)]
    }
    guessChar = event.key.toLowerCase();
        if (guesses.indexOf(guessChar) === -1) {
            if (guessChar === compLetter) {
                wins++;
                alert("You Win!");
                numWins.textContent = wins;
                guessesLeft = 9;
                guesses = [];
            } else {
                guesses.push(guessChar);
                guessesLeft--;
                
                remainingGuesses.textContent = guessesLeft.toString();
                guessedChars.textContent = guesses.toString();
                if(guessesLeft === 0){
                    alert("You lose :(");
                    losses++;
                    numLoss.textContent = losses;
                    guessesLeft = 9;
                    guesses = [];
                }
            }
        } else {
            alert("You have already chosen this letter!");
        }
    }
