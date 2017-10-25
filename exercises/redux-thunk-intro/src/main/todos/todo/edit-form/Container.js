//connect edit to Component
//render edit form Component
// handle input form

//
import React from "react";
import EditFormComponent from "./Component";

class EditFormContainer extends React.Component{
    constructor(props){
       super(props);
      this.state = {
        toggleDisplay: false,
          editedTodo: {
            title: props.todo.title,
            description: props.todo.description,
            completed: props.todo.completed
          }
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e){
    e.persist();
    this.setState((prevState)=>{
      return{
        editedTodo: {
          ...prevState.editedTodo,
          [e.target.name]: e.target.type === "checkbox"? e.target.checked :e.target.value
        }
      }
    })
  };

  handleToggle(){
    this.setState((prevState)=>{
      return {
          ...prevState,
          toggleDisplay: !prevState.toggleDisplay
      }
    })
  }

render(){
    return(
        <div>
            <EditFormComponent
                editedTodo={this.state.editedTodo}
                handleChange={this.handleChange}
                id={this.props.todo._id}
                handleToggle={this.handleToggle}/>
        </div>
  )}
}

export default EditFormContainer;
