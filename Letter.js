"use strict";
/* jshint node: true */

// Contains the functionality to deal with one letter in the word game
class Letter {
    constructor(letter) {
        this.letter = letter;
        this.hasBeenGuessed = false;
    }

    // Returns the underlying character if the letter has been guessed, or an underscore) if the letter has not been guessed
    getState() {
        if (this.hasBeenGuessed) {
            return this.letter;
        } else {
            return "_";
        }

    }

    // Takes a character as an argument and checks it against the underlying character,
    // updating the stored boolean value to true if it was guessed correctly
    guess(char) {
        if (char === this.letter) {
            this.hasBeenGuessed = true;
        }
    }

    // Show the letter class properties
    log() {
        console.log(this.letter);
        console.log(this.hasBeenGuessed);
    }

}

module.exports = Letter; 

// Test harness
let letter = new Letter('a');

letter.guess('b');
console.log(letter.getState());
letter.log();
letter.guess('a');
console.log(letter.getState());
letter.log();