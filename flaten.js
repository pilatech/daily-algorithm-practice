/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
*/

function flattenAndSort(array) {
 // Good luck, brave code warrior!
 return array.reduce((arr, cur) => {
  arr.push(...cur)
  return arr
 },[]).sort((a, b) => a - b)
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))