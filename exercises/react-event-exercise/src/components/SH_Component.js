import React from "react";
import index from "../index.css";

function SH_Component(props){

  function handleClick(){
    alert(props.hero.catchPhrase)
  }
  return(
    <div className="SH_box">
      <h2 onClick={()=>handleClick()}> Superhero Name: {props.hero.name}</h2>
      <img className="photo" onClick={()=>handleClick()}src={props.hero.image}
      key={props.hero.name}/>
    </div>
  )
}
export default SH_Component;
