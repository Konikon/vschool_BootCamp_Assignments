import React from "react";
import Sh_Array from "../Sh_List.json";
import Sh_Component from "./Sh_Component"


function Sh_Mapper(){
  return(
    <div>
      {Sh_Array.map((hero, index)=> <Sh_Component hero={hero} key={hero.name + index}/>)}
    </div>
  )}
export default Sh_Mapper;
