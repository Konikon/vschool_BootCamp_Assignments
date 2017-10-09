import React from "react";
import SH_Array from "../SH_List.json";
import SH_Component from "./SH_Component"


function SH_Mapper(){
  return(
    <div>
    {SH_Array.map((hero, index)=> <SH_Component hero={hero} key={hero.name + index}/>)}
    </div>
  )}
export default SH_Mapper;
