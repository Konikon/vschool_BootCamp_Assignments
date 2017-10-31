import React from "react"
import AddFormContainer from "./add-form/Container";

function Body(){
  const style = {
    margin: "2% 15% 2% 15%",
    backgroundColor:  "darkgrey",
    color: "white",
    textAlign: "center"
  }

    return(
        <div style={style}>
            <AddFormContainer />
          {/*  <IssuesComponent />*/}
            
        </div>
    )
}


export default Body;
