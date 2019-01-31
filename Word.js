// Get leetter from another file
let Letter = require("./Letter.js");

/*
 * Class: Word
 * This class has all logic for a single word guess.  The game uses
 * this to guess a single word.  It creates a new object of this class
 * for every word they wish to guess
 */
class Word {
    constructor(word, guesses = 8) {
        this.nbrGuesses = guesses;
        this.wordToGuess = word;
        this.lettersGuessed = ""; // letters already guessed
        this.letters = [];
        for (let i in word) {
            let letter = new Letter(word[i]);
            this.letters.push(letter);
        }
    }

    // log the current word parts that are guessed
    log() {
        let wordGuess = "";
        for (let i in this.letters) {
            wordGuess += `${this.letters[i].toString()} `;

        }
        console.log(`${wordGuess}`);

    }

    // log the current word that is attempted to guess 
    // this is to show what you were supposed to guess if you guess wrong
    print() {
        let displayWord = "";
        for (let i in this.wordToGuess) {
            displayWord += `${this.wordToGuess[i]} `;
        }
        console.log(`${displayWord}`);
    }

    // Guess one letter and find all the places it appears in the word
    makeAGuess(letter) {
        let lowerLetter = letter.toLowerCase();
        let guessedFullword = true;

        // If they already guessed this letter, give them a pass and another try
        // If they guess correctly, do NOT count that against them
        if (this.lettersGuessed.search(lowerLetter) < 0) {
            this.lettersGuessed += lowerLetter;
            this.nbrGuesses -= 1;

            // Find all occurrences of letter in word to guess
            // While in here, see if whole word is guessed correctly
            for (let i in this.letters) {
                this.letters[i].guess(letter);
                if (!this.letters[i].hasBeenGuessed) {
                    guessedFullword = false;
                }    
            }

        } else {
            console.log("Already guessed the letter: " + lowerLetter);
        }
        
        return guessedFullword;
    }
}

module.exports = Word;

// Test harness
/*
let word = new Word('paullinck');
word.log();
word.makeAGuess('a');
word.log();
word.makeAGuess('l');
word.log();
*/