/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.
*/

function SeriesSum(n)
{
 let sum = 1
 if(n === 0) sum = 0
 for(let i = 1; i < n * 3; i += 3) {
  if(i === 1) continue
  sum += 1/i
 }
 return sum.toFixed(2)
}

console.log(SeriesSum(1)) // 1.49