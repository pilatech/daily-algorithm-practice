/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
STEPS
- map over the array return min
- reduce to get the sum of mins
*/


function sumOfMinimums(arr) {
 return arr.map(val => Math.min(...val)).reduce((t, n) => t + n , 0)
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))