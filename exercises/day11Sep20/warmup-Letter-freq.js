var phrase = 'slimy smelly solution'; 
var splitPhrase = phrase.split('');
var letterCount = {};

//console.log(splitPhrase);
//var phraseCount = splitPhrase.reduce(function(letter, count){
//if(letter.)
//    
//    want to compare each letter in a string and for every occurance of it want to count it.

    
    
//}

//for (i = 0; i < splitPhrase.length; i++){
//    var splitPhrase = phrase.split('');
//    if (splitPhrase.indexOf(splitPhrase[i]) === splitPhrase.lastIndexOf(splitPhrase[i])){
//        count += splitPhrase[i];
//       
//    } else {
//        uniques += splitPhrase[i];
//        
//    }
////}
// console.log(count.length);
//console.log(uniques.length);

splitPhrase.forEach(function(letter){
    if(letterCount[letter] === undefined){
        letterCount[letter] = 1;
    } else {
        letterCount[letter]++;
    }
    })
console.log(letterCount);


var vegetables = ["carrot", "zuchini", "eggplant"];
vegetables.forEach(function(item,  index, array){
console.log(item);
console.log(index); 
console.log(array);
});
