//You're making a restaurant, so you need a menu. Make an array of three
//object literal items for dishes on your menu. Then make a constructor
// function and add 3 more items to your menu.





//make three object literals
var menu = [{
    name: "cheesey potatoes",
    price: 5.66,
    description: "these are cheesey potatots"
},
{    name: "cheesey potatoes2 ",
    price: 6.66,
    description: "these are cheesey potatots2"
              
},
{
    name: "cheesey potatoes2 ",
    price: 6.66,
    description: "these are cheesey potatots3"
}
]


//making a constructor function

function MenusItems(name,price,description) {  
    this.name =name;
    this.price = price;
    this.description = description;
}

//push the new menu items in the list

var pot1 = new MenusItems("cheesy potatoes4", 7.44,"these are cheesey potatots4" );
var pot2 = new MenusItems("cheesy potatoes5", 7.44,"these are cheesey potatots5" );
var pot3 = new MenusItems("cheesy potatoes6", 7.44,"these are cheesey potatots6" );
menu.push(pot1, pot2, pot3);

//console.log(menu);

//Now that we have our basic site lets output our data on
//the page using javascript.
//
//To do that make a for loop to iterate over the array and use innerHTML to create new elements rather than hardcoding them on the page. (You'll likely want to delete the placeholder dummy data you wrote to make room for the data from the javascript)
//pushing the menu items on the website


for (var i = 0; i < menu.length; i++){
document.getElementById("menu-list").innerHTML += "<li>" + menu[i].name + menu[i].price + menu[i].description + "</li>";
}
//    var newMenuItem = document.getElementById("menu-list");
//    console.log(newMenuItem);
//    var itemText = menu[i].value;
    
    
//    var li = document.createElement("li");
//    var textNode = document.createTextNode(menu[i].name,menu[i].price,menu[i].description);
//    console.log(menu[i].name,menu[i].price,menu[i].description);
//    li.appendChild(textNode);
//    console.log(textNode);
//   
//};
// var ul = document.getElementById("menu-list");
//    ul.appendChild(li);
//    console.log(ul);
//
//
