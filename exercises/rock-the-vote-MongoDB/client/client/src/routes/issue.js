const express = require("express");
const issueRoutes = express.Router();
const Issue = require("../models/issue");

issueRoutes.get("/", (req, res)=>{
  Issue.find(req.query,(err, issues)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(issues);
  })
})

issueRoutes.get("/:id", (req, res)=>{
  Issue.findById(req.params.id, (err, issue)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(issue)
  })
})

issueRoutes.post("/", (req, res)=>{
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(savedIssue);
  })
})

issueRoutes.delete("/:id", (req, res)=>{
  Issue.findByIdAndRemove(req.params.id, (err, deletedIssue)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(deletedIssue);
  })
})

issueRoutes.put("/:id", (req, res)=>{
  Issue.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedIssue)=>{
    if(err) return res.status(400).send(err);
    return res.status(201).send(updatedIssue);
  })
})

module.exports = issueRoutes;
