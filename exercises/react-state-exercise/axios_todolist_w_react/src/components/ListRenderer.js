import React from "react";

function ListRenderer(props){
    return(
        <div>
              <input type="text"
                     placeholder="Enter list title"
                     value={props.valueTitle}
                     name="title"
                     onChange={props.handleChange}/>

              <input type="text"
                     placeholder="Enter list description"
                     value={props.valueDescription}
                     name="description"
                     onChange={props.handleChange}/>

              <button onClick={()=>props.postList({props.listPopulate})}>Submit</button>

              <h1>Title: {props.listPopulate.title}</h1>
              <h3>Description: {props.listPopulate.description}</h3>
              <button onClick={()=>props.handleClick(props.listPopulate._id)}> Delete </button>
        </div>
    )
}

export default ListRenderer;
