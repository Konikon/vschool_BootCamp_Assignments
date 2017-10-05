//Matching Words
//You are a treasure hunter and you have found a cave that you believe holds the ultimate treasure. But there is a wall in your way. On it is inscribed this
//
//"Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pulldrinking the right vinegar fanny pack pull minim right chicharrones migas."
//And below it says
//
//Show the repeats and you shall enter
//
//There are 5 levers, and as an experienced adventurer, you know if you pull the wrong one, you'll meet your final demise. Since we are programming adventurers, write a program that returns an array of every words that appears more than once in the phrase. (Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.)



//function findRepeat(str) {
//    var strArray = str.split(" ");
//  
//    {
//          const repeatWords = [];
//        strArray.filter(function(j){
//            if (strArray[i] === strArray[j]){
//                repeatWords.push[j];
//            }
//            return repeatWords;
//        });
//    }
//}
//
//console.log(findRepeat("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."));
//-----------------------

var str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pulldrinking the right vinegar fanny pack pull minim right chicharrones migas."

var strArray = str.split(" ");

    strArray.find(function (secondOcr) {
        if (secondOcr === item) {
            prev.push(item);;
        }
    })



console.log(filtRepeats(str));
