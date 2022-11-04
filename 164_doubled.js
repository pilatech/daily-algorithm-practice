/*
Given an array of integers, return a new array with each value doubled.
*/

function maps(x){
 return x.reduce((arr, n) => {
 arr.push(n*2)
 return arr
 }, [])
}

console.log(maps([1,2,3]))