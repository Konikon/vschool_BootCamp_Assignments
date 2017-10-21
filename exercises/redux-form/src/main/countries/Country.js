import React from "react";
import {connect} from "react-redux";
import {countries} from "../../redux/actions/"

function Country(props){
  console.log(props);
  const style ={
    backgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    backgrounPosition: "center",
    width: "500px",
    height: "300px",
    color: "maroon",
    textAlign: "center",
    border: "2px solid black",
    margin: "20px",
    display: "inline-block"
  }

  return(
          <div style={style}>
              <h2> {props.country.name}</h2>
              <button onClick={()=>{props.deleteCountry(props.index)}}>
                  <h4>I visited this one. Delete this from the list</h4>
              </button>
          </div>
  )
}

export default connect(null, countries)(Country);
