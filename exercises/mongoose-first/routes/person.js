const express= require("express");
const personRoutes = express.Router();
const Person = require("../models/person");

personRoutes.get("/", (req,res)=>{
  //getting the persons arry from the database
  Person.find(req.query,(err, people)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(people);
  })

})

personRoutes.get("/:id", (req, res)=>{
    Person.findOne({_id: req.params.id},(err, person)=>{
        if(err) return res.status(400).send(err);
        return res.status(201).send(person)
    })
})
//
//
personRoutes.post("/", (req, res)=>{
    const brandNewPerson = new Person(req.body);
    brandNewPerson.save((err, newPersonThatWasJustSaved)=>{
        if(err) return res.status(400).send(err);
        return res.status(201).send(newPersonThatWasJustSaved);
  })
})


personRoutes.delete("/:id", (req, res)=>{
    Person.findByIdAndRemove(req.params.id, (err, person)=>{
      if(err) return res.status(400).send(err);
      return res.status(201).send(person);
    })
})

personRoutes.put("/:id", (req, res)=>{
  Person.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, person)=>{
    if(err) return res.status(400).send(err);
    return res.send(person);
  });
});

module.exports = personRoutes;
