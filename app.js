'use strict';


var correctNumberOfAnswer = 0;
var correctAge = 32;
var quesAnswCorrect = false;
var numberOfGuesses;
var guessAge;
var correctAnswersAboutMe = ['php','cars', 'computers' , 'camping'];
var seventhQuestion;
var seventhQuestionAnswer;
var answerComp = true;
var answerComp2 = true;

alert('Lets Play a game!');
var nameOfUser = prompt('Lets start by Getting your name');
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
//ask user questions about me and define answer variables

//take users inputs and validate input and give feedback to user
// Question 1 begins here
function questionOne() {
  var progLang = prompt('Am I familiar with PHP programming Language?');
  if(progLang.trim().toLowerCase() == 'yes' || progLang.trim().toLowerCase() == 'y'){
    alert('I\'ve been coding in PHP for a few years now');
    correctNumberOfAnswer++;
  } else if (progLang.trim().toLowerCase() == 'no' || progLang.trim().toLowerCase() == 'n') {
    alert('Looks like you did not know, I\'m familiar with PHP"');
  }else {
    alert('OOPs I don\'t know what you typed');
  }
}

// I (Devin) reworked the following with only a single if/else instead of the if else if.  Unless it's expressesly desired to inform the user to alert user if they respond with something other than yes/no, the following provides similar solution
function questionTwo () {
  var profBackg = prompt('Is my prefessional Background in Computer Networking?');
  if(profBackg.trim().toLowerCase() == 'yes' || profBackg.trim().toLowerCase() == 'y'){
    alert('Yes, My background is in Computer Networking');
    correctNumberOfAnswer++;
  } else {
    alert('Since you didn\'t know, I will tell you again, my background is in computer networking');
  }
}

function questionThree() {
  var carFan = prompt('Do I like cars?');
  if(carFan.trim().toLowerCase() == 'yes' || carFan.trim().toLowerCase() == 'y'){
    alert('yes, I love working on Cars');
    correctNumberOfAnswer++;
  } else {
    alert('How dare you!');
  }
}

function questionFour() {
  var origCountry = prompt('Am I originally from Mexico?');
  console.log('Answer to fourth Question: ' + origCountry);
  if(origCountry.trim().toLowerCase() == 'yes' || origCountry.trim().toLowerCase() == 'y'){
    alert('Sweet!, you are right, I\'m originally from Mexico');
    correctNumberOfAnswer++;
  } else {
    alert('Oh no!');
  }
}

function questionFive() {
  var currCompany = prompt('Is my current employeer Gravity Payments?');
  console.log('Answer to fifth Question: ' + currCompany);
  if(currCompany.trim().toLowerCase() == 'yes' || currCompany.trim().toLowerCase() == 'y'){
    alert('You\'re great, I work at Gravity Payments!');
    correctNumberOfAnswer++;
  } else {
    alert('Nope, that is not the correct answer!');
  }
}

function questionSix() {
  //looping Thur sixth Question
  for(numberOfGuesses = 0; numberOfGuesses < 4 && !quesAnswCorrect; numberOfGuesses++){
    guessAge = prompt('Can you guess how old am I?');
    guessAge = parseInt(guessAge);
    if(guessAge === correctAge){
      alert('You got it');
      quesAnswCorrect = true;
      correctNumberOfAnswer++;
    }else if(guessAge > 32){
      alert('OOPS! I\'m not that old');
    }else{
      alert('Guess a little higher');
    }
    if(numberOfGuesses === 3){
      alert('You run out of chances');
    }
  }
}

//Add seventh Question
function questionSeven() {
  for (seventhQuestion = 0; seventhQuestion < 6 && answerComp; seventhQuestion++){
    seventhQuestionAnswer  = prompt('What things do I like?');
    for(var i = 0; i < correctAnswersAboutMe.length && answerComp2 ; i++){
      if(seventhQuestionAnswer.toLowerCase() == correctAnswersAboutMe[i]){
        alert('You got it! Here are all possible Answers ' + correctAnswersAboutMe);
        answerComp = false;
        answerComp2 = false;
        correctNumberOfAnswer++;
      } else if ( i === correctAnswersAboutMe.length - 1) {
        alert('Please Try Again!');
      }
    }
  }
}

alert('Thank you for playing my Game ' + nameOfUser + ' .You got ' + correctNumberOfAnswer + ' out of 7 questions correct');
