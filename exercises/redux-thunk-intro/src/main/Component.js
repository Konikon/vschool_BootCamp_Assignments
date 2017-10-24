import React from "react";
import {connect} from "react-redux";
import TodoComponent  from "./todos/Component";
import {todos} from "../redux/actions/";


class TodosComponent extends React.Component{
  constructor(){
    super();
    this.genList = this.genList.bind(this);
  }

    componentDidMount(){
      this.props.loadTodo()
    }

    genList(){
        return this.props.todos.map((todo,index)=>{
          return(
            <TodoComponent
                key = {todo.title + index}
                todo = {todo}
                index ={index}

              />
          )
        })
    }


    render(){
        return (
        <div>
          {this.genList()}
        </div>
      )
    }

  }

    const mapStateToProps = (state)=>{
        return {
            todos: state.todos
        }
    }

export default connect(mapStateToProps, todos)(TodosComponent);
