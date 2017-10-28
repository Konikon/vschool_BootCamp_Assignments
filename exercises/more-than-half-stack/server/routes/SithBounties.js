// const express = require("express");
// const router = express.Router();
//
//
// let bounty = []
//
//
// app.get("/bounty", (req, res) => {
//   let bountyF = bounty.filter((bount) => {
//     for (let key in req.query) {
//       if (String(bount[key]) !== req.query[key]) {
//         return false;
//       }
//     }
//     return true
//   })
//   return res.send(bountyF);
// })
//
//
// app.post("/", (req, res) => {
//   req.body._id = uuid()
//   bounty.push(req.body)
//   res.send(bounty[bounty.length - 1]);
// });
//
// app.delete("/:id", (req, res) => {
//   console.log(req.params);
//   bounty = bounty.filter((bount) => {
//     return bount._id !== req.params.id
//   });
//   res.send({
//     message: "ITEM REMMOVED SUCCESSFULLY"
//   })
// });
//
// app.put("/:id", (req, res) => {
//   let newBount = req.body
//   bounty = bounty.map((bount) => {
//     if (bount._id === req.params.id) {
//       return newBount = Object.assign(bount, newBount);
//     } else {
//       return bount
//     }
//   });
//   res.send(newBount);
// })
//
// module.exports = {
//   routes
// }
