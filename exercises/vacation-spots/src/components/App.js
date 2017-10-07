import React from "react";
import spotsArray from "../vacationSpots.json";
import SpotMapper from "./SpotMapper";

function App(){
  return (
    <div>
      <SpotMapper spotsArray={spotsArray}/>
    </div>
  )
}


export default App;
