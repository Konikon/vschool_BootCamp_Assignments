import React from "react";
import SpotComponent from "./SpotComponent"

function SpotMapper(props){

  return props.spotsArray.map((spots,i)=>{
    let border;
    if (spots.timeToGo === "Winter") {
      border = "10px solid white"
    }
    if (spots.timeToGo === "Fall"){
      border = "10px solid orange"
    }
    if (spots.timeToGo === "spring"){
      border = "10px solid yellow"
    }
    if (spots.timeToGo === "summer"){
      border = "10px solid red"
    }
      return <SpotComponent place={spots.place}
                            country={spots.country}
                            BestTime={spots.timeToGo}
                            price={spots.price}
                            img={spots.img}
                            key={spots.place + i}/>
  })
}





export default SpotMapper;
