var readlinesync = require("readline-sync");
//function Words(word, similarity, definition) {
//    this.word = word;
//    this.similarity = similarity;
//    this.definition = definition;
//}
//
//var newWord = readlinesync.question("please enter a word to save in to a dictionary: ");
//console.log("your word is " + newWord);
////function to check if it is already in the dictionary
//
//function wordChecker(newWord){
//    while (newWord === this.word){
//        console.log("this word is alredy in the dictionary and its definition is: " + this.definition); 
//        var newWord = readlinesync.question("please enter a word to save in to a dictionary: ");
//if it is return the definition
//    } else {
////if it is not, enter it as a new one 
//        
////ask for a definition 
//    }
//    
//}
//}


//if it is not, enter it as a new one 
////ask for a definition



var wordResponse = "";
var definitionResponse = "";
var dictionary = {};

while(wordResponse !== "q" || definitionResponse !== "q"){
    var wordResponse = readlinesync.question("what word would you like to enter? ");
    if (wordResponse === "q"){
        break;
    }
}
    
    if(dictionary[wordResponse] === undefined){
        var definitionResponse = readlinesync.question("what's the definition to that word? ");
        dictionary[wordResponse] = definitionResponse;
    }else{
        console.log(dictionary[wordResponse]);
    }

    

    
