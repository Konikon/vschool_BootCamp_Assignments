import React from "react";
import {connect} from "react-redux";
import {issues} from "../../redux/actions/"

import AddFormComponent from "./Component";

class AddFormContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      toggleDisplay: false,
      addIssue: {
        title: "",
        description: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewIssue = this.addNewIssue.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e){
      e.persist();
      this.setState((prevState)=>{
        return{
          addIssue: {
            ...prevState.addIssue,
            [e.target.name]: e.target.value
          }
        }
      })
    };

  addNewIssue(e){
    console.log(e);
      e.preventDefault();
      this.props.addIssue(this.state.addIssue)
      this.setState({
        addIssue: {
          title: "",
          description: ""
        }

      })
    }

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
          <AddFormComponent newIssue = {this.state.addIssue}
                            addNewIssue={this.addNewIssue}
                            handleChange={this.handleChange}
                            toggleDisplay={this.state.toggleDisplay}
                            handleToggle={this.handleToggle}/>

      </div>
    )
  }

}


export default connect(null, issues)(AddFormContainer);
