import axios from "axios";
const issuesUrl = "http://localhost:5000/issues/";

export function loadIssue(){
    return (dispatch)=>{
      axios.get(issuesUrl).then((response)=>{
        dispatch({
          type: "LOAD_ISSUE",
          issues: response.data.reverse()
        })
      }).catch((loadIssueError)=>{
        console.log(loadIssueError);
      })
    }
}

export function addIssue(issue){
    return (dispatch)=>{
      axios.post(issuesUrl, issue).then((response)=>{
          dispatch({
            type: "ADD_ISSUE",
            issue
          })
      }).catch((addIssueError)=>{
        console.log(addIssueError);
      })
  }
}
