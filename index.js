"use strict";
/* jshint node: true */
/* jshint -E058 */

let inquirer = require('inquirer');
let async = require('async');

let Word = require("./Word.js");


let wordArray = [];

function createWordArray() {
    wordArray = ["DuranDuran", "TheCure", "INXS", "Queen", "Devo", "Yaz", "TheSmiths",
        "NewOrder", "REM", "TheHumanLeague", "DepecheMode", "TearsForFears",
        "TheCure", "TheCars", "TalkingHeads", "TheClash", "PeterGabriel",
        "TheB52s"
    ];
}

let letterQuestion = {
    name: "letter",
    message: "Guess a letter"
};

// for loop async to run the prompt multiple times
// This loop MUST be wrapped in async function or you can not await for a promise 
async function guessWord(word) {
    let nbrGuesses = 8;
    let done = false;

    word.log();
    while (nbrGuesses > 0 && !done) {
        // Use async/await to convert a promise to *synchronous* -- in this case, 'answer' is the promise
        // You normal access the data in the promise using the .then callback, with await, we make it look synchronous
        // IN this case, It’s like saying, ‘this is going to be an async function,
        // whether or not the return value is available now or later’.
        // Any promise we have, using ES2016, we can await. 
        let answer = await inquirer.prompt(letterQuestion);

        if (word.makeAGuess(answer.letter)) {
            word.log();
            console.log("Guessed Correctly");
            done = true;
        } else {
            word.log();
            nbrGuesses = word.nbrGuesses;
            console.log(`${nbrGuesses} more guesses`);    
        }
    }
    word.print();
}

let doneQuestion = {
    name: "done",
    message: "Guess Another Word (y=yes)?"
};
async function guessManyWords() {
    let done = false;

    while (!done) {
        let nextWordIndex = Math.floor(Math.random() * wordArray.length);
        let word = new Word(wordArray[nextWordIndex]);
    
        let result = await guessWord(word);
        let answer = await inquirer.prompt(doneQuestion);
        if (answer.done.toLowerCase() != "y") {
            done = true;
        }
    }
}

createWordArray();
guessManyWords();