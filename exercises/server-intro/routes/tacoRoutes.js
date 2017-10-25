const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
  res.send("GET ALL tacos");
});

router.get("/:id", (req,res)=>{
  res.send("GET one tacos");
});

router.post("/", (req,res)=>{
  res.send("POST one tacos");
});

router.delete("/", (req,res)=>{
  res.send("DELETE one tacos");
});

router.edit("/", (req,res)=>{
  res.send("EDIT one tacos");
});


module.exports = router;
