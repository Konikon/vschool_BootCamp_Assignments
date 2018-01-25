import React from "react";
import {Link} from "react-router-dom";
import linkedin from "../../images/linkedin.jpg";
import github3 from "../../images/github3.png"


function Header(){
    return(
      <div>
          <div className="header_wrap">
              <Link to="/Projects">Projects</Link>
              <Link to="/Resume"> Resume </Link>

            <a href="https://www.linkedin.com/in/mkarmarkar/"><img src={linkedin} alt="linkedin link" /> </a>
            <a href="https://github.com/Konikon"> <img src={github3} alt="gihub link"/> </a>
          </div>
      </div>
    )
}

export default Header;
