//Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:
//
//
//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
////antiCaps('bAnAnA') // BaNaNa  
//Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:
//
//function isCaps(letter) {  
//  return letter === letter.toUpperCase();
//}

//function anticaps(str) {
    //    var unCap = [];
    //    for (var i = 0; i < str.length; i++) {
    //        if (str[i] === str[i].toUpperCase()){
    //            unCap.push(str[i].toLowerCase());
    //        } else if (str[i] === str[i].toLowerCase()); {        unCap.push(str.toUpperCase([i]));
    //    }
    //    return unCap.join("");
    //    }
    //}
    //    anticaps("HellO");
function anticaps(str) {
    
    var arr = str.split("");
    var unCap = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            unCap[i] = arr[i].toLowerCase();
            
        } else { 
             unCap[i] = arr[i].toUpperCase();

        }
    }
    return unCap.join("");
}
anticaps("HelLo");

        //    
        //    1. Write a function that takes an array of numbers and returns the largest
        //2. Write a function that takes an array of words and a character and return each word that has that letter present
        //3. Write a function that takes a num1 and num2 and returns whether num1 is
        //divisible by num2


        ////    funtion maximiser(arr){
        ////        var largest = arr[0];
        //        for(i =1; i< arr.length; i++){
        //            if(largest < arr [i]){
        //                largest = arr[i];
        //            }    
        //        }
        //    return maximiser;
        ////    }
        ////    console.log(findlargest(["7", "67", "0"]))
        //

        //can also try to sort and return first 


        //var letterFinder = function (arr, letter) {
        //    var matches = [];
        //    for (var i = 0; i < arr.length; i++) {
        //        if (arr[i].indexOf(letter) !== -1) {
        //            matches.push(arr[i]);
        //
        //        }
        //    }
        //     return matches;
        //}

        //
        //    function filterWords(arr, char) {
        //        var matches = arr.filter(function (item) {
        //            return item.indexOf(char) !== -1;
        //        });
        //        return matches;
        //    }
        //    console.log(filterWords(["hello", "Whatchamacallit"], "o"));

        ////function divisible(num1,num2)
        ////if(num1 % num2 === 0){
        //return num1 is divisible by num2;
        //}
        //
        //divisible(15,5)
