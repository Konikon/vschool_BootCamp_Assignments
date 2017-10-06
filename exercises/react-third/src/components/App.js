import React from "react";
import Card from "./Card";
import data from "./cardList.json"

function genCardList(cardList){
  return cardList.map(item => {
    return(
      <Card name={item.name}
            imgEle={item.imgEle}
            contactNo={item.contactNo}/>
        )
    })
}

function App(){
  return(
      <div>
      {genCardList(data)}
      </div>
  )
}

export default App;
