const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

let bounty = []

app.use(bodyParser.json());

app.get("/bounty", (req, res)=>{
  //filter the response based on hte query object
  let query = object.keys(req.query);
  console.log(query);

  //loop through bounty and return only those that match
  //property value

  res.send(bounty);
});

app.post("/bounty", (req, res)=>{
  req.body._id = uuid()
  bounty.push(req.body)
  res.send(bounty[bounty.length-1]);
});

app.delete("/bounty/:id", (req, res)=>{
  console.log(req.params);
  //with the id, find object in database and remove it
  bounty = bounty.filter((bount)=>{
    return bount._id !== req.params.id
  });
  //send back confirmation
  res.send({
    message: "ITEM REMMOVED SUCCESSFULLY"
  })
});

app.put("/bounty/:id", (req, res)=>{
  // with the id, find object in database, ad replace it with req.body
  let newBount = req.body
  bounty = bounty.map((bount) =>{
    if(bount._id === req.params.id){
      return newBount = Object.assign(bount, newBount);
    } else {
      return bount
    }
  });
  res.send(newBount);
})


app.get("/bounty/:id", (req, res)=>{
    //find object with matching id and res.send the object
    let bounty = bounty.find((bount)=>{
      if(bount._id === req.params.id){
    });
    res.send(bount);
}
})


app.listen(8000, ()=>{
  console.log("App is listenig to port 8000");
});
