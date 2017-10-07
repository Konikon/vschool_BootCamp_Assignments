import React from "react";

function SpotComponent (props) {
    return(
      <div style={{border: props.border}} className="spotStyle">
        <h1  className="placeName">{props.place}</h1>
        <h3 className="countryname">{props.country}</h3>
        <h3 className="bestTime">{props.timeToGo}</h3>
        <h6 className="price">{props.price}</h6>
        <div className="img">
          <img src={props.img} alt=""/>
        </div>
      </div>
  )
}
export default SpotComponent;
