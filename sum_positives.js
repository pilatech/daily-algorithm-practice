function positiveSum(arr){
 return arr.reduce((sum, curr) => {
   const add = curr > 0 ? curr : 0
   return sum + add
 }, 0)
}

console.log(positiveSum([1,-4,7,12]))