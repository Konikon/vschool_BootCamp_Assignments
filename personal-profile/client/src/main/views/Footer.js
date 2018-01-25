import React from "react";
import github from "../images/github3.png";
import linkedin from "../images/linkedin.jpg";

function Footer(){
  return(
    <div className="footer-wrap">
      <div className="headText">Skills: </div>
      <div>
          <span className="btm">
              <a
                  className="links"
                  href="https://github.com/konikon">
                  <img src="github" alt ="github logo"></img>
              </a>
              <a
                  className="links"
                  href="https://www.linkedin.com/in/mkarmarkar/">
                  <img src="linkedin" alt ="linkedin logo"></img>
              </a>
              <a
                  className="links"
                  href="view my resume">
              </a>
          </span>
      </div>


    </div>
  )
}

export default Footer;
