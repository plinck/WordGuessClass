# Word Guess Game using classes

## Overview

This is a simple node command line Word Guess game using classes and objects.  I allow the user to guess another word without leavig the program as well.  I dont count against guess if the letter was already guessed so count does not go down for repeat guess.  In addition, I *give* the user special characters and numbers - tey only have to guess letters so if there are special characters or numbers in a word, I provide those for the user.

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
  
* Create Icon and add to portfolio
  
* create sample running images

* Possibly move already guessed letters functionality to Letter class.  e.g. save object with lowercase letter as key
  
* Possibly make it so if they guess correctly on a letter, it does not count against them - i.e. let them get so many *missed* guesses vs total guesses in case the word is quite long

- - -
