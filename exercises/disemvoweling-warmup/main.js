// Disemvoweling
// 28 AUGUST 2017
// Today we are going to be building a function that
//removes all vowels and spaces from a string. It will then return
//the result as an object with two keys "str" and "vowels".
//
// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }

// 1) make an array that splits the string into ind char
// disemvoweler(input) => {
//   const splitstr = input.split(" ");
//   const splitstr2 = splitstr.split()
//   console.log(splitstr2);
//   for (let key of splitstr){
//      input.includes(a,e,i,o,u)
//   }
// }
// //2)do includes() method on the array to split
// //create str and vowels empty array
//
// //3)convert the arrays into object with two keys
//
// console.log(disemvoweler(patric))
//
// input = ("yoi njwe")
// const splitstr = input.split(" ")
//
// // const splitstr2 = splitstr.split("");
// console.log(splitstr);
// // console.log(splitstr2);


const disemvoweler = function(str){
  let output = {
    str: "",
    vowels: ""
  }
  for( let i = 0; i<str.length; i++){
    if(str[i] === /[aeiou]/gi){
      output.vowels += str[i];
    } else if(str[i].match(/\s/)){
      continue;
    } else {
      output.str += str[i];
    }
  }
  return output;
}

console.log(disemvoweler("teset t45tiit"));
