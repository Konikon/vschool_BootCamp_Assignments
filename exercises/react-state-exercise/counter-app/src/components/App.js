import React from "react";
import MakeMoney from "./MakeMoney";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      moneyCounter: 0
    }
    this.moneyMaker = this.moneyMaker.bind(this);
    this.moneySpender = this.moneySpender.bind(this);
  }
moneyMaker(){
  this.setState(prevState => {
    return {
      moneyCounter: prevState.moneyCounter + 5
    }
  });
}
moneySpender(){
  this.setState(prevState => {
    return {
      moneyCounter: prevState.moneyCounter - 5
    }
  });
}
  render(){
    return (
      <div>
        <MakeMoney moneyCounter={this.state.moneyCounter}
                    moneyMaker = {this.moneyMaker}
                    moneySpender={this.moneySpender}/>
      </div>
    )
  }
}

export default App;
