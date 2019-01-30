# Word Guess Game using classes

## Overview

This is a simple node command line Word Guess game using classes and objects.

### Screen Shots

![Word Guess Cli](Images/01-WordGuess-Cli.gif)

## Design

1. The game receives user input using the `inquirer` npm packages.

2. The project contains three files:

* **Letter.js**: The class that contains all functionality dealing with a single letter - i.e. guessing and tracking one letter.

* **Word.js**: The class that contains all functionality pertaining to a single word.  It uses a collection of [Letter] objects to handle letter functions.

* **index.js**: The main program logic for the game.

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

- - -

### Notes

* Since this assignment is a command-line application, I did not deploy it anywhere. I did upload it to Github.

- - -

### To Do

* Complete index.js with number of guesses
  
* Deal with spaces in word (probably in letter)
  
* Create Icon and add to portfolio
  
* create sample running images

- - -
