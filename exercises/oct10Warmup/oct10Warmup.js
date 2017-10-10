// Given a string and a non-negative int n,
// we'll say that the "front" of the string is the first 3 chars,
// or whatever is there if the string is less than length 3.
// Return n copies of the "front"
//
// Use TDD (Test-driven development) in solving this problem
//
function frontCopy(str, n){
//returns an array of the split strings' first 3 lettters
strSplit = str.slice(0,3);
return strSplit.repeat(n);
}


module.exports = frontCopy;
