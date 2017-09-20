//Install readline-sync
var readline = require("readline-sync");


//Make one of the inputs all uppercase (i.e., given the string “hello” print “HELLO”)


var text2Cap = readline.question("Type in a text to get it capitalized ");
console.log(text2Cap.toUpperCase());

//Report back the number of characters in a given input

console.log("Number of characters in the text is " + text2Cap.length);

//Concatenate (add) two separate strings together

var text1 = readline.question("Type in a text to get it capitalized ");
var text2 = readline.question("Type in another text ");
console.log(text1.concat(text2));
//
//Given a long message (more than twenty letters), return only the last half of the message

var text3 = readline.question("type in a looong message and we will cut it: ");
console.log(text3.substring(20));

//Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but allow the user to tell your program where to begin typing from (i.e., which index to start from).


console.log("This is a very old and long story well before you were born");
var text4 = "This is a very old and long story well before you were born"
var num2CutFrom = readline.question(" where do you want to cut the sentence? enter a number < 20: ");
console.log(text4.substr(num2CutFrom));
