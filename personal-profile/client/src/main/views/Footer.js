import React from "react";

function Footer(){
  return(
    <div className="footer-wrap">
      <div className="headText">Skills: </div>
      <div>
          <span className="btm">
              <a
                  className="links"
                  href="https://github.com/konikon">
                  <img src="../../images/github3.png" alt ="github logo"></img>
              </a>
              <a
                  className="links"
                  href="https://www.linkedin.com/in/mkarmarkar/">
                  <img src="../../images/linkedin.png" alt ="linkedin logo"></img>
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
