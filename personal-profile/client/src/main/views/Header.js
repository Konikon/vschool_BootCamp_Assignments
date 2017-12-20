import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
        <Link to="/"> Home </Link>
        <Link to="/linkedin">Projects</Link>
        <Link to="/github"> github </Link>
        </div>
    )
}

export default Header;
