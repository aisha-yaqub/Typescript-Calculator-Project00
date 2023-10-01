#! /usr/bin/env node
import inquirer from "inquirer";

type answersType = {
   num1: number,
   num2: number,
   operation: string
}

inquirer
    .prompt([
     {
        type: "number",
        name: "num1",
        message: "Enter your first number:"
        
     },
     {
        type: "number",
        name: "num2",
        message: "Enter your second number:"
        
     },
     {
        type: "list",
        name: "operation",
        message: "Select the operation you want to perform:",
        choices: ["+", "-", "x", "/", "^"]
        
     }
    ])
    .then((answers:answersType) => {
        if(answers.operation == "+"){
            const result = answers.num1 + answers.num2;
            console.log(`${answers.num1} + ${answers.num2} = ${result}`);
        }

        else if(answers.operation == "-"){
            const result = answers.num1 - answers.num2;
            console.log(`${answers.num1} - ${answers.num2} = ${result}`);
        }

        else if(answers.operation == "x"){
            const result = answers.num1 * answers.num2;
            console.log(`${answers.num1} x ${answers.num2} = ${result}`);
        }

        else if(answers.operation == "/"){
            const result = answers.num1 / answers.num2;
            console.log(`${answers.num1} / ${answers.num2} = ${result}`);
        }

        else if(answers.operation == "^"){
            const result = answers.num1 ** answers.num2;
            console.log(`${answers.num1} ^ ${answers.num2} = ${result}`);
        }   
    })
    .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });