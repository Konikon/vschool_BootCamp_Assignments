// Given an integer n, 
// write a function that returns n! (n factorial)

function factorial (n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

console.log(factorial(4));  // 24
console.log(factorial(5));  // 120