////
////1) Turn an array of numbers into a single number
//
//
//function total(arr) {
//var sumArray = arr.reduce(function(prev, number){
//    return prev + number;
//}, 0);
//    return sumArray;
//}
//console.log(total([1,2,3]))




//2) Turn an array of numbers into a long string of all those numbers.
//
//function stringConcat(arr) {
//var strNum = arr.reduce(function(prev, num){
//    return prev + num;
//},"");
//    return strNum;
//}
//
//console.log(stringConcat([1,2,3]))
//
//3) Turn an array of voter objects into a count of how many people voted
//
//function totalVotes(arr) {
//var numVoted = arr.reduce(function(prev, num){
//    if(num.voted === true) {
//        return prev.votedCount + 1;
//    }ele {
//        return prev;
//    }
//    
//},0);
//    return numVoted;
//}
//
////____OR___________
////return arr.reduce(function(prev, num){
////    if(num.voted === true) {
////        return prev.votedCount + 1;
////    }ele {
////        return prev;
////    }
////    
////},{votedCount:  0});
////}
//////
////console.log(totalVotes(voters));
//
//------OR--------
//
//function totalVotes(arr) {
//var numVoted = arr.reduce(function(prev, num){
//    if(num.voted === true) {
//        return prev.votedCount++;
//    }ele {
//        return prev.didntVote++;
//    }
//        return numVoted;
//},{votedCount:  0, didntVote: 0});
//
//}
//
//
//
//var voters = [  
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
//];
//totalVotes(voters) // 7  
//
//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
//
//function shoppingSpree(arr) {
//var allItems = arr.reduce(function(prev, num){
//    return prev + num.price;
//}, 0)
//}

//var wishlist = [  
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
//];
//
//shoppingSpree(wishlist) // 227005  
//
//
//5) Given an array of arrays, flatten them into a single array

//function flatten(arr) {
//var arraysTogether = arr.reduce(function(prev, sum){
//return prev.concat(sum);     
//},[]);
//return arraysTogether;
//}
//
//var arrays = [  
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
//];
//
//console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];  

//6) Given an array of potential voters, return an object representing the results of the vote, including how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
var constituents = arr.reduce(function(results, curVoter){


},{youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})
}

voterResults(voters) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/






