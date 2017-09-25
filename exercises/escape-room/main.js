var readline = require("readline-sync");
var name = readline.question("what is your name? ");
var index;
var keycount = 0;
console.log("welcome " + name + "!");

if (readline.keyInYN("would you like to play a game? type Y/N:")) {
    console.log("\n Good!  \n\n\nYou have 3 options:");
    var options = ["Put your hand in the hole", "Find the key", "Open the door"];
            index = readline.keyInSelect(options, "which option? ");
                while(index !== 4){
                if (index === 0) {
                console.log("You are DEAD!");
                    break;
                };

            if (index === 1) {
                var keyCount = 0;
                if (readline.keyInYN("found the key? ")) {
                   
                console.log("Great! \n Now you can open the door. Enjoy your freedom");
                break;
                }else if (keyCount !== 1){
                console.log("Find it first");
                index = 1;
            } 
            };

            if (index === 2) {
                var keyCount = 0;
                if (readline.keyInYN("Do you really have a key? ")) {
                console.log("Great! \n Now you can open the door.Enjoy your freedom");
                    keycount += 1
                    break;
                } else if (keyCount !== 1){
                console.log("Find it first");
                if (readline.keyInYN("Do you really have a key? ")) {
                console.log("Great! \n Now you can open the door");
                index = 1;
                }
                }
                };

            if (index === -1) {
            console.log("BYE!");
                break;
            };
        }
    } else {
        console.log("BYE!");
        
    };


//trying to avoid using the keyInYN cause it forces the user out of the if loop inside the while loopp. 


//            if(index === 1 && keycount === 1){
//                console.log("Great! \n Now you can open the door. Enjoy your freedom");
//            
//            } else{
//                console.log("go find the key arround the room.");
//             var keystatus = readline.question("did you find it? ") 
//              
    
//                console.log("Great! \n Now you can open the door. Enjoy your freedom");
//                keycount += 1;
//            }
//        }
//}

            
            