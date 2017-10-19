import React from "react";

function Contact(props){
  return (
    <div>
      <h3>{props.contact.firstName} </h3>
      <h3>{props.contact.lastName} </h3>
      <h5> {props.contact.phone}</h5>
    </div>
  )
}

export default Contact;
