import React from "react";
import List from "./List";
import NameList from "./NameList";

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        youTyped: "",
        nameList: []
      }

      this.listChange = this.listChange.bind(this);
      this.addList = this.addList.bind(this);
}

listChange(event){
    this.setState({
        youTyped: event.target.value
    })
}

addList(){
  this.setState(prevState=>{
      return {
          nameList: [...prevState.nameList, prevState.youTyped],
          youTyped: ""
      }
});
}



  render(){
    return(
      <div>
          <List listCh={this.listChange}
                inputType={this.state.youTyped}/>

          <NameList names={this.state.nameList}
                    handleClick={this.addList}/>
      </div>
    )
  }
}

export default App;
