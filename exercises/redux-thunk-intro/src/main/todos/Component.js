//connect deleteTodo and
//disply todo information and delele button
//render the edit form container


import React from "react";
import EditFormContainer from "../todos/todo/edit-form/Container";

import {connect} from "react-redux";
import {todos} from "../../redux/actions/"

function TodoComponent(props){
  const style ={
    width: "200px",
    height: "150px",
    color: "maroon",
    textAlign: "center",
    border: "5px groove grey",
    margin: "20px",
    display: "inline-block"
  }



  return(
      <div style={style}>
        <h2>{props.todo.title}</h2>
        <h4>{props.todo.description}</h4>
        <button onClick={()=>props.deleteTodo(props.todo._id)}> Delete </button>
        <EditFormContainer todo={props.todo}/>
      </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, todos)(TodoComponent);
