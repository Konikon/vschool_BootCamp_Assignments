const redux = require("redux");

const state = {
    counter: 0,
    contactList: []
}

function custom(num){
    return {
      type: "CUSTOM",
      edit: num
    }
}

function addName(name){
  return {
    type: "ADDNAME",
    name
  }

}

function removeName(){
  return {
      type: "REM_NAME"

  }
}

function reset(){
    return {
        type: "RESET"
    }
}

function reducer(prevState = state, action){
    switch(action.type){
        case "CUSTOM":
            return{
                counter:  prevState.counter + action.edit,
                contactList: prevState.contactList
            }
        case "ADDNAME":
            return{
                contactList: [...prevState.contactList, action.name],
                counter: prevState.counter
            }

        case "RESET":
            return {
                counter: 0,
                contactList: prevState.contactList
            }

        case "REM_NAME":
            newState = [...prevState.contactList];
            newState.shift();
            return {
                counter: prevState.counter,
                contactList: newState
            }
          default:
              return prevState;
    }
}

const store = redux.createStore(reducer);

// Action ==> dispatcher ==> store ==> view  back to Action
// reducer stays between dispatcher and  store


store.subscribe(()=>{
      console.log(store.getState());
});

store.dispatch(addName("Osho"));
store.dispatch(addName("Dilan"));

store.dispatch(removeName([]));
store.dispatch(removeName([]));
