//get a list of countries from redux state
//write a function that maps through the list and
//and generate a new country Component
// render a new list component and pass mapping fuction down where
//it will be called

import React from "react";
import CountriesComponent from "./Component";
import Country from "./Country";

import {connect} from "react-redux";

class CountriesContainer extends React.Component {
  constructor() {
    super();
    this.genList =this.genList.bind(this);
  }

  genList(){
    return this.props.countries.map((country, index)=>{
      return (
        <Country
            key ={country.name + index}
            country={country}
            index={index}/>
      )
    })
  }

  render(){
    return(
      <CountriesComponent genList={this.genList}/>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        countries: state.countries //it can also be return state;
    }
}

//add delete function to each country component

export default connect(mapStateToProps, {})(CountriesContainer);

//this is what happening with connect under the hood
//const mapStateToProps = (state) => {
//     return {countries: state.countries}
// }
// CountriesContainer = connect(mapStateToProps, {})(CountriesContainer);
// export default CountriesContainer;
//
// let connect = function(callback1, obj){
//     let state = callback1(prevState);
//     let props = {...obj, ...state};
//
//     return function(ReactComponent){
//         return (
//             <ReactComponent {...props}/>
//         )
//     }
// }
