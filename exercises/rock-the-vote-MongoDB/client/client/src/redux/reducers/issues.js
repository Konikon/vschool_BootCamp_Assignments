let defaultIssues = []
export const issues = function(prevIssues = defaultIssues, action){
  let newIssues = [...prevIssues]
    switch(action.type){
      case "LOAD_ISSUE":
          return action.issues;

      case "ADD_ISSUE":
          newIssues.unshift(action.issue)
          return newIssues;

      case "EDIT_ISSUE":
        return newIssues.map((issue)=>{
          if(action.id === issue._id){
            return action.editedIssue;
          } else {
              return issue;
          }
        });


      default:
      return prevIssues;
  }
}
