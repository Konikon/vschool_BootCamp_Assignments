import React from "react";

function Sh_Component(props){

  function handleClick(){
    alert(props.hero.catchPhrase)
  }

  return(
    <div className="SH_box">
      <h3> Superhero Name: </h3>
      <h3 onClick={()=>handleClick()} style={{fontFamily: "Helvetica", color: "chocolate"}}> {props.hero.name}</h3>
      <img className="photo" onClick={()=>handleClick()}src={props.hero.image}
      key={props.hero.name} alt={props.hero.name}/>
    </div>
  )
}
export default Sh_Component;
