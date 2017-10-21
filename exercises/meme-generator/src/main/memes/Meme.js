import React from "react";

function Meme(props){
  console.log(props);
  const style ={
    backgroundImage: `url(${props.meme.imgUrl})`,
    backgroundSize: "cover",
    backgrounPosition: "center",
    width: "150px",
    height: "100px",
    color: "maroon",
    textAlign: "center",
    border: "2px groove grey",
    margin: "20px",
    display: "inline-block"
  }
  return(
        <div style={style}>
            <h3 > {props.meme.topText}</h3>
            <h3 > {props.meme.btmText}</h3>
            <button onClick>
                        <h5> delete this MEME </h5>
            </button>
        </div>
    )
}

export default Meme;
