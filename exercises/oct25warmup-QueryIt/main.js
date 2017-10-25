// given a query object, and array of objects, write a function that
// returns an array of all the database objects that match the query object
//if it does not match anything it should return empty array
// if query object is empty return entire object

// function databaseSifter (){
// function filterDatabase(query, database){
//   //if query result matches return the match
//   for (let key in query){
//     console.log(query[key]);
//   }
//   //if query result is null return empty array
//   for (let key in query){
//     console.log(query[key]);
//     if(query[key] === null);
//     return [];
//   }
//
//   //if query is empty array return everything in array
//
// }
// }

let database = [
  {a:0, b:0, c:0, d:0},
  {a:1, b:0, c:0, d:0},
  {a:0, b:7, c:0, d:0},
  {a:0, b:0, c:9, d:0},
  {a:0, b:0, c:0, d:1},
  {a:1, b:0, c:0, d:0}
]




// for (let key in query){
//   console.log(query[key]);
//   console.log(key)
// }


function filterDatabase(query, database){
  //going through each obj in the database
  // we are checking whether each key/vlaue pair in the object
  //matches the key/value pair in the query obj
  return database.filter((doc)=>{ //doc is the data in the data base
    for(let key in query){
      if(doc[key] !== query[key]){
        return false;
      }
    }
    return true;
  })
}

let query =
  {
  i:0
  }


console.log(filterDatabase(query, database));
