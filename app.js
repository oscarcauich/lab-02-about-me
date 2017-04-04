'use strict';
alert('Lets Play a game!');

//ask user questions about me and define answer variables
var progLang = prompt('Am I familiar with PHP programming Language?');
var profBackg = prompt('Is my prefessional Background in Computer Networking?');
var carFan = prompt('Do I like cars?');
var origCountry = prompt('Am I originally from Mexico?');
var currCompany = prompt('Is my current employeer Gravity Payments?');

//take users inputs and validate input and give feedback to user
if(progLang.trim().toLowerCase() == 'yes' || progLang.trim().toLowerCase() == 'y'){
  alert("I've been coding in PHP for a few years now");
} else if (progLang.trim().toLowerCase() == 'no' || progLang.trim().toLowerCase() == 'n') {
  alert("Looks like you did not know, I'm familiar with PHP");
}else {
  alert("OOPs I don't know what you typed");
}

if(profBackg.trim().toLowerCase() == 'yes' || profBackg.trim().toLowerCase() == 'y'){
  alert('Yes, My background is in Computer Networking');
}else if(profBackg.trim().toLowerCase() == 'no' || profBackg.trim().toLowerCase() == 'n'){
  alert("Since you didn't know, I will tell you again, My background is in Computer Networking");
} else {
  alert("OOPs I don't know what you typed");
}

if(carFan.trim().toLowerCase() == 'yes' || carFan.trim().toLowerCase() == 'y'){
  alert('yes, I love working on Cars');
}else if(carFan.trim().toLowerCase() == 'no' || carFan.trim().toLowerCase() == 'n'){
  alert('How dare you!');
}else {
  alert("OOPs I don't know what you typed");
}

if(origCountry.trim().toLowerCase() == 'yes' || origCountry.trim().toLowerCase() == 'y'){
  alert("Sweet!, you are right, I'm originally from Mexico");
}else if(origCountry.trim().toLowerCase() == 'no' || origCountry.trim().toLowerCase() == 'n'){
  alert('Oh no!');
}else {
  alert("OOPs I don't know what you typed");
}

if(currCompany.trim().toLowerCase() == 'yes' || currCompany.trim().toLowerCase() == 'y'){
  alert("You're great, I work at Gravity Payments!");
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
