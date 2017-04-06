'use strict';
alert('Lets Play a game!');
var correctNumberOfAnswer = 0;
var nameOfUser = prompt('Lets start by Getting your name');

//ask user questions about me and define answer variables
var progLang = prompt('Am I familiar with PHP programming Language?');
var profBackg = prompt('Is my prefessional Background in Computer Networking?');
var carFan = prompt('Do I like cars?');
var origCountry = prompt('Am I originally from Mexico?');
var currCompany = prompt('Is my current employeer Gravity Payments?');

//take users inputs and validate input and give feedback to user
if(progLang.trim().toLowerCase() == 'yes' || progLang.trim().toLowerCase() == 'y'){
  alert("I've been coding in PHP for a few years now");
  correctNumberOfAnswer++;
} else if (progLang.trim().toLowerCase() == 'no' || progLang.trim().toLowerCase() == 'n') {
  alert("Looks like you did not know, I'm familiar with PHP");
}else {
  alert("OOPs I don't know what you typed");
}

if(profBackg.trim().toLowerCase() == 'yes' || profBackg.trim().toLowerCase() == 'y'){
  alert('Yes, My background is in Computer Networking');
  correctNumberOfAnswer++;
}else if(profBackg.trim().toLowerCase() == 'no' || profBackg.trim().toLowerCase() == 'n'){
  alert("Since you didn't know, I will tell you again, My background is in Computer Networking");
} else {
  alert("OOPs I don't know what you typed");
}

if(carFan.trim().toLowerCase() == 'yes' || carFan.trim().toLowerCase() == 'y'){
  alert('yes, I love working on Cars');
  correctNumberOfAnswer++;
}else if(carFan.trim().toLowerCase() == 'no' || carFan.trim().toLowerCase() == 'n'){
  alert('How dare you!');
}else {
  alert("OOPs I don't know what you typed");
}

if(origCountry.trim().toLowerCase() == 'yes' || origCountry.trim().toLowerCase() == 'y'){
  alert("Sweet!, you are right, I'm originally from Mexico");
  correctNumberOfAnswer++;
}else if(origCountry.trim().toLowerCase() == 'no' || origCountry.trim().toLowerCase() == 'n'){
  alert('Oh no!');
}else {
  alert("OOPs I don't know what you typed");
}

if(currCompany.trim().toLowerCase() == 'yes' || currCompany.trim().toLowerCase() == 'y'){
  alert("You're great, I work at Gravity Payments!");
  correctNumberOfAnswer++;
} else if (currCompany.trim().toLowerCase() == 'no' || currCompany.trim().toLowerCase() == 'n'){
  alert('Nope, that is not the correct answer!');
} else {
  alert("OOPs I don't know what you typed");
}

//Add user input into the browser's console
console.log('Answer to first Question: ' + progLang);
console.log('Answer to Second Question: ' + profBackg);
console.log('Answer to third Question: ' + carFan);
console.log('Answer to fourth Question: ' + origCountry);
console.log('Answer to fifth Question: ' + currCompany);

//Add Sixth Question for user
//Declaring and defining variables
var correctAge = 32;
var quesAnswCorrect = false;
var numberOfGuesses;
var guessAge;
guessAge = parseInt(guessAge);

//looping Thur sixth Question
for(numberOfGuesses = 0; numberOfGuesses < 4 && !quesAnswCorrect; numberOfGuesses++){
  guessAge = prompt('Can you guess how old am I?');
  guessAge = parseInt(guessAge);
  if(guessAge === correctAge){
    alert('You got it');
    quesAnswCorrect = true;
    correctNumberOfAnswer++;

    //cosole.log the value of guessAge
    console.log('The value of guessAge is ', guessAge);
  }else if(guessAge > 32){
    alert('OOPS! I\'m not that old');

    //cosole.log the value of guessAge
    console.log('The value of guessAge is ', guessAge);
  }else{
    alert('Guess a little higher');

    //cosole.log the value of guessAge
    console.log('The value of guessAge is ', guessAge);
  }

  if(numberOfGuesses === 3){
    alert('You run out of chances');
  }
}

//Add seventh Question
//Declaring and defining variables
var correctAnswersAboutMe = ['php','cars', 'computers', 'camping'];
var seventhQuestion;
var seventhQuestionAnswer;
var answerComp = true;
var i;

for (seventhQuestion = 0; seventhQuestion < 6 && answerComp; seventhQuestion++){
    seventhQuestionAnswer  = prompt('What things do I like?');

      for(i = 0; i < correctAnswersAboutMe.length; i++){
         if(seventhQuestionAnswer.toLowerCase() == correctAnswersAboutMe[i]){
           alert('You got it! Here are all possible Answers ' + correctAnswersAboutMe);
           answerComp = false;
           correctNumberOfAnswer++;

           //cosole.log the value of guessAge
           console.log('The value of the 7th Question is ', seventhQuestionAnswer);
         }
      }
}

alert('Thank you for playing my Game ' + nameOfUser + ' .You got' + correctNumberOfAnswer + ' out of 7 questions correct');
