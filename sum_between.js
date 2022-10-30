/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum( a,b )
{
   // if they're equal return either
   // let sum = a
   // for let i = a+1; i <= b i++
   // add to sum for each
   // return sum
   if(a === b) return a
   let sum = 0
   const [start, end] = [a, b].sort((x, y) => x - y)
   for(let i = start; i <= end; i++){
     sum += i
   }
   return sum
}

console.log(getSum(0, -1))