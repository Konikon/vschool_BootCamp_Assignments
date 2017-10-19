import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {removeOne} from "../../redux/actions/index";

function ContactList(props){
  console.log(props);
    return(
        <div>
        <button onClick={props.removeOne}> Remove first contact list </button>
          {props.contactList.map((contact, i)=>{
              return <Contact contact={contact}
                              key={contact.firstName + i}
                              />
          })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps, {removeOne})(ContactList)
