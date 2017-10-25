//write a function that takes an integer `n` and  returns the date `n` days ago
//```getDaysBefore(3);
//returns  10/21/2017```

//const nd = n * 3600 * 24 * 1000
// const present = new Date();
// const nd = 2 * 3600 * 24 * 1000;
// console.log(getMilliseconds());


function daysAgo(n){
  let today = new Date();
  today.setDate(today.getDate()-n)
  console.log(today.toDateString());
}

daysAgo(100);
