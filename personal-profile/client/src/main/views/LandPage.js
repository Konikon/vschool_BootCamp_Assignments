import React from "react";
import Ms from "../images/Msaffron.png"
import {Link} from "react-router-dom";

function LandPage(){
    return(
        <div className="landPage_wrapper">
          <span className="landPage_name">M<span >akarand</span> A K<span >armarkar </span></span>
          <hr/>
            <div className="landPage_name2">
                <Link to="/projects"> Projects</Link>
                <Link to="/resume" > Resume </Link>
            </div>
            <div>
            <img src={Ms} alt="logo"></img>
            </div>
            <hr/>
        </div>
    )
}

export default LandPage;
