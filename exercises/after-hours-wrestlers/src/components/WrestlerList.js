import React from "react";
import WrestlerComponent from "./WrestlerComponent";


function WrestlerList(props){
 const wrestlerArray = props.wrestlerArray.map((wrestler,i)=>{
   const color = i % 2 === 0 ? "lightblue" : "lightpink";
    return <WrestlerComponent firstName={wrestler.firstName}
                              lastName={wrestler.lastName}
                              phone={wrestler.phone}
                              img={wrestler.img}
                              key={i}/>



  });
  return wrestlerArray;
}

export default WrestlerList;
