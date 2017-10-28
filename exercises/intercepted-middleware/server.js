const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const uuid = ("uuid/v4");
const port = process.env.PORT || 9000;

const utils = require("./utils")

app.use(utils.adder);
app.use(bodyParser.json());
app.use(morgan("dev"));


app.get("/", (req, res)=>{
  res.send(req.add);

})


app.listen(port, ()=>{
  console.log(`Server is serving ${port}`)
})
