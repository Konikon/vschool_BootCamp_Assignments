let defaultMemes = [];

export default memes = function(prevMemes = defaultMemes, action){
  switch(action.type){
    case "ADD_MEME":
    defaultMemes.push(action.meme);
        return defaultMemes;

    case "DELETE_MEME":
    defaultMemes.splice(action.index,1);
        return defaultMemes;

    default:
        return defaultMemes;
  }
}
