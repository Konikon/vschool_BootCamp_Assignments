import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {memes} from "../redux/actions/";


class FormContainer extends React.Component {
  constructor() {
    super();
    this.state ={
      inputs:{
        topText: "",
        imgUrl: "",
        btmText: ""
      }
    }
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    console.log(e);
    e.persist();
    this.setState((prevState)=>{
      return {
        inputs: {
          ...prevState.inputs,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.addMeme(this.state.inputs);
    this.setState({
      inputs: {
        topText: "",
        imgUrl: "",
        btmText: ""
      }
    })
  }


  render(){
    return(
      <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputs= {this.state.inputs}/>
    )
  }
}



export default connect(null, memes)(FormContainer);
