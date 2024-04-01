#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let looptrue = true;
while (looptrue) {
    const answer = await inquirer.prompt([
        {
            message: "what do you wanna add in your todo?",
            type: "todo",
            name: "select"
        },
        {
            mesaage: "do you wanna add more todo?",
            type: "confirm",
            name: "addmore",
            default: "false"
        }
    ]);
    todos.push(answer.select);
    looptrue = answer.addmore;
    console.log(todos);
}
