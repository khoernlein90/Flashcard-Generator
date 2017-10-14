var mainFunction = require("./ClozeCard.js");
var basicFunc = require("./BasicCard.js");
var inquirer = require("inquirer");


inquirer.prompt([{
    name: "answer",
    message: "Which type of flash card would you like?",
    type: "list",
    choices: ["Basic Flashcard", "Cloze Card"]
}]).then(function(answer) {
    if (answer.answer === "Cloze Card") {
        mainFunction();
    }
    if (answer.answer === "Basic Flashcard") {
        basicFunc();
    }
})