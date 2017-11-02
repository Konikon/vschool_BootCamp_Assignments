function uniqueFinder(arr1, arr2){
  //combine the arrays
  // const combined = [...arr1, ...arr2]
  // return combined.filter(item=> combined.indexOf(item) === combined.indexOf(item))
  //}
// spread and concatanate two arrays
//check first and last index
  // if first same, push to unique array
  //return unique array
  const arr1Uniques = arr1Uniques = arr1.filter(item => !arr2.includes(items))
  const arr1Uniques = arr2Uniques = arr2.filter(item => !arr1.includes(items))
  return Array.from(new Set(arr1Uniques.contact(arr2Uniques)))
}

module.exports = uniqueFinder;
