//Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.
//
//
//var stringer = "Hey the apple fever is high in this place! No, REALLY HIGH!"
//
////for( i = 0; i < stringer.length; i++){
////  var string2Array = stringer[i];
////  console.log(string2Array);
////}
////
////second way of doin import
//function printString(str){
//    for(var i= 0; i < str.length; i++){
//        console.log(str[i]);
//}
//}
// printString("Hey the apple fever is high in this place! No, REALLY HIGH!");

//function destringer(str){
//for(var i = 0; i < str.length; i++){
//var des = [];
//console.log(des.push[i]);
//}
//}
//  destringer(knoiengqer);



////if the var stringer is put inside function it registers it but does not destring it.


//var destringer = stringer.split("")
//console.log(destringer);
//================================================================================







//Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.
//

//function charFinder(str, char){
//  for(i = 0; i < str.length; i++) {
//    if (char === str[i]) {
//        console.log(char);
//        return;
//    } else {
//        console.log("no occurance of this letter in the string");
//    }
//}
//}
//
//charFinder("eiofnaf", "e");
////
////
////Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.max()
////================================================================================









////Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
////
//
//
//function find42(arr) {
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === 42) {
//            console.log("your search yielded result and it was found at", i);
//            return;
//        }
//        console.log("keep on searching for the meaning of life and the uiverse");
//    }
//
//    find42([23, 2, 4, 7, 91, 42]);
//    find42([23, 2, 4, 7, 91]);


    //Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

//    function minimer(arr) {
//        smallNum = arr[0];
//        for (var i = 0; i < arr.length; i++) {
//            if (arr[i] <= smallNum) {
//                console.log("smallest untill now was", smallNum);
//                smallNum = arr[i];
//                console.log("The new smallest is", smallNum, "\n");
//            }
//        }
//        console.log(smallNum);
//    }
//minimer([23, 2, 4, 7, 91, 42, 0, -6, 5.5, -5])

