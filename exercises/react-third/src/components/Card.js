import React from "react";

function Card(props){
  return(
    <div className="card">
      <div >
        Hello, I am {props.name}
        <img className="imgstyle" src={props.imgEle}/>
        {props.contactNo}
        </div>

    </div>
  )
};


export default Card;
