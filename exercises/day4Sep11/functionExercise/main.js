//For each step of the exercise, alternate between the two different types of function declarations when you are defining your functions.
//=================================================================================================================================================================================================================================================

//  1) Write a function that accepts two numbers as parameters, and returns the sum.
//

//function sum(a,b){
//    return a + b;
//}
//console.log(sum(3,4));






//  2) Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
//
//
//var h = function highestOf3(a,b,c){
//    return Math.max(e, f, g);
//} 
//console.log(h(3,20,5));









//  3) Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
//
//function evenOrOdd(i){
//    if(i % 2 === 0){
//        return "Even";
//    } else {
//        return "Odd";
//    }
//}
//console.log(evenOrOdd(6));
//







//  4) Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
//
//
//function stringL(x){
//    if (x.length <= 20){
//      x += x;
//        console.log(x);
////         return stringL.concat(stringL);
//    } else {
//        console.log(x.slice(0,20));
////        return x.slice(0, 20);
//    }
//}
//stringL("just a string");
//stringL("just a string is a string but more than a string");






//  4a) Optional Challenge
//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.


function fibonaccier(f) {
    if (f <= 1) {
        return 0;
    }
    if (f === 2) {
        return 1;
    } else {
        return fibonaccier(f - 1) + fibonaccier(f - 2);
    }
}
console.log((4));




//  4b) Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
//








//  4c) Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.



