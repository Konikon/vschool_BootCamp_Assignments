const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
  res.send("GET ALL burrito");
});

router.get("/:id", (req,res)=>{
  res.send("GET one burrito");
});

router.post("/", (req,res)=>{
  res.send("POST one burrito");
});

router.delete("/", (req,res)=>{
  res.send("DELETE one burrito");
});

router.edit("/", (req,res)=>{
  res.send("EDIT one burrito");
});


module.exports = router;
