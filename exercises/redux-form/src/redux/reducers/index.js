//goal is to create a state containing countries array
//make an action that allows to add a country to array
//make an action which allows us to delete a particular country from the array

import countries from "./countries";
import {combineReducers} from "redux";

let mainReducer = combineReducers({countries});
export default mainReducer;
