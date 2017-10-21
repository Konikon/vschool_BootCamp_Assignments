function timer(prevTimer, action){
  switch(action, type){
      case "START":
      let count = prevTimer.count + 1000;
      let now = new Date(count);
      let minutes = now.getminutes();
      let seconds = now.getSeconds();
        return {
          count,
          minutes,
          seconds
        }
  }
}
