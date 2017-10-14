import React from "react";
import { Row, Col, Button, FormControl, FormGroup } from "react-bootstrap";

function ListRenderer(props){
    return(
        <div>
            <h1>Title: {props.listPopulate.title}</h1>
            <h3>Description: {props.listPopulate.description}</h3>
            <Button onClick={()=>props.handleClick(props.listPopulate._id)}
                    bsStyle="warning"
                    className="paintButt"> Delete </Button>
        </div>
    )
}

export default ListRenderer;
