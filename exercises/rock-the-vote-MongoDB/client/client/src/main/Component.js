import React from "react";
import IssueComponent from "./issues/Component";
import {connect} from "react-redux";
import {issues} from "../redux/actions/"

class IssuesComponent extends React.Component{
    constructor(props){
      super(props);
      this.genList = this.genList.bind(this);
    }

    componentDidMount(){
      this.props.loadIssue()
    }

      genList(){
            return this.props.issues.map((issue, index)=>{
              return(
                <IssueComponent
                    key = {issue.title + index}
                    issue = {issue}
                    index ={index}
                  />
              )
            })
          }

    render(){
      console.log(this.props)
      return(
        <div>
            {this.genList()}
        </div>
      )
    }
}


const mapStateToProps = (state)=>{
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, issues)(IssuesComponent);
