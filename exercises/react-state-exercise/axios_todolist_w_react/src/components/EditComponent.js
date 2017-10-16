import React from "react";
import TodoList from "TodoList";

class EditComponent extends React.Component {
  constructor(props) { //this will be taking props later
    super(props); //this will too
    this.state ={
      editList: {
        eidtedTodo: props.,
        description: ""
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event){
    event.persist();
    this.setState(prevState=>{
        return{
          editList: {
            ...prevState.editedTodo,
            [event.target.name]:event.target.value
          }
        }
      })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.editList(this.state.editList, this.props.stuff)
  }


  render(){
    return(
      <TodoList
          listPopulate = {this.props.listPopulate}
          editedList = {this.props.editedList}
          handleEdit = {this.props.handleEdit}
          handleSubmit = {this.props.handleSubmit}
          />
        )
      }
}



export default EditComponent
