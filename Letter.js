"use strict";
/* jshint node: true */

// Letter Class: Contains the functionality to deal with one letter in the word game
// I much prefer Class syntax vs constructor syntax.  I get that it is syntax sugar
// But i think it is much more readable.  I just wish properties could be defined outside
// of methods and not require 'this' since it should be implied within the scope of the class
class Letter {
    constructor(letter) {
        this.letter = letter;

        // Dont make them guess non-characters - give them spaces, commas etc for free
        let asciiCharCode = letter.charCodeAt(0);
        if (((asciiCharCode >= 65) && (asciiCharCode <= 90)) || ((asciiCharCode >= 97) && (asciiCharCode <= 122))) {
            this.hasBeenGuessed = false;
        } else { // if keycodes 'A' - 'Z' or 'a'-'z'
            this.hasBeenGuessed = true;  // if it is a non-letter character, guess it for the user
        }
    }

    // Returns the underlying character if the letter has been guessed, or an underscore) if the letter has not been guessed
    toString() {
        if (this.hasBeenGuessed) {
            return this.letter;
        } else {
            return "_";
        }

    }

    // Takes a character as an argument and checks it against the underlying character,
    // updating the stored boolean value to true if it was guessed correctly
    guess(char) {
        if (char.toLowerCase() === this.letter.toLowerCase()) {
            this.hasBeenGuessed = true;
        }
    }

    // Show the letter class properties
    log() {
        console.log(this.letter);
        console.log(this.hasBeenGuessed);
    }
}

// Export this class for use in other modules
module.exports = Letter;

// Test harness
/*
let letter = new Letter('a');
letter.guess('b');
console.log(letter.toString());
letter.log();
letter.guess('a');
console.log(letter.toString());
letter.log();
*/