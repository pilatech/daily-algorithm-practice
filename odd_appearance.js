/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
 // gather the items in an obj
 // check if a key in object has a value which if divided by 2 leaves remain
 const lookup = {}
 for(let el of A){
  lookup[el] = (lookup[el] || 0) + 1
 }
 for(let key in lookup){
  if(lookup[key] % 2) return Number(key)
 }
}

console.log(findOdd([0,1,0,1,0] ))