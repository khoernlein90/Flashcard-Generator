var inquirer = require("inquirer");

function basicFunc() {
    function BasicCard(frontOfCard, backOfCard) {
        this.frontOfCard = frontOfCard;
        this.backOfCard = backOfCard;
        this.front = function() {
            console.log(this.frontOfCard);
        }
        this.back = function() {
            console.log(this.backOfCard);
        }
    }

    var cards = [];

    function addCard(frontOfCard, backOfCard) {
        var c = new BasicCard(frontOfCard, backOfCard);
        cards.push(c);
    }

    addCard("What is the capital of New Jersey?", "Trenton");
    addCard("What is the capital of New York?", "Albany");
    addCard("What is the capital of Nebraska?", "Lincoln");
    addCard("What is the capital of Arkansas", "Little Rock");
    addCard("What is the capital of Michigan?", "Lansing");
    addCard("What is the capital of California?", "Sacramento");
    addCard("What is the capital of Wisconsin?", "Madison");
    addCard("What is the capital of Oregon?", "Salem");

    function askQuestion() {

        var randomCard = cards[Math.floor(Math.random() * cards.length)];

        randomCard.front();

        inquirer.prompt([{
            name: "answer",
            message: "Your answer:",
            type: "input"
        }]).then(function(yourAnswer) {
            if (yourAnswer.answer.toLowerCase() === randomCard.backOfCard.toLowerCase()) {
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
                message: "Would you like to see the correct answer?",
                type: 'confirm'

            }]).then(function(answer) {
                if (answer.correct === true) {
                    randomCard.back();
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

module.exports = basicFunc;