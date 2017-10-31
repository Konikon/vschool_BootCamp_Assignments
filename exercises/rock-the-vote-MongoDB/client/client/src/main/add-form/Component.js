import React from "react";

function AddFormComponent(props){
  
  return(
    <div>
        <h1> Political Issues </h1>
        <button onClick={props.handleToggle}> Say Something</button>
          <div  className={props.toggleDisplay ? "show" : "hide"}>
            <form onSubmit={()=>{}}>
                <input type="text"
                      name= "title"
                      placeholder="Add title                  "
                      value={props.newIssue.title}
                      onChange={props.handleChange}/>

                <textarea type="text"
                      name= "description"
                      placeholder="Add description"
                      value={props.newIssue.description}
                      onChange={props.handleChange}/>

                    <button type="submit">Post issue</button>
            </form>
          </div>

    </div>
  )
}

export default AddFormComponent;
