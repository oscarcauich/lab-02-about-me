'use strict';
alert('Lets Play a game!');

//ask user questions about me and define answer variables
var progLang = prompt('Am I familiar with PHP programming Language?');
var profBackg = prompt('Is my prefessional Background in Computer Networking?');
var carfan = prompt('Do I like cars?');
var origCountry = prompt('Am I originally from Mexico?');
var currCompany = prompt('Is my current employeer Gravity Payments?');

//take users input and validate input and give feedback to users
if(progLang.trim().toLowerCase() == 'yes' || progLang.trim().toLowerCase() == 'y'){
  alert("I've been coding in PHP for a few years now");
} else if (progLang.trim().toLowerCase() == 'no' || progLang.trim().toLowerCase() == 'n') {
  alert("Looks like you did not know, I'm familiar with PHP");
}else {
  alert("OOPs I don't know what you typed");
}
