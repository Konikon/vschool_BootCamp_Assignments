import React from "react";
import axios from "axios";
import CaredFor from "./CaredFor"

class App extends React.Component {
      constructor(){
          super();
          this.state = {
              theList: []
          }

      }

      componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then((response) => {
          this.setState ({theList: response.data})
        })
      }


      render(){
        return(
            <div className= "theGodfather">
                {this.state.theList.map((hit, i)=>{
                    return (
                        <CaredFor hitlist = {hit} key={hit.name + i}/>
                      )
                    })}
            </div>
          )

}
}


export default App;
