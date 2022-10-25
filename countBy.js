/*
create a function with two arguments htat will return an array of the n multipls of x

Assume both the given number and the number of time to count will be positive numbers greater than 0

return the result as an array

rephrase: count by by x for n times
*/

function countBy(x, n){
 const multiples = []
  for(let i = x; i <= n * x; i+=x){
   multiples.push(i)
  }
  return multiples
}

console.log(countBy(1,10)) // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)) // [2,4,6,8,10]