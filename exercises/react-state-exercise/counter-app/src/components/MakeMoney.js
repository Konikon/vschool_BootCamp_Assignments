import React from "react";


function MakeMoney(props){
  return (
    <div>
      <h2>Made $ {props.moneyCounter}</h2>
      <button onClick={props.moneyMaker}>Make Money </button>
      <button onClick={props.moneySpender}>Spend Money </button>
    </div>
  )
 }

 export default MakeMoney;
