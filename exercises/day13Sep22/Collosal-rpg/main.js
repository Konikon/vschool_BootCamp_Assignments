//npm module requrements

var readline = require("readline-sync");
var colors = require('colors');


//greeting and game explaination

console.log("Hi there! Its such a nice day \n\n")
var playerName = readline.question(colors.red("what is your name? "));

console.log(colors.blue("Nice to meet you " + playerName));
console.log("\n\nwould you like to play a game? \n");
console.log("The game involves a stroll in the black forests \n where you could get a treasures but would also \n have you fight \n enemy. \n\n\n Don\'t worry you will be given guidance and health points along the way. \n Remember that you will be entering an unknown territory and \n danger lurks at each turn");

console.log("\n\nat any point in the game you can press \n\"print\" \nand you can know your health in %health points and \nyour treasure curios you have collected");


////write functions
//create constructor function for creating player name, starting healthpoints, and curios count.

var Player(name, healthPoints, curiosCount, alive){
    this.name = playerName;
    this.healthPoints = 100;
    this.curiosCount = [];
    this.alive = true;
}

var player = new Player()


var Monster(name, mhealthpoints, curiosCount, alive){
    this.name = monsterName;
      this.healthPoints = 100;
    this.curiosCount = [];
    this.alive = true;
}






function playerReady(){
   if(readline.keyInYN("So are you ready to start? ")) {
      var player = 1;
      var healthPointsPercentage = 100;
      var curiosCount = [];
       console.log(`healthPointsPercentage: ${healthPointsPercentage}
curiosCount: ${curiosCount}`)
//       return {
//        healthPointsPercentage: healthPointsPercentage +"%", curiosCount: curiosCount;
//       }
      }else{
      console.log("\n\n\n\nBYE!");
      }
};
playerReady();
//function inventoryCount(){
//    
//}
//
//
//function healthPoint(){
//    
//}
//
//

//function walk(){
//
//    console.log("please press \'w\' to continue walking");
//    var walking = readline.question("press w :");
//    if(walking !== "w"){
//        console.log("please press \'w\' to continue walking")
//    } else {    
//        //    ask the user to press 'w' for walk
////    use mathRandom for calcultion 
//    var walkSenarios = Math.floor(Math.random() * (3 - 1) + 1);
//    return walkSenarios;
//}
////};

//
//
//function run(){
//    var runResult = Math.floor(Math.random(0,1));
//console.log(runResult);
//}
//run();
//    return runResult;
//}
//console.log(runResult);
//
//
//function fight(){
//    var enemy = enemyCreation();

//    attackEnemy(enemy)
//}
//
//
//
//function attackEnemy(enemy){
//    
//}
//
//
//function enemyAttack(){
//    
//}
//
//
//function die(){
//    
//}
//
//
//function enemyDie(){
//    
//    
//}
//
//
//function enemyCreation(min,max){
//  var enemyNum = Math.floor(Math.random() * (max - min) + min);
//    if(enemyNum === 1){
//        var enemyIs = "Gogoligorth";
//    }
//    if(enemyNum === 2){
//        var enemyIs = "Timur";
//    }
//    if(enemyNum === 3){
//        var enemyIs = "Orraangjeb";
//    }
//    return enemyIs;
//};
//enemyCreation(3,1);
//




