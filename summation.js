// write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
function summation(num){
  if(num <= 0) return null
  if(num === 1) return num
  return num + summation(num - 1)
}

console.log(summation(2)) // 3
console.log(summation(8)) // 36