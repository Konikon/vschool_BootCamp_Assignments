var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

var index = fruit.indexOf("orange")
console.log(index);

fruit.push(index);
console.log(fruit);

var vegetablesLength = vegetables.length
console.log(vegetablesLength);

vegetables.push(vegetablesLength);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var food2 = food.splice(4,2);
console.log(food2);
console.log(food);

food.reverse();
console.log(food.join(" "));