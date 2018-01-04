import React from "react";
import {Link} from "react-router-dom";
import linkedin from "../../images/linkedin.jpg";
import github3 from "../../images/github3.png"

const Linkedin = "https://www.linkedin.com/in/mkarmarkar/";
const Github = "https://github.com/Konikon"

function Header(){
    return(
      <div>
          <div className="header_wrap">
              <Link to="/"> mak </Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Resume"> Resume </Link>

            <a href="Linkedin"><img src={linkedin} /> </a>
            <a href="Github"> <img src={github3} /> </a>
          </div>
      </div>
    )
}

export default Header;
