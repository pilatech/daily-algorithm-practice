/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
*/

function roundToNext5(n){
 // check if n % 5 is === 0 && return it if so
 // otherwise return n + n%5
 if(n % 5 === 0) return n
 if(n === 0) return 0
 if(n < 0) return n - (0 + n % 5)
 return n + (5 - n % 5)
}

console.log(roundToNext5(-6))