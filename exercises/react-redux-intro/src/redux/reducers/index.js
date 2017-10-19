const state ={
  counter: 0,
  contactList: [
    {
      firstName: "Joe",
      lastName: "Li",
      phone: "888-900-1234"
    },
    {
      firstName: "Cookie",
      lastName: "Fart",
      phone: "845-900-1233"
    },
    {
      firstName: "ERON",
      lastName: "Ambedkar",
      phone: "555-555-9999"
    }
  ]
}

const reducer = function (prevState = state, action){
    switch(action.type){
      case "ADD_ONE":
      return {
          counter: prevState.counter + 1,
          contactList: prevState.contactList
      }
      case "MINUS_ONE":
      return {
          counter: prevState.counter - 1,
          contactList: prevState.contactList
      }
      case "SQUARE":
      return {
          ...prevState,
          counter: prevState.prevState,

      }
      case "RESET":
      return {
          counter: 0,
          contactList: prevState.contactList
      }
      case "REMOVE_ONE":
      const newList = [...prevState.contactList]
      newList.shift();
      return {
          counter: 0,
          contactList: newList
      }
        default:
            return prevState;
  }
}

export default reducer;
