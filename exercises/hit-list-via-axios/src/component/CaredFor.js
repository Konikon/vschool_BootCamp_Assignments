import React from "react";

function CaredFor(props){
    return(
        <div className="mugshots">
            <img className="photo" src={props.hitlist.image} src={
            `url=${"https://cdn.pixabay.com/photo/2013/07/12/12/57/crosshair-146621_960_720.png"}`} alt={props.hitlist.name + "DON Corlenone's list"}/>
            <h3> {props.hitlist.name}</h3>
            <h2> "HIT" </h2>
        </div>
    )
}

export default CaredFor;
