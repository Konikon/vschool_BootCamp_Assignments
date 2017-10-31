import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function AddFormComponent(props){
  console.log(props);
    return(
        <div>
            <form onSubmit={props.addNewBounty}>
                <input type="text"
                      name= "name"
                      placeholder="Add Name"
                      value={}
                      onChange={props.handleChange}/>

                <input type="number"
                      min="1"
                      name= "amount"
                      placeholder="bounty amount"
                      value={}
                      onChange={props.handleChange}/>QUIDS

                <input type="text"
                      name="Jedi or Sith"
                      placeholder="Jedi or Sith"
                      onChange={props.handleChange}/>

                <ButtonGroup>
                  //  <Button bsStyle="success">Living</Button>
                    //<Button bsStyle="danger">Dead</Button>
                    <br/><br/><br/>
                    <Button bsStyle="primary" type="submit">Submit new Bounty</Button>
                </ButtonGroup>
                <hr/>
            </form>
        </div>
    )
}


export default AddFormComponent;
