// PART 1
//
// Write a function that takes a query object and an HTTP endpoint and then
//returns a URL with a query string.
//
// Example:
//
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);
//
// //returns "http://localhost:8080/monkeys?color=black&species=howler"
// Part 2
//
// Write a function that does the opposite from above; return an object from a query string.

let objectifyUrl = function(url){
  let query = {};
  url = url.slice(url.indexOf("?")+1).split(/[=&]/);
  if(url.length < 2) return {};
  for(let i = 0; i < url.length; i+=2){
    query[url[i]] = url[i + 1]
  }
  return query;
}

console.log(objectifyUrl("http://localhost:8080/monkeys?color=black&species=howler"))
