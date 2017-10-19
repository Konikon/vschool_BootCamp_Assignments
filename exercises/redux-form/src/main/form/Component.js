import React from "react";

function FormComponent(props){

  return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange}
            name="name"
            type="text"
            placeholder="Country Name"
            value={props.inputs.name}/>

          <input onChange={props.handleChange}
            name="imgUrl"
            type="text"
            placeholder="Country Flag"
            value={props.inputs.imgUrl}/>

          <button type="submit">Add to bucket List</button>

        </form>
      </div>

  )
}

export default FormComponent ;
