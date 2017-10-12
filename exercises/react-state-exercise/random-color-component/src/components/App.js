import React from "react";
import ColorComponent from "./ColorComponent";
import axios from "axios";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            rung: ""
        }
      }

    componentDidMount() {
        axios.get("http://www.colr.org/json/color/random").then((response)=>{
            this.setState ({rung: response.data})
            console.log("fire");
        })
    }


    render (){
        return(
            <div>
                
                <ColorComponent col={this.state.rung} />
            </div>
      )
    }
}

export default App;
