// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
 const nums = String(n).split('')
 return nums.map(num => parseInt(num)).reverse()
}

console.log(digitize(35231))