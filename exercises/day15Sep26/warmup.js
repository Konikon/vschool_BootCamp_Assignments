// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.

var doubleX=function(str) { 
//    we need to loop through the string 
    for(var i = 0; i < str.length; i++){
//        find the first instnce of x
//        find if second instance (immediately following) is also x
      if((str[i] === "x" && str[i+1]) === "x"){
    
    }else{
        return false;
    }

}
}
doubleX(axxes);

can use indexOf(x) or 