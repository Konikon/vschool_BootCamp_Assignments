const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const tacoRoutes = require("./routes/tacoRoutes")
const burritoRoutes = require("./routes/burritoRoutes")

app.use(bodyParser.json());
app.use("/tacos", tacoRoutes);
app.use("/burritos", burritoRoutes);

// const database =[
//   {
//     title: "chicken Taco",
//     price: 2.95,
//     _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9881"
//   },
//   {
//     title: "Fish Taco",
//     price: 4.95,
//     _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9884"
//   },
//   {
//     title: "Double-stuffed birthday surprise Taco",
//     price: 5.95,
//     _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9886"
//   }
// ]

app.listen(8000, ()=>{
  console.log("Server is running on port 8000")
}); // 8000 is the port number 80 is the default port. this should be at the end of the
//code VVVV IMP
//It needs to be different than other ervices like react that uses 3000
//app is an object in express and has a couple of methods like listen
//that help us do stuff like listen, delete etc


//server accepts requests and sends response

// app.get means listen for a request called GET
