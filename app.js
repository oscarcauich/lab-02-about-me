'use strict';
alert('Lets Play a game!');

//ask user questions about me and define answer variables
var progLang = prompt('Am I familiar with PHP programming Language?');
var profBackg = prompt('Is my prefessional Background in Computer Networking?');
var carfan = prompt('Do I like cars?');
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
  alert("Yes, My background is in Computer Networking");
}else if(profBackg.trim().toLowerCase() == 'no' || profBackg.trim().toLowerCase() == 'n'){
  alert("Since you didn't know, I will tell you again, My background is in Computer Networking");
} else {
  alert("OOPs I don't know what you typed");
}
