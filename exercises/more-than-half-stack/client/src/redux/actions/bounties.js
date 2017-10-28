import axios from "axios";
const bountiesUrl = "http://localhost:8000/bounties/";

export function loadBounty(){
  return(dispatch)=>{
    axios.get(bountiesUrl).then((response)=>{
      dispatch({
            type: "LOAD_BOUNTY",
            bounties: response.data.reverse()
          })
    }).catch((err)=> {
      console.log(err);
    })
  }
}

export function addBounty(bounty){
  return(dispatch)=>{
    axios.get(bountiesUrl).then((response)=>{
      dispatch({
        type: "ADD_BOUNTY",
        bounty
      }).catch((err)=>{
        console.log(err);
      })
    })
  }
}
