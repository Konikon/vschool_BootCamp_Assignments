import React from "react";
import BodyComponent from "./BodyComponent";
import BodyArray from "../bodyText.json"


function BodyMapper(){
    return BodyArray.map((post, index)=><BodyComponent post={post}/>)
}

export default BodyMapper;
