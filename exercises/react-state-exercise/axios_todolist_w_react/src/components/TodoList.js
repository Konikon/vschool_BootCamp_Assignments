import React from "react";
import { Row, Col, Button, FormControl, FormGroup } from "react-bootstrap";

function ListRenderer(props){
    return(
        <div>
            <h1>Title: {props.listPopulate.title}</h1>
            <h3>Description: {props.listPopulate.description}</h3>

            <form onSubmit={props.postList}>
                <FormControl type="text"
                       placeholder="Edit list title"
                       value={props.valueDescription}
                       name="title"
                       onChange={props.handleChange}/>

                 <FormControl type="text"
                        placeholder="Edit list description"
                        value={props.valueDescription}
                        name="description"
                        onChange={props.handleChange}/>
            </form>


                  <Button onClick = {props.handleEdit}
                      bsStyle="warning"
                      className="paintButt"> Edit </Button>

                  <Button onClick = {props.handleSubmit}
                      className="paintButt"> submit </Button>

                  <Button onClick={()=>props.handleDelete(props.listPopulate._id)}
                      bsStyle="success"
                      className="paintButt"> Delete </Button>
                      <hr/>
        </div>
    )
}

export default ListRenderer;
