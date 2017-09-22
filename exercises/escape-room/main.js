
var readline = require("readline-sync");
var name = readline.question("what is your name? ");
var index; 

console.log("welcome " + name + "!");

if(readline.keyInYN("would you like to play a game? type Y/N:")){
console.log("\n Good!  \n\n\nYou have 3 options:");
    var options = ["Put your hand in the hole", "Find the key", "Open the door"];
    while(index != 4){
        index = readline.keyInSelect(options, "which option") 
        if(index === 0){
            console.log("You are DEAD!");
            break;
        };
        
        if (index === 1){
            if(readline.keyInYN("found the key? ")){
            console.log("Great! \n Now you can open the door");
            break;
        } else {
            console.log("Find it first");
        }
        };
        
        if(index === 2){
            if(readline.keyInYN("Do you have a key? ")){
                console.log("Great! \n Now you can open the door");
            break;
            }else{
            index = 1;
            }
        };  
        
        if(index === -1){
            console.log("BYE!");
            break;
        }
    };    
}else{
   console.log("BYE!");
};


