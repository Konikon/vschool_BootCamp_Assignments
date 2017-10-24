import React from "react";

function FormComponent(props){
    return (
        <div>
            <h1>Add Todos</h1>
            <form onSubmit={props.handleSubmit}>
                <input value={props.inputs.title}
                  onChange={props.handleChange}
                  name="title"
                  type="text"
                  placeholder="Title"/>

                <input value={props.inputs.description}
                  onChange={props.handleChange}
                  name="description"
                  type="text"
                  placeholder="Description"/>
                
                <button type="submit">+</button>
            </form>
        </div>
    )
}
export default FormComponent;
