import React from "react";
import AddFormComponent from "./Component";
import {connect} from "react-redux";
import {bounties} from "../../redux/actions/"


class AddFormContainer extends React.Component {
  constructor() {
    super();
    this.state ={
      inputs: {
        "firstName": "",
        "living": true,
        "bountyAmount": "",
        "type": ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewBounty = this.addNewBounty.bind(this);
  }

  addNewBounty(e){
    e.preventDefault();
    this.props.addBounty(this.state.inputs)
    this.setState({
      inputs: {
        "Name": "",
        "living": true,
        "bountyAmount": "",
        "type": ""
      }
    });
    }

  handleChange(e){
    console.log(e.target.value);
    e.persist();
    this.setState((prevState)=>{
      return{
        inputs: {
          ...prevState.inputs,
          [e.target.name]: e.target.value
        }
      }
    })
  };



  render(){
    return(

        <AddFormComponent newBounty={this.state.inputs}
                          handleChange={this.handleChange}
                          addNewBounty={this.addNewBounty}/>
    )
  }
}

export default connect(null, bounties)(AddFormContainer);
