// let now = new Date(0);
// let seconds = now.getSeconds();
// let minutes = now.getminutes();
// console.log(minutes + " : " + seconds);
//
// let state = {
//   count: 0;
//   minutes: 0,
//   seconds: 0
// }
//
// function addTime(prevState){
//   let now = new Date(prevState.count + 1000);
//   let now = new Date(count);
//   let seconds = now.getSeconds();
//   let minutes = now.getminutes();
//   return{
//     count,
//     minutes,
//     seconds
//   }
// }

function reducer(prevState= state, action){
  return{
    timer: {prevState.timer}
  }
}

  let now = new Date(prevState.count + 1000);
  let now = new Date(count);
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  return{
    count,
    minutes,
    seconds
  }
}
