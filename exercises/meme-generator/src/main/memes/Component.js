import React from "react";
import {connect} from "react-redux";
import Meme from "./Meme";


function MemesComponent(props){
  console.log(props);
 return
       props.memes.map((meme, index)=>{
         return (
             <Meme
                 key ={meme.topText + index}
                 meme={meme}
                 index={index}/>
         )}
     )
 
}

const mapStateToProps = (state)=>{
  return {
      memes: state.memes
  }
}

export default connect(mapStateToProps, {})(MemesComponent)
