import React from "react";

function NameList (props){
  return(
      <ol>
        <button onClick={props.handleClick}> Add above item </button>
        {props.names.map((name,i)=>
          <li key={name + i}> {name} </li>)}
      </ol>
    )
}

export default NameList;
