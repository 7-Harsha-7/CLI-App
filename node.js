var readlineSync = require('readline-sync');
var score = 0;
function o(data){
  console.log(data);
}
var userName = readlineSync.question("what's your name? ");
o('Welcome ' + userName + ', this is HARSHA G');
o('So, this is to see how much do u know about me');
o('You will be answering 7 questions in total, each question carries 1 point. If you get the right answer, your score will be increased by 1 or if go wrong, no updation will be done to your score');
o('NOTE: Answer all the questions in capital letters and if there is more than one word in the answer, make sure to separate the words by one click on the space button');
o("Aight so let's do this");
o('-------------------------------------------------------------');


function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
   console.log('your are right!');
   console.log('good job!')
    score = score+1;
  }
  else{
    console.log('your are wrong!');
    console.log('better luck next time')
    
  }
    console.log('current score=' + score);
}


var question1 = {
  question: "Where do I live(city)? ",
  answer: "MYSORE"
}
var question2 = {
  question: "My favourite anime? ",
  answer: "JUJUTSU KAISEN"
}
var question3 = {
  question: "My favourite character from the anime jujutsu kaisen? ",
  answer: "GOJO"
}
var question4 = {
  question: "My favourite PC game? ",
  answer: "VALORANT"
}
var question5 = {
  question: "My favourite Marvel superhero? ",
  answer: "IRONMAN"
}
var question6 = {
  question: "My favourite DC superhero? ",
  answer: "SUPERMAN"
}
var question7 = {
  question: "My favourite music artist? ",
  answer: "BTS"
}


var questions = [question1,question2,question3,question4,question5,question6,question7]

for(var i=0; i<questions.length; i++){
 var currentQuestion = questions[i];
 quiz(currentQuestion.question,currentQuestion.answer)
 console.log("-------------------------------------");
}
console.log('Total Score = ' + score);
console.log('Hope you had fun, have a nice day :)')