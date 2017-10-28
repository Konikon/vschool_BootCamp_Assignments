const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const uuid = ("uuid/v4");
const morgan = require("morgan");
const port = process.env.PORT || 9000;
const utils = require("./utils")

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(utils.explosion);


app.get("/", (req, res)=>{
  res.send(req.explode);
  console.log(req.explode);
});

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})
