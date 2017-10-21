// Given an array of integers, return indices of the two numbers such
// that they add up to a specific target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
//_________________
// const twoSum = (array, sum) => {
//   let result = []
//
//   for (let i = 0; i < array.length; i++){
//     for (let k = i + 1; k < array.length; k++){
//       if (array[k] === sum - array[i]){
//         result = [i, k]
//       }
//     }
//   }
//   return result
// }
//
// _________________

function twoSum(arr,target){
  for (let i = 0; i < arr.length; i++){
    let candidate = target - arr[i];
    let index = arr.indexOf(candidate);
    if(index !== i){
      return [i, index];
    }
  }
}

//   const sumNum = 0;
// for(let i = 0; i < nums.length-1; i++){
//     sumNum.push(nums[i]+ nums[i+1]);
//      sumNum.push(nums[])
//
//     if(sumNum !== target){
//
//     } else {
//       return "no combination adds up to " + target;
//     }
// }
// }

module.exports = twoSum;
