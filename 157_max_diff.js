/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))
STEPS
- look for the longest string in the combined
- check where the the longest between a and b. now look for the shortest in where the the longest was not
return the difference of the longest and shortest in length

*/

function mxdiflg(a1, a2) {
 if(a1.length === 0 || a2.length === 0) return -1
 const longest = Math.max(...[...a1, ...a2].map(val => val.length))
 const inA1 = a1.find(val => val.length === longest)
 return inA1 ? longest - getMin(a2) : longest - getMin(a1)

 function getMin(arr){
  const lengths = arr.map(val => val.length)
  return lengths[lengths.indexOf(Math.min(...lengths))]
 }
}

// failed some tests

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))