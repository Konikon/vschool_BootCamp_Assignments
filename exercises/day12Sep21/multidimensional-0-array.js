//Eric Jones [1:31 PM] 
//Make a program that presents a Multidimensional array of ‘0’s. It then allow
//users to type in the coordinates and the new character then will print the updated
//grid

var readlineSync = require("readline-sync");

//have a function that makes the arrry of nm elements



var gridMaker = function (height,width) {
    starter = []
    for (var i = 0; i < height; i++) {
        var arrayMaker = [];
        for (var j = 0; j < width; j++) {
            arrayMaker.push(0);
        }
        starter.push(arrayMaker);
    }
    console.log(starter);

    return starter;
}

console.log("for creating a square grid of x size enter the x and y ")
var width = parseInt(readlineSync.question("Enter x: "));
var height = parseInt(readlineSync.question("Enter y: "));

gridMaker(width, height);


grid[3][3]= 1

//grid[x][y] = 

//have another array generator that takes this array and runs it for nm times
//    function gridMaker(nm){
//        for(var k = 0; k < nm; k++)
//            gridmaker.push(arrayMaker[k]);
//    }
//    
//    have the user input for nmxnm array
//
//function gridMaker(nm) {
//    for (j = 0; j < nm; j++) {
//        grid = []
//        function arrayMaker(nm) {
//            starter = []
//            for (i = 0; i < nm; i++) {
//                starter.push(0);
//            }
//        }console.log(starter);
//    } console.log(grid);
//}
//gridMaker(3)
