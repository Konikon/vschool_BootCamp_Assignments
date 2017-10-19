import React from "react";
import Counter from "./Counter";
import ContactList from "./contacts/ContactList"

function App(props){
    return(
        <div>
            <Counter />
            <ContactList />
        </div>
    )
  }

  export default App;


//make a list from redux
//map through list, and render an item component for each one


//make an item component
//display item info
