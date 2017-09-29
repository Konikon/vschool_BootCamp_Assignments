//const
// is is similar to variable

//const name = "Jeevan"
//name = "Das" // Assgnment to constant variable
//
//let 
//


//Template Literals
//
//let name = "Jacob";  
//let age = 20;  
//console.log("hello, my name is " + name + " and I am " + age + " years old.");  
////but now we can use the following syntax:
//
//console.log(`hello, my name is ${name} and I am ${age} years old.`);  

//function handleClick(){
//gathers infor from input bod
//displays i
//}

//var handleClick = function(){
//this is  declarative function syntax
//}

//const handleClick = () => {

//}

//arrow functions have implicit return

//const handleclick =


//______CLASSES IN JAVASCRIPT____________

//function BoyBandMembers(name, hairStyle, hasTattoos, swagLevel){
//    this.name = name;
//    this.hairStyle = hairStyle;
//    this.hasTattoos = hasTattoos;
//    this.swagLevel = swagLevel;
//}
//
////adding a method to class
//
//BoyBandMembers.prototype.sing = function(){
//    console.log("lalalala my name is " + ths.name);
//}
//
//_____new way of doing it in ES6---------
//
//class BoyBandMembers {
//    constructor(name, hairStyle, hasTattoos, swagLevel){
//    this.name = name;
//    this.hairStyle = hairStyle;
//    this.hasTattoos = hasTattoos;
//    this.swagLevel = swagLevel;
//}
//  sing() {
//      console.log("lalalala my name is " + ths.name);
//  }  
//    
//}



//      __________________DO THESE EXERCISES WITH USING ES6 CONVENTION-------------------------------



//1) Filter all numbers out of the array that are even

//function evensOnly(arr) {
//    const newEvens = [];
//for(var i = 0; i < arr.length; i++){
//    if(arr[i] % 2 === 0){
//        newEvens.push(arr[i]);
//    }
//}
//    return newEvens;
//};
//
//console.log(evensOnly([3, 6, 8, 21, 22])); 

//_______

//function evensOnly(arr) {
//    var newEvens = arr.filter(function (arr1) { //does it matter arr vs arr1?
//        return arr1 % 2 === 0;
//    });
//    return newEvens;
//};
//
//console.log(evensOnly([3, 6, 8, 21, 22]));

//----------


//const evensOnly = arr => {
//    const newEvens = [];
//for(var i = 0; i < arr.length; i++){
//    if(arr[i] % 2 === 0){
//        newEvens.push(arr[i]);
//    } 
//} return newEvens;
//}

//const evensOnly = arr => {
//    const newEvens = arr.filter(arr => arr % 2 === 0);
//    return newEvens;
//    }; 
//
//console.log(evensOnly([3, 6, 8, 21, 22])); 






//
//2) Filter all numbers out of the array that are more than 5

//function fiveAndGreaterOnly(arr) {
//    var greater5 = arr.filter(function (arr1){
//    return arr1 >= 5;
//}); return greater5;
//};
//
//console.log(fiveAndGreaterOnly([3, 6, 8, 5, 2])); /// [6, 8]

//--------

//const fiveAndGreaterOnly = arr => {
//    const greater5 = arr.filter(arr1 => arr1 >= 5);
//    return greater5;
//}
//console.log(fiveAndGreaterOnly([3, 6, 8, 5, 2])); /// [6, 5, 8]





//3) Filter all strings out of the array that are less than 5 characters long

//function fiveCharactersAndLessOnly(arr) {
//    var greater5 = arr.filter(function(arr2){
//        return arr2.length <= 5;
//});return greater5;
//};
//
//console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]  
//
//const fiveCharactersAndLessOnly = arr => {
//    const greater5 = arr.filter(arr2 => arr2.length <= 5);
//    return greater5;
//};
//
//console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"] 






//4) Filter out all the people who do not belong to the club

//const arr = [  
//  {
//    name: "Angelina Jolie",
//    member: true
//  },{
//    name: "Eric Jones",
//    member: false
//  },{
//    name: "Paris Hilton",
//    member: true
//  },{
//    name: "Kayne West",
//    member: false
//  },{
//    name: "Bob Ziroll",
//    member: true
//  }
//]
//
//const peopleWhoBelongToTheIlluminati = arr => {
//    const theHighs = arr.filter(obj => obj.member === true);
//    return theHighs;
//};
//
//console.log(peopleWhoBelongToTheIlluminati(arr));






//5) Filter out all the people who are not old enough to see 'The Matrix' (18)

//function ofAge(arr){
//
//}

//const arr = [  
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
//]
//
//
//const ofAge = arr => {
//    const theHighs = arr.filter(obj => obj.age >= 18);
//    return theHighs;
//};
//console.log(ofAge(arr));
