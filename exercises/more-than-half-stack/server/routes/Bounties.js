const express = require("express");
const Bounties = express.Router();

let bounty = []

Bounties.get("/", (req, res) => {
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


Bounties.post("/", (req, res) => {
  res.send(req.body)
  req.body._id = uuid()
  bounty.push(req.body)
  res.send(bounty[bounty.length - 1]);
});

Bounties.delete("/:id", (req, res) => {
  bounty = bounty.filter((bount) => {
    return bount._id !== req.params.id
  });
  res.send({
    message: "ITEM REMMOVED SUCCESSFULLY"
  })
});

Bounties.put("/:id", (req, res) => {
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

module.exports = Bounties
