//document.getElementById("b1").addEventListener("click", function(){
//    document.getElementById("b1").style.backgroundColor = "red";
//    console.log("fire");
//});
////
var cars = [  
    {make: "Ford", model: "E150", price: 10000, year: 2010},
    {make: "Chevy", model: "Camaro", price: 20010, year: 2001},
    {make: "Toyota", model: "Tacoma", price: 30900, year: 2006},
    {make: "Ford", model: "Explorer", price: 9000, year: 2003},
    {make: "Ford", model: "E150", price: 2400, year: 2015},
]

//var cars = ["truck", "van", "sedan"];
//for (var i = 0; i < cars.length; i++) {  
//  console.log((cars[i]) +" goes vroom");
//}

//cars.forEach(function(car){
//    console.log(car +" goes vroom")
//});


//var angryCars = cars.map(function(car){
//        return car.toUpperCase();     
//         });
//console.log(angryCars);

//
//var newCars = cars.filter(function(car){
//    
//    return car.year > 2005;
//});
//console.log(newCars);

//var coolVan = cars.find(function(car){
//    return car.model === "E150";
//});
//console.log(coolVan);

//var coolVan = cars.some(function(car){
//     if(car.model === "E150"){
//       return true; 
//     }
////    console.log("Not every car is an E150");
//    
//});
//console.log("It is" + coolVan + "that there is one or more E150s");


//
//var coolVan = cars.every(function(car){
//     if(car.model === "E150"){
//        return true; 
//     }
//     
////    console.log("Not every car is an E150");
//});
//console.log(coolVan);



//var carTotals = cars.reduce(function(type, car){
////    console.log(type);
//    if(car.make === "Ford"){type.ford++;}
//    if(car.make === "Chevy"){type.chevy++;}
//    return type;
//},{ford: 0, chevy: 0});
//
//console.log(carTotals);






var expenses = ["10", "22", "1.99", "1500"];

var sum = expenses.reduce(function(total, current){
    
}, 0)