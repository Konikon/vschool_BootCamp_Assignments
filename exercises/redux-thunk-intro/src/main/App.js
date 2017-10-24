import React from "react";
import TodosComponent from "./Component";
import AddFormContainer from "./add-form/Container";

function App(){
    return (
      <div>
          <AddFormContainer />
          <TodosComponent />
      </div>
    )
}

export default App;
