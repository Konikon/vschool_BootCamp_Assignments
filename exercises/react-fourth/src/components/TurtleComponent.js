import React from "react";

function TurtleComponent(props){
  return(
    <div className="container">
      <h1 className="title">Name {props.turtle.name}</h1>
      <h3 className="nickName">Nick Name {props.turtle.nickName}</h3>
      <h3 className="weapon">Weapon {props.turtle.weapon}</h3>
      <img src={props.turtle.imgUrl} alt={props.turtle.name}/>
    </div>
  )
}


export default TurtleComponent;
