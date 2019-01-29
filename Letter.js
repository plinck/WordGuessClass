"use strict";
/* jshint node: true */

module.exports = class Letter {
    constructor(letter) {
        this.letter = letter;
    }
    // Make the blank layout of the word
    log() {
        console.log(this.letter);
    }

};
