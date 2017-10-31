import React from "react";
import EditVoteComponent from "./Component";
import {connect} from "react-redux";

class EditVoteContainer {
  constructor() {
    super();
    this.state = {
      toggleDisplay: false,
      eidtVote: {
        upvote: 0,
        downvote: 0,
        comment: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e){
    e.persist();
    this.setState((prevState)=>{
      return{
        issue: {
          ...prevState.editVote,
          [e.target.name]: e.target.value
        }
      }
    })
  };

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
              <EditVoteComponent
                editVote={this.state.editVote}
                handleChange={this.handleChange}
                id={this.props.issue._id}
                handleToggle={this.handleToggle}
                />
          </div>
      )
  }

}

const mapStateToProps = (state)=>{
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps)(EditVoteContainer);
