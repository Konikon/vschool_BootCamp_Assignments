const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

let bounty = []


app.get("/bounty", (req, res) => {
  let bountyF = bounty.filter((bount) => {
    for (let key in req.query) {
      if (String(bount[key]) !== req.query[key]) {
        return false;
      }
    }
    return true
  })
  return res.send(bountyF);
})


app.post("/bounty", (req, res) => {
  req.body._id = uuid()
  bounty.push(req.body)
  res.send(bounty[bounty.length - 1]);
});

app.delete("/bounty/:id", (req, res) => {
  console.log(req.params);
  bounty = bounty.filter((bount) => {
    return bount._id !== req.params.id
  });
  res.send({
    message: "ITEM REMMOVED SUCCESSFULLY"
  })
});

app.put("/bounty/:id", (req, res) => {
  let newBount = req.body
  bounty = bounty.map((bount) => {
    if (bount._id === req.params.id) {
      return newBount = Object.assign(bount, newBount);
    } else {
      return bount
    }
  });
  res.send(newBount);
})


app.listen(8000, () => {
  console.log("App is listenig to port 8000");
});
