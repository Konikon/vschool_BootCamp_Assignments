import React from "react"
import AddFormContainer from "./add-form/Container";
import IssuesComponent from "./Component";

function Body(){
  const style = {
    margin: "2% 15% 2% 15%",
    backgroundColor:  "rgb(5, 42, 49)",
    color: "rgb(248, 22, 50)",
    textAlign: "center"
  }
  const style2 = {
    backgroundColor: "#02161b"
  }

    return(
        <div style={style2}>
          <div style={style}>
              <AddFormContainer />
              <IssuesComponent />
          </div>
        </div>
    )
}


export default Body;
