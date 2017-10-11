import React from "react";

function List (props){
    return(
        <div>
            <input placeholder="Type your list here"
                   onChange={props.listCh}
                   type="text"
                   value={props.inputType}/>
            <h1>{props.inputType}</h1>
        </div>
    )
}


export default List;
