import React from "react";
import TodoList from "TodoList";

class EditComponent extends React.Component {
  constructor(props) { //this will be taking props later
    super(props); //this will too
    this.state ={
      editList: {
        title: props.listPopulate.title,
        description: props.listPopulate.description
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.editList(this.state.editList, this.props.listPopulate._id,)
  }


  render(){
    return(
      console.log(this.state.editList)
      <TodoList
          listPopulate = {this.state.listPopulate}
          handleDelete = {this.props.handleDelete}
          editedList = {this.state.editList}
          handleEdit = {this.handleEdit}
          handleSubmit = {this.handleSubmit}
          />
        )
      }
}



export default EditComponent
