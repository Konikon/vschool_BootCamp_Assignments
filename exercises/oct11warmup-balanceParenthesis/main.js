function pCheck (str){
//find index of ( has last index of ) and if they dont return -1
//
//call the same function again to check the next indexOf and lastIndexOf
 if (str.indexOf("(") !== -1 && str.lastIndexOf(")") !== -1)
//____OR_____
//find the keycode in string ie return string converted in its keycode
// check if keycode of ( = 28 has key code 29 = ) further in the string
//____OR_____
//loop thr strArr
//track first....jamie
// ____OR_____
// openieng ( adds 1 and ) substracts 1 from count. If the count is
//
let count = 0;
for( let i = 0; i < str.length; i++){
  if (str[i] === "("){
    count++;
  }else if (str[i] === ")"){
    count--;
    if(count < 0){
      return false;
    }
  }
}
  return count === 0
}

module.exports = pCheck;
