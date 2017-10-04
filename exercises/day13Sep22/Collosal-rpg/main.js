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

function Player(name, healthPoints, curiosCount, alive) {
    this.name = playerName;
    this.healthPoints = 100;
    this.curiosCount = [];
    this.alive = alive;
}

var player = new Player(playerName)


function Monster(name, mhealthpoints, alive) {
    this.name = monsterName;
    this.mHealthPoints = mhealthpoints;
    this.alive = true;
}

function playerReady() {
    if (readline.keyInYN("So are you ready to start? ")) {
        var player = 1;
        var healthPointsPercentage = 100;
        var curiosCount = [];
        console.log(`healthPointsPercentage: ${healthPointsPercentage}
curiosCount: ${curiosCount}`);
        
      
    } else {
        console.log("\n\n\n\nBYE!");
        return;
    }
};
playerReady();
walk();


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

function walk() {
    console.log("please press \'w\' to continue walking");
    var walking = readline.question("press w :");
    while (walking !== "w") {
        console.log("please press \'w\' to continue walking")
        var walking = readline.question("press w :");
    } if (walking === "w"){
        var walkSenarios = Math.floor(Math.random() * (3 - 1) + 1);
        console.log(walkSenarios);
    }
    if(walkSenarios === 1){
        console.log("Great! To keep on walking press w ")
        var walking = readline.question("press w :");
    }
    if(walkSenarios === 2){
        var enemyIs = enemyCreation(1, 3);
        console.log("You are faced with" + enemyIs);
        console.log("Do you want to fight? ");
    }
    
    if(walkSenarios === 3){
        var enemyIs = enemyCreation(1, 3);
        console.log("you are attacked by" + enemyIs )
        
        var enemyIs = 
    }
};


function run() {
    var runResult = Math.floor(Math.random(0, 1));
    return runResult;
}

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
function enemyCreation(min, max) {
    var enemyNum = Math.floor(Math.random() * (max - min) + min);
    if (enemyNum === 1) {
        var enemyIs = new Monster(Gogoligorth, 10);
    }
    if (enemyNum === 2) {
        var enemyIs = new Monster(Timur, 20);
    }
    if (enemyNum === 3) {
        var enemyIs = new Monster(Orraangjeb, 30);
    }
    return enemyIs;
};

