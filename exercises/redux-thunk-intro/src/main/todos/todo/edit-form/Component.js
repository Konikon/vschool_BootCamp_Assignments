//display form
//call event listners

import React from "react";
import {connect} from "react-redux";
import {todos} from "../../../../redux/actions/";

function EditFormComponent(props){
  console.log(props);
    return(
        <div>
            <input onChange={props.handleChange}
                    checked={props.editedTodo.completed}
                    name="completed"
                    type="checkbox"/>
            <button onClick={props.handleToggle}>Edit</button>

            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={(e)=>{props.editTodo(props.editedTodo, props.id);
                              e.preventDefault()}}>
                    <input onChange={props.handleChange}
                            name="title"
                            type="text"
                            placeholder="Edit title"
                            value={props.editedTodo.title}/>

                    <input onChange={props.handleChange}
                            name="description"
                            type="text"
                            placeholder="Edit description"
                            value={props.editedTodo.description}/>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>

    )
}

export default connect(null, todos)(EditFormComponent)
