//Needs an object called shopper
// should have string, number, boolean, function
//Object shopper should have "groceryCart" property having array //of items in a grocery cart





var shopper = {
        morningOrEve: "Morning",
        timeOfDay: 10,
        isDaytime: true,
        cartItems: ["bread", "eggs", "milk", "fruits", "vegetables"],
        speak: function () {
            return "Welcome shopper!!!"
        }

shopper.speak()
    
    
    //console.log(this.morningOrEve + this.timeOfDay + this.isDaytime this.cartItems)

        //this helps mostly when it is in an object but can be used elsewhere too
