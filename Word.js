/*
 * Class: Word
 * This class has all logic for a single word guess.  The game uses
 * this to guess a single word.  It creates a new object of this class
 * for every word they wish to guess
 */
let Letter = require("./Letter.js");

class Word {
    constructor(word) {
        this.wordToGuess = word;
        this.lettersGuessed = "";   // letters already guessed
        this.letters = [];
        for (let i in word) {
            let letter = new Letter(word[i]);
            this.letters.push(letter);
        }
    }

    log() {
        let wordGuess = "";
        for (let i in this.letters) {
            wordGuess += `${this.letters[i].toString()} `;

        }
        console.log(`${wordGuess}`);

    }

    // Guess one letter and find all the places it appears in the word
    makeAGuess(letter) {
        var lowerLetter = letter.toLowerCase();

        // If they already guessed this letter, give them a pass and another try
        // If they guess correctly, do NOT count that against them
        if (this.lettersGuessed.search(lowerLetter) < 0) {
            this.lettersGuessed += lowerLetter;

            // Find all occurrences of letter in word to guess
            for (let i in this.letters) {
                this.letters[i].guess(letter);
            }
    
        } else {
            console.log("Already guessed the letter: " + lowerLetter);
        }
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
