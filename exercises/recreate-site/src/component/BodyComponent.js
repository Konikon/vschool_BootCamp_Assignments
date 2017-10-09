import React from "react";

function BodyComponent(props){
  return(
    <div className="bodyText">
      <h2 className="postHeading">{props.post.h2text}</h2>
      <h3 className="postSub">{props.post.h3text}</h3>
      <p className="postdate">{props.post.ptext}</p>
      <hr/>
    </div>
  )
}


export default BodyComponent;
