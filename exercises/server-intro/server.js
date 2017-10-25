const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const database =[
  {
    title: "chicken Taco",
    price: 2.95,
    _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9881"
  },
  {
    title: "Fish Taco",
    price: 4.95,
    _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9884"
  },
  {
    title: "Double-stuffed birthday surprise Taco",
    price: 5.95,
    _id: "c37a01ce-d7f1-4070-b8fe-58d2df5e9886"
  }
]

app.listen(8000, ()=>{
  console.log("Server is running on port 8000")
}); // 8000 is the port number 80 is the default port. this should be at the end of the
//code VVVV IMP
//It needs to be different than other ervices like react that uses 3000
//app is an object in express and has a couple of methods like listen
//that help us do stuff like listen, delete etc


//server accepts requests and sends response

// app.get means listen for a request called GET

app.get("/tacos", (req, res)=>{
  res.send(database);
});

app.post("/tacos",(req, res)=>{
  let taco = req.body;
  taco._id = uuid();
  database.push(taco);
  res.send(taco);
})

app.delete("/bounty/:id", (req, res)=>{
  console.log(req.params);
  //with the id, find object in database and remove it
  tacos = tacos.filter
  //send back confirmation

})
