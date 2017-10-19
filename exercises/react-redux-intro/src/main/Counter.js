import React from "react";
import {connect} from "react-redux"; //connect is a function in react redux library and it takes
// action(s) and passes them down to the component via props and also automatically calls
//the dispatch when actions get called
import {addOne, minusOne, square, sqRoot, reset } from "../redux/actions/index.js";


function Counter(props){
  console.log(props);
  const style = {
    width: "15%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    fontSize: "100px",
    top: "20%",
    transform: "translateY(30%)"
}
const sty1 = {
  fontSize: "30%"
}

    return(
        <div style={style}>
          <div>
              <button style={sty1} onClick={props.sqRoot}> √ </button>
              <button style={sty1} onClick={props.minusOne}> - </button>
              <span> {props.counter} </span>
              <button style={sty1} onClick={props.addOne}> + </button>
              <button style={sty1} onClick={props.square}>  </button>
          </div>
          <div>
              <button style={sty1} onClick={props.reset}> Reset </button>

          </div>
        </div>
    )
}
//connect takes to arguments:
  //1) stuff from state as props
  //2) set of action creators what we want to dispatch

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {addOne: addOne,
                                        minusOne: minusOne,
                                        square: square,
                                        sqRoot:sqRoot,
                                        reset:reset})(Counter);
