#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter frist number", type: "number", name: "fristNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.fristNumber + answer.secondNumber);
    
} else if(answer.operator === "Subtraction") {
    console.log(answer.fristNumber - answer.secondNumber);

} else if(answer.operator === "Multiplication") {
    console.log(answer.fristNumber * answer.secondNumber);

} else if(answer.operator === "Division") {
    console.log(answer.fristNumber / answer.secondNumber);

} else {
    console.log("please select a valid operator");
    
};