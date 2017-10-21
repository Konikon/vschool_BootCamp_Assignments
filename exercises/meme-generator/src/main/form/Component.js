import React from "react";

function FormComponent(props){
  const style={

  }
  return(
    <div style={style}>
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange}
                  type="text"
                  name="topText"
                  placeholder="Meme top text"
                  value={props.inputs.topText}
                  />
            <input onChange={props.handleChange}
                  type="text"
                  name="imgUrl"
                  placeholder="Meme imgUrl"
                  value={props.inputs.imgUrl}
                  />
            <input onChange={props.handleChange}
                  type="text"
                  name="btmText"
                  placeholder="Meme bottom text"
                  value={props.inputs.btmText}
                  />

            <button style={{fontSize: "30px", margin: "10px", borderRadius: "30px"}}
            type="submit">
                +
            </button>
        </form>
    </div>
  )

}


export default FormComponent;
