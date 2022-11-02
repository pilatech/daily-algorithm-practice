/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

// create an array with [indices] for odd items using reduce
// then create an array of odd items
// sort the items
// loop and splice item into the original array based on the indices array

function sortArray(array) {
 const [ nums, indices ] = array.reduce((arr, cur, ind) => {
  const [ nums, indices ] = arr
  if(cur % 2) { 
   nums.push(cur)
   indices.push(ind)
  }
  return arr
 }, [[],[]])

 nums.sort((a, b) => a - b).forEach((num, index) => {
  array.splice(indices[index], 1, num)
 })

 return array
}

console.log(sortArray([5, 8, 6, 3, 4]))  // [3, 8, 6, 5, 4]