import React from "react";
import Ms from "../images/Msaffron.png"
import Ms2 from "../images/Msaffron2.png"
import {Link} from "react-router-dom";

function LandPage(){
    return(
        <div className="landPage_wrapper">
          <div>
            <span className="landPage_name">M<span >akarand</span> A K<span >armarkar </span></span>
              <div className="landPage_name2">
                  <Link to="/projects"> Projects</Link>
                  <Link to="/resume" > Resume </Link>
              </div>
              <div className="flipper">
                    <div className="front card">
                        <img src={Ms} alt="logo" style={{background: "center"}}></img>
                    </div>
                    <div className="back card">
                        <img src={Ms2} alt="logo" className="center"></img>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default LandPage;
