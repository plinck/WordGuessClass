"use strict";

const inquirer = require('inquirer');
const async = require('async');

let Word = require("./Word.js");

// Guess a single word.  It defaults to 8 choises but does not penalize for guessing same letter more than once
// NOTE: Jshint does not work worth async/await so I switched to esliny and configured for ecmascript 2017
// This loop MUST be wrapped in async function or you can not await for a promise 
async function guessWord(word) {
    const letterQuestion = {
        name: "letter",
        message: "Guess a letter"
    };
    let nbrGuesses = 8;
    let done = false;

    word.log();
    while (nbrGuesses > 0 && !done) {
        // Use async/await to convert a promise to *synchronous* -- in this case, 'answer' is the promise
        // You normally access the data in the promise using the .then promise method. With await, we make it look synchronous
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

// Allow the user stay in the game and guess a new word
async function guessManyWords() {
    const wordArray = ["Duran Duran", "The Cure", "INXS", "Queen", "Devo", "Yaz", "The Smiths",
        "New Order", "REM", "The Human League", "Depeche Mode", "Tears For Fears",
        "The Cure", "The Cars", "Talking Heads", "The Clash", "Peter Gabriel",
        "The B52s"
    ];
    const doneQuestion = {
        name: "done",
        message: "Guess Another Word (y=yes)?"
    };

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

// Start the main program - note: you can not use await in 'main' body so 
// must create and call async function that wraps it
guessManyWords();