#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user will input the guessed generated number

// 3) compare the user input with the computer generated number and show the result

const randomNumber = Math.floor(Math.random() * 101 + 1);
// console.log(randomNumber);

const answer = await inquirer.prompt([{

    name: "guessedNumber",
    type: "number",
    message: "please guess a number between 1-100: ",
}]);

if(answer.guessedNumber === randomNumber) {
    console.log("You guessed the number correct.")
} else{
    console.log("You guessed the number wrong.")
}
