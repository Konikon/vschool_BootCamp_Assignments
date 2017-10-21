import React from "react";

function ItemComponent(props){
    return (
        <div>
            <span>Title:</span>
            <h3>{props.todo.title}</h3>
            <span>Description:</span>
            <p>{props.todo.description}</p>
            <button onClick={()=>props.handleDelete(props.todo._id)}>X</button>
            <label>Completed: </label>
            <input onChange={props.handleChange}checked={props.inputs.completed} name="completed"type="checkbox"/>
            <form onSubmit={props.handleSave}>
                <input onChange={props.handleChange}value={props.inputs.title} name="title"type="text"placeholder="Edit Title"/>
                <input onChange={props.handleChange}value={props.inputs.description} name="description"type="text"placeholder="Edit Description"/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default ItemComponent;
