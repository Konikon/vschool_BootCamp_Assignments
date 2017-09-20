// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.

var monkeyTrouble=function(aSmile, bSmile){
    if(aSmile === true && bSmile === true){
        return true;
    }
    if(aSmile === false && bSmile === false){
        return true;
    }
    if (aSmile !== true || bSmile === true){
        return false;
    }

}

{
return aSmile === bSmile:
}
console.log(monkeyTrouble(1,0));
console.log(monkeyTrouble(1,1));
console.log(monkeyTrouble(0,1));
console.log(monkeyTrouble(0,0));