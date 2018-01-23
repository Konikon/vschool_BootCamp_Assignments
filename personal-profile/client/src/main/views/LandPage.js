import React from "react";
import Ms from "./images/Msaffron.png"

function LandPage(){
    return(
        <div className="LandPage_wrapper">
          <h1 >Makarand A Karmarkar </h1>
          <hr/>
          <resume></resume>
          <img src={Ms}></img>
          <hr></hr>
        </div>
    )
}

export default LandPage;
