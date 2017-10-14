var inquirer = require("inquirer");
var basicFunc = require("./BasicCard.js")

function mainFunction() {

    function ClozeCard(text, cloze) {
        this.text = text;
        this.cloze = cloze;
        this.fullText = function() {
            console.log(this.text);
        }
        this.partial = function() {
            console.log(text.replace(cloze, "..."))
        }
    }

    var cards = [];

    function addCard(text, cloze) {
        var c = new ClozeCard(text, cloze);
        cards.push(c);
    }

    addCard("Trenton is the capital of New Jersey.", "Trenton");
    addCard("Albany is the capital of New York.", "Albany");
    addCard("Lincoln is the capital of Nebraska.", "Lincoln");
    addCard("Little Rock is the capital of Arkansas", "Little Rock");
    addCard("Lansing is the capital of Michigan.", "Lansing");
    addCard("Sacramento is the capital of California.", "Sacramento");
    addCard("Madison is the capital of Wisconsin.", "Madison");
    addCard("Salem is the capital of Oregon.", "Salem");

    function askQuestion() {

        var randomCard = cards[Math.floor(Math.random() * cards.length)];

        randomCard.partial();

        inquirer.prompt([{
            name: "answer",
            message: "Your answer:",
            type: "input"
        }]).then(function(yourAnswer) {
            if (yourAnswer.answer.toLowerCase() === randomCard.cloze.toLowerCase()) {
                console.log("That's correct!")
                anotherCard();
            } else {
                console.log("Sorry wrong answer.")
                correctAnswer();
            }
        })

        function correctAnswer() {
            inquirer.prompt([{

                name: "correct",
                message: "Would you like to see the full answer?",
                type: 'confirm'

            }]).then(function(answer) {
                if (answer.correct === true) {
                    randomCard.fullText();
                    anotherCard();
                } else {
                    anotherCard();
                }
            })
        }

        function anotherCard() {
            inquirer.prompt([{
                name: "again",
                message: "Would you like another card?",
                type: 'confirm'
            }]).then(function(anotherCard) {
                if (anotherCard.again === true) {
                    askQuestion();
                } else {
                    console.log("Thanks for playing!")
                }
            })
        }
    }

    askQuestion();
}

module.exports = mainFunction;