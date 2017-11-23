import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      test: "loading"
    }
  }
  componentDidMount(){
    axios.get("/test").then((response)=>{
      this.setState({
        test: response.data.test
      })
    })
  }

  render(){
    return(
      <h1>{this.state.test}</h1>
    )
  }
}

ReactDOM
