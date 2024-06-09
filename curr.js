#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blueBright("\n\tWellcome to code-with-aliya-currency converter \n"));
//define the list of currencies and their exchang rates
let exchang_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280, //pakistani
    //add more currencies and their exchange rates here
};
//prompt the user to select currency to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//perform currency conversion bt using formula
let from_amount = exchang_rate[user_answer.from_currency];
let to_amount = exchang_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(chalk.bold.red(`converted Amount = ${chalk.bold.magenta(converted_amount.toFixed(2))}`));
