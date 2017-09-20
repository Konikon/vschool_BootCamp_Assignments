//var readline = require("readline-sync");
//var num1= parseInt(readline.question("give me first number to sum"));
//var num2= parseInt(readline.question("give me second number to sum"));
//console.log(num1 + num2);

//var readline = require("readline-sync");
//var num1= parseInt(readline.question("give me first number to multiply"));
//var num2= parseInt(readline.question("give me second number to multiply"));
//console.log(num1 * num2);

//var readline = require("readline-sync");
//var num1= parseInt(readline.question("give me second number to divide"));
//var num2= parseInt(readline.question("give me first number to divide"));
//console.log(num1 / num2);


var readline = require("readline-sync");
var num1 = parseInt(readline.question("give me first number"));
var num2 = parseInt(readline.question("give me second number"));
var op = readline.question("What operation you want to do add, multiply, subtract, divide? ");

function doOperation(num1, num2, op) {
    if (op === "add" || op === "+") {
        var result = num1 + num2;
         console.log("The result is: " +
        result);
    }
    if (op === "subtract" || op === "-"){
        var result = num1 - num2;
        console.log("The result is: " +
        result);
    }
    if (op === "multiply" || op === "*"){
        var result = num1 * num2;
        console.log("The result is: " +
        result);
    }
    if (op === "divide" || op === "/"){
        var result = num1 / num2;
        console.log("The result is: " +
        result);
    }
}

doOperation(num1, num2, op);
