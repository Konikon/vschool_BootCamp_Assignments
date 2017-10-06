import React from "react";

function Card(props){
  return(
    <div className="card">
      <div >
        <img className="imgstyle" src={props.imgEle} alt="animal images"/><br/>
        Hello, I am {props.name}<br/>
        {props.contactNo}
        </div>

    </div>
  )
};


export default Card;
