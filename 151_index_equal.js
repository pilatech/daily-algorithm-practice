/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
Rephrase -> Index of a number which has its left and right sum of elements equal to each other
STEP
- if array length is 1 return 0
- if array length is 2 return -1
- start looping at index 1
 - get slice of the array from 0 to index
 - get another slice from index + 1 to the end
 - get each slice's total and compare
 - if they are equal return current index
- return -1 at the end
*/

function findEvenIndex(arr){
 if(arr.length === 1) return 0
 for(let i = 0; i < arr.length; i++){
  if(sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) return i
 }
 return -1

 function sum(arrSlice){
   return arrSlice.reduce((total, cur) => {
     if(cur === undefined) cur = 0
     return total + cur
   }, 0)
 }
}

console.log(findEvenIndex([1,100,50,-51,1,1]))