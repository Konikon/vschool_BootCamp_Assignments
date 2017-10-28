let defaultBounties = []
export const bounties = function(prevBounties = defaultBounties, action){
  let newBounties = [...prevBounties];
  switch (action.type) {
    case "LOAD_BOUNTY":
        return action.bounties;

    case "ADD_BOUNTY":
      newBounties.unshift(action.bounty)
        return newBounties;

    case "DELETE_BOUNTY":
      return newBounties.filter((bounty)=>{
        return action.id !== bounty._id;
      });

    case "EDIT_BOUNTY":
      return newBounties.map((bounty)=>{
        if(action.id === bounty._id){
          return action.editedbounty;
        } else {
          return bounty;
        }
      });
    default:
        return prevBounties;

  }
}
