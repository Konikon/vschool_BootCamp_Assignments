var captainPlanet  = ["planet", "Wind", "Water", "fire", "Heart"];
var backwards =[]
For(var i = 0; i < captainPlanet.length; i++){
// turn the array in to a sring
var arrStr = captainPlanet[i].split("");
var reversed = arrStr.reverse();
Console.log(reverse.join("");
}
            
            OR
            
For(var i = 0; i < captainPlanet.length; i++){
  backwards.push(captainPlanet[i].split("").reverse().join(""));
}
  console.log(backwards.push)
    
    
//    function review
    sayHi1():
    sayHi2():
    
//    function declaration
//    also called function voicing
    
    
    function sayHi1(){
        console.log("Hi from fun declaration!");
    }
    
//    function experession
    var sayHi2 = function(){
        console.log("Hi from fun expression")
    }
    
    function add(){
        return 1+1;
    }
    
    console.log(add());
    console.log(add);
    
//    returning value of a function vs console log
    
    function makeCoffee(water,grounds){
        console.log("COFFEE!");
    }
    
//    consolelog just shouts coffee but return does the evaluation and stores the result in return
    
    
      var original = [1,2,3,4,5];
    
    function doubleNums(arr){
        var doubles = [];
      
        for(var i = 0; i <arr.length; i++){
            console.log(doubles);
//            check by commenting out console.log and uncommenting it
          doubles.push(arr[i]*2);
        }
        return doubles;
    }
    
   
    console.log(doubleNums([1,2,3,4,5]));
    console.log(doubleNums([10,20,30,40,50]));
    
    
//    while loop examples and practice
    
    userIsHappy = true;
    while(userIsHappy){
        var happyOrNo = prompt("Are you happy?");
        var happyOrNo === "no"){
            userIsHappy = flase;
            alert("i'm sorry you're not happy:")
        }else{
            alert("yay");
        }
    }
    
    
//    objects review, practice:
    
    
    var person = {
        firstName: "Eric",
        lastName: "Jones",
        hobbies: ["girfball", "whitewater", "destiny2"],
        speak: function(){
        console.log("Hi, my name is " + this.firstName + "" + this.lastName)
    }
    }
person.speak();
   

//you can add a propery to an object like

person.middleName = "Nate";

// you can push new property by just writing it after object. 
// This just adds it anywhere in the object as seen in the console
// below
console.log(person)
//    calling for the output HAS to have the property name in quotes
   
}"Eric Jones"
   