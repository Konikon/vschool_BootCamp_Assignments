import React from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";

function TodoForm(props) {
    return(
      <form onSubmit={props.postList}>
          <FormGroup>
                  <FormControl type="text"
                         placeholder="Enter list title"
                         value={props.valueTitle}
                         name="title"
                         onChange={props.handleChange}/>

                  <FormControl type="text"
                         placeholder="Enter list description"
                         value={props.valueDescription}
                         name="description"
                         onChange={props.handleChange}/>

                  <Button type="submit" bsStyle="info" bsSize="small">Submit</Button>
          </FormGroup>
      </form>
    )
}


export default TodoForm;
