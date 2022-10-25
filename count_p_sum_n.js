/*
Given an array of integers

Return an array, where the first element is the count of positive numbers and second is the sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array

rephrase: function that counts all the positive numbers and adds all the negative numbers. It then returns an array with these two values
*/

function countPositivesSumNegatives(input){
  if (!input.length || !input) return []
  let positiveCounter = 0
  let negativeSum = 0
  for(let element of input){
   if (element < 0) negativeSum += element
   if (element > 0) positiveCounter++
  }
   return [positiveCounter, negativeSum]
  
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]