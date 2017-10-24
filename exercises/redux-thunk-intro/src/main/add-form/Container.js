//connect addTodo from react-redux
// render form components
// handle inputs (local state)


import React from "react";
import {todos} from "../../redux/actions/";
import {connect} from "react-redux";
import AddFormComponent from "./Component";

class AddFormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
          addTodo: {
            title: "",
            description: ""
          }
        }
    this.addNewTodo = this.addNewTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNewTodo(e){
    e.preventDefault();
    this.props.addTodo(this.state.addTodo)
    this.setState({
      addTodo: {
        title: "",
        description: ""
      }
    });
    }

  handleChange(e){
    e.persist();
    this.setState((prevState)=>{
      return{
        addTodo: {
          ...prevState.addTodo,
          [e.target.name]: e.target.value
        }
      }
    })
  };


  render(){
    return(
      <AddFormComponent newTodo = {this.state.addTodo}
                        handleChange={this.handleChange}
                        addNewTodo={this.addNewTodo}/>
    )
}
}

export default connect(null, todos)(AddFormContainer);
