// https://coursework.vschool.io/array-map-exercises/

//1) Make an array of numbers that are doubles the the first array

const doubleNumbers = arr => arr.map(arr1 => arr1 * 2);
 


//console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2) Take an array of numbers and make them strings

//const stringItUp = arr => arr.map (arr1 => arr1.toString());

//or _____________________

const stringItUp = arr => arr.map (String);

//console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"] 

//3) Make an array of strings of the names

//function namesOnly(arr){
//return arr.map(obj => obj.name);
//}
//
//arr([  
//  {
//    name: "Angelina Jolie",
//    age: 80
//  },{
//    name: "Eric Jones",
//    age: 2
//  },{
//    name: "Paris Hilton",
//    age: 5
//  },{
//    name: "Kayne West",
//    age: 16
//  },{
//    name: "Bob Ziroll",
//    age: 100
//  }
//]) 
//// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


//function readyToPutInTheDom(arr){
//    return arr.map(obj => {
//        return '<h1>${obj.name}</h1><h2>${obj.age}</h2>'
//    })
//}


module.exports = {
    double: doubleNumbers,
    
    stringUp: stringItUp,
//    
//    nameFilter: namesOnly,
    
//    makeh1h2: 
    
    
    
    
} 
