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
            issue:response.data
          })
      }).catch((addIssueError)=>{
        console.log(addIssueError);
      })
  }
}

export function editIssue(id, editedIssue) {
  return (dispatch) => {
    axios.put(issuesUrl + id, editedIssue).then((response)=>{
      dispatch({
        type: "EDIT_ISSUE",
        id,
        editedIssue: response.data
      })
      }).catch((editIssueError)=>{
        console.log(editIssueError);
      })
    }
  }
