import React from "react";
import {connect} from "react-redux";
import {issues} from "../../../../redux/actions/"

function EditVoteComponent(props){
    return(
        <div>
            <button onClick={()=>{props.editIssue(props.issue._id, {upvote: props.issue.upvote + 1})}}>
              {props.issue.upvote}</button> <button>upvote</button>

            <button onClick={()=>{props.editIssue(props.issue._id, {downvote: props.issue.downvote + 1})}}>
              {props.issue.downvote}</button> <button>downvote</button>


            <h4>Total Votes: {props.issue.upvote + props.issue.downvote}</h4>
            <h6>All votes count in democracy!</h6>
            <form onSubmit={(e)=>{props.editIssue(props.issue._id, {comment: props.issue.comment});
                              e.preventDefault()}}>
                <textarea type="text"
                      name= "comment"
                      placeholder="Comment on this issue"
                      value={props.editVote.comment}
                      onChange={props.handleChange}/>
                    <button type="submit"> Save comment </button>
            </form>
        </div>
          )
}


const mapStateToProps = (state)=>{
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, issues)(EditVoteComponent)
