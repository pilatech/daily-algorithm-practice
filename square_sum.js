function squareSum(numbers){
 return numbers.reduce((acc, curr) => {
   return acc + curr**2
 }, 0)
}

console.log(squareSum([1, 2, 2]))