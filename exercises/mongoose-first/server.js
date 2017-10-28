const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/person", (err)=>{
  if (err) throw err;
  console.log("connected to the database");
});

app.use("/person", require("./routes/person"))

app.listen(port, ()=>{
  console.log(`App is listening on ${port}`)
})
