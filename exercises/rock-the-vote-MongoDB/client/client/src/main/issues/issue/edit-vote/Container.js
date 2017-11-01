import React from "react";
import EditVoteComponent from "./Component";
import {connect} from "react-redux";
import {issues} from "../../../../redux/actions/"

class EditVoteContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      toggleDisplay: false,
      editVote: {
        upvote: 0,
        downvote: 0,
        comment: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleComment = this.handleComment.bind(this);
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

  componentDidMount(){
    this.props.loadIssue()
  }

  handleComment(){
    this.setState((prevState)=>{
      return
    })
  }

  render(){
      return(
          <div>
              <EditVoteComponent
                issue={this.props.issue}
                editVote={this.state.editVote}
                handleChange={this.handleChange}
                id={this.props.issue._id}
                handleToggle={this.handleToggle}
                handleVote={this.handleVote}
                handleComment={this.handleComment}
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

export default connect(mapStateToProps, issues)(EditVoteContainer);
