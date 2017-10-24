import React from "react";
import axios from "axios";

const Url = "https://api.vschool.io/mak/todo/";

class TodosContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          todos: []
    }

  }

  componentDidMount(){
    axios.get(Url).then((response)=>{
      this.setState({
        todos: response.data
      });
    });
  }



  render(){
    return (
        <div>

        </div>
    )
  }
}


export default TodosContainer
