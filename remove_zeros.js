/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
*/

function noBoringZeros(n) {
  if(n === 0) return 0
 // count the number of zeros then divide to get the power of 10 and divide
 let trimmed = Number(Math.abs(n).toString().split('').reverse().join('')).toString()
 let pow = Math.abs(n).toString().length - trimmed.length
 return n / (10**pow)
}

console.log(noBoringZeros(-1050))