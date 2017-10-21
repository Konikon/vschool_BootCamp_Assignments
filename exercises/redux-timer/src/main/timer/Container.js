import React from "react";


class TimerContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      timer: {
        count: 0,
        min: 0,
        sec: 0
      }
    }
}
//function that modifies the state min, sec
// based on start button
let interval;
handleStart(){
  let interval = setInterval(action, 1000)
}

//function that stops the state from modified
//based on stop button

//function that sets state to 0 again

render(){
  return(
      <div>
        {Date(0)};

      </div>
  )
}

}



export default TimerContainer;
