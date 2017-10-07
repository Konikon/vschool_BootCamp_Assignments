import React from "react";
import TurtleComponent from "./TurtleComponent"
import turtleArray from "../turtles.json"

function TurtleMapper(){
  console.log(turtleArray);
  return (
    <div className="test">
      {turtleArray.map((turtle, i) =>{
        return <TurtleComponent turtle={turtle} />
      })}
    </div>
  )
};

export default TurtleMapper;
