//npm module requrements

var readline = require("readline-sync");
var colors = require('colors');


//greeting and game explaination

console.log("Hi there! Its such a nice day \n\n")
var playerName = readline.question(colors.red("what is your name? "));

console.log(colors.blue("Nice to meet you " + playerName));
console.log("would you like to play a game? \n");
console.log("The game involves a stroll in the black forests \n where you could get a treasures but would also \n have you fight \n enemy. \n\n\n Don\'t worry you will be given guidance and health points along the way. \n Remember that you will be entering an unknown territory and \n danger lurks at each turn");


var prompt = new Confirm('So would you like to play? ');



