import React from "react";
import {connect} from "react-redux";
import {issues} from "../../redux/actions/"

function IssueComponent(props){
    return(
        <div>
            <h2>{props.issue.title} </h2>
            <h4> {props.issue.description} </h4>
            <EditVoteContainer issue={props.issue}/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, issues)(IssueComponent);
