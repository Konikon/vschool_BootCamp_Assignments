function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function check(a,b){
//    convert 2 parameters to string
// check the last index of 
    if(a.lastIndexOf(a) === b.lastIndexOf(b)){
        return true;
    }else{
        return false;
    }
}
//write a function that, given 2 numbers, returns true is the last number is the same in both

module.exports = {
    add: add,
    sub: sub,
    mult: multiply,
    div: div,
    check: check
};