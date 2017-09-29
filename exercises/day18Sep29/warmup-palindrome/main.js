//I’ll probably be there right at 9, or a minute after, but go ahead and get started on using Test Driven Development (mocha and chai) to build this


//Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
//
//A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.
//
//E.g.:
//
//isPalindrome("Star Rats!");  // true  
//isPalindrome("palindrome");  // false  
//isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  /





function pallinGen(str){
//    var letterArray = str.split("");
//    var reversed = letterArray.reverse();
//    var final = reversed.join("");
//    var final = str.split("").reverse().join("");
//    return str === final;
    
//capitalization
    var toLower = str.toLowerCase();   
    var final = str.split("").reverse().join("");
    return str === final;
//    check the first index to last index of the array
    
    
//https://regexr.com/
    
    
//    for (var i = 0; i < str.length; i++){
//        if(str.lastIndexOf(str[i]) === str.indexOf(str[i])){
//            return true;
//        }else {
//            return false;
//        }
//    }
};


module.exports = pallinGen;

