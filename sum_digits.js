/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. */

function sumDigits(number) {
 return String(Math.abs(number)).split('').reduce((sum, num) => {
  return Number(sum) + Number(num)
 }, 0)
}

console.log(sumDigits(99))