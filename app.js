var readlineSync = require("readline-sync");

var score = 0;

console.log("DO YOU KNOW AMAN QUIZ")

var userName = readlineSync.question("\nEnter your Name: ");

console.log("Welcome " + userName + " to Do you know Aman Quiz :-)")

console.log("\n*There are total five questions." + "\n*For each correct answer you will get 4 points." + "\n*For each wrong answer 1 point will deduct.")
console.log("====================================\n")

var questions = [
  {
    question : "Where do I live?\n",
    answer : "Bangalore"
  },

  {
    question : "What's my age?\n",
    answer : "22"
  },

  {
    question : "In which city is my College?\n",
    answer : "Bangalore"
  },

  {
    question : "What is my favourite dish?\n",
    answer : "Chicken Biryani"
  },

  {
    question : "What is my favourite fruit?\n",
    answer : "Watermelon"
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nYou are right\n")
    score = score + 4;
    console.log("Current Score : " + score)
    console.log("====================================\n")
  }
  else {
    console.log("\nYou are Wrong\n")
    score = score - 1;
    console.log("Current Score : " + score)
    console.log("====================================\n")
  }
}

var j=1;
for(var i=0; i<questions.length; i++) {
  console.log("Question " + j++ + "\n----------")
  play(questions[i].question, questions[i].answer)
}

console.log("\nYour final score is " + score)

if(score === 20) {
  console.log("You know Aman very well :-D")
}