#! /usr/bin/env node
import inquirer from "inquirer";
//**** 1st step Computer will generate a random number ***//
//**** 2nd User Input for guessing a number ***//
//**** 3rd step Compare user input with computer generated random number and to show an output ***//
//for non zero
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 10: ",
    },
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("You have Guessed a right number.");
}
else {
    console.log("You Guessed a wrong number.");
}
;
