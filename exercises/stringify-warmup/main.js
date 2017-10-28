// Write a function that takes a query object and an HTTP endpoint and
//then returns a URL with a query string.
//
// Example:
//
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"
// const endpoint = "http://localhost:8080/monkeys";
// const query = [
//   {
//     a: 0,
//     b: 0,
//   }
// ]
function stringifyUrl(endpoint, query){
  let url = endpoint + "?";
  for(let key in query){
    url=`${key}=${query[key]}&`
  }
  return url.slice(0, -1);
}

module.exports = stringifyUrl;
