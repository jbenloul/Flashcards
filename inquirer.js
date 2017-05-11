var inquirer = require("inquirer");
var request = require("request")
var arrays = require("./main.js")

var clozeArray = arrays.clozeArray;

var Basic = require("./BasicCard.js");
var basicArray = []

var correct = 0;
var incorrect = 0

Basic.prototype.addToArray = function(){
    basicArray.push(this);
}

request('https://opentdb.com/api.php?amount=25&category=20&type=multiple', function (error, response, body) {
  for (var i = 0; i < JSON.parse(body).results.length; i++) {
    var greek = new Basic(JSON.parse(body).results[i].question, JSON.parse(body).results[i].correct_answer);
    greek.addToArray()
  }  
gameStart();
});

function basicFlashCards(count) {
    inquirer.prompt([{
        name: "name",
        message: basicArray[count].front
    }]).then(function(answers) {
        if (answers.name.toLowerCase() === basicArray[count].back.toLowerCase()) {
            console.log("Correct!");
            correct++
        } else {
            console.log("Incorrect! The correct response was " + basicArray[count].back);
            incorrect++;
        }
        if (count > 0) {
            count--;
            basicFlashCards(count);
        } else {
            console.log("Game over!  You got " + correct + " answers right and " + incorrect + " wrong.")
        }
    });
}
function clozeFlashCards(count) {
    inquirer.prompt([{
        name: "name",
        message: clozeArray[count].partial
    }]).then(function(answers) {
        if (answers.name.toLowerCase() === clozeArray[count].cloze.toLowerCase()) {
            console.log("Correct!");
            correct++
        } else {
            console.log("Incorrect! The correct response was " + clozeArray[count].cloze);
            incorrect++;
        }
        if (count > 0) {
            count--;
            clozeFlashCards(count);
        } else {
            console.log("Game over!  You got " + correct + " answers right and " + incorrect + " wrong.")
        }
    });
}
function gameStart() {
    if (process.argv[2] === "basic") {
        basicFlashCards(basicArray.length - 1)
    } else if (process.argv[2] === "cloze") {
        clozeFlashCards(clozeArray.length - 1)
    } else console.log("please stop wasting time and enter the command 'basic' or 'cloze'")
}
