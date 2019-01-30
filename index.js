"use strict";
/* jshint node: true */

let wordArray = [];

function createWordArray() {
    wordArray = ["DuranDuran", "TheCure", "INXS", "Queen", "Devo", "Yaz", "TheSmiths",
        "NewOrder", "REM", "TheHumanLeague", "DepecheMode", "TearsForFears",
        "TheCure", "TheCars", "TalkingHeads", "TheClash", "PeterGabriel",
        "TheB52s"
    ];
}

let Word = require("./Word.js");

createWordArray();

let nextWordIndex = Math.floor(Math.random() * wordArray.length);

let word = new Word(wordArray[nextWordIndex]);
word.log();
word.makeAGuess('a');
word.log();
word.makeAGuess('l');
word.log();
word.makeAGuess('d');
word.log();
