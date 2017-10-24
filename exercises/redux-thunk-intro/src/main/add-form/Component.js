//display form and handle event listners
import React from "react";

function AddFormComponent(props){
    return(
        <div>
            <form onSubmit={props.addNewTodo}>
                <input onChange={props.handleChange}
                        name="title"
                        type="text"
                        placeholder="Add title"
                        value={props.newTodo.title}/>

                <input onChange={props.handleChange}
                        name="description"
                        type="text"
                        placeholder="Add description"
                        value={props.newTodo.description}/>

                <button type="submit">Add to the list below</button>
            </form>
        </div>
    )
}

export default AddFormComponent;
