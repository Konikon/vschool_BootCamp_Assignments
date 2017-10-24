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
          editedTodo: {
            title: props.todo.title,
            description: props.todo.description
          }
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.persist();
    this.setState((prevState)=>{
      return{
        editedTodo: {
          ...prevState.editedTodo,
          [e.target.name]: e.target.value
        }
      }
    })
  };


render(){
    return(
        <div>
            <EditFormComponent
                editedTodo={this.state.editedTodo}
                handleChange={this.handleChange}
                id={this.props.todo._id}/>
        </div>
  )}
}

export default EditFormContainer;
