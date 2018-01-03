import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="header_wrap">
        <Link to="/"> mak </Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Resume"> Resume </Link>
        <a> </a>
        </div>
    )
}

export default Header;
