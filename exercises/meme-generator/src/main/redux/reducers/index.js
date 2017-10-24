import {combineReducers} from "redux";
import {memes} from "./memes";

export default combineReducers({memes});

// let state = {
//   memes: []
// }
//
// const reducer = function(prevState = state, action){
//   return {
//     memes: memes(prevState.memes, action)
//   }
// }
