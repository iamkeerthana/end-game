var rl = require("readline-sync");

var userName = rl.question("What is your name?\n");

console.log("Welcome, "+ userName + " Do You Know Keerthana?");

var questions = [
  {
    question: "what am I doing?\n",
    answer: 'coding'
  },
  {
    question: 'where do I live?\n',
    answer: 'hyderabad'
  },
  {
    question: 'where do I work?\n',
    answer: 'home'
  }
]

var score = 0;

function play(question, answer) {
    var currentAnswer = rl.question(question);

    if (currentAnswer === answer) {
      score++;
      console.log('You are correct. score: '+ score);
      console.log("--------");
    } else {
      console.log('You are wrong. score: '+ score);
      console.log('--------');
    }
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("Your final score is "+ score);