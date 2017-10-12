import React from "react";

function CaredFor(props){
    return(
        <div >
            <div className="container">
                <div className="mugshots">
                    <img className="photo1" src={props.hitlist.image} alt={props.hitlist.name + "DON Corlenone's list"}/>
                    <img className="photo2"src={'https://cdn.pixabay.com/photo/2013/07/12/12/57/crosshair-146621_960_720.png'} alt={props.hitlist.name + "DON Corlenone's list"}/>
                </div>
                <div className="name">
                    <h3> {props.hitlist.name}</h3>
                    <h2> "HIT" </h2>
                </div>
            </div>
        </div>
    )
}

export default CaredFor;
