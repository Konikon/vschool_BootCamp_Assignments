import React from "react";

function ColorComponent(props){
    return (
        <div style={{backgroundColor: `#${props.col.new_color}`, textAlign: "center"}}>
            <h1>Hello, colorful!</h1>
        </div>
    )
}


export default ColorComponent;
