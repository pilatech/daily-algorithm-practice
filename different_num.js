/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.
*/

function stray(numbers) {
 const col = {}
 for(let num of numbers){
  col[num] = (col[num] || 0) + 1
 }
 for(let key in col){
  if(col[key] === 1) return Number(key)
 }
}

console.log(stray([17, 17, 3, 17, 17, 17, 17] ))