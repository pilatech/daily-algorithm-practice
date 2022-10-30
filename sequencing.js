/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0
*/

const sequenceSum = (begin, end, step) => {
 // if begin is greater than end return 0
 //create sum variable and init to 0
 //for -> i = begin : i <= end; i+= step
 let sum = 0
 if(begin > end) return sum
 for(let i = begin; i <= end; i+=step){
  sum+= i
 }
 return sum
};

console.log(sequenceSum(1, 5, 3))