var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));  

function caesarCipher (input, shift);


//should take the input and change it to array

var input2 = input.split("");
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]


//go through each index-element 
//for each letter find it in the alphabet list array 
//add shift (number) to the index of that letter 

function alphaIndex(alpha){
//    should take the character in input2 and find its index in the alphabet arr
    return indexOf(alpha);
} 
    var j = input2.findIndex(alphaIndex);


//add shift (number) to the index of that letter 
j + shift


//find the element at (j + shift) in alphabet array




//replace the element in input2 with the new element found in array


