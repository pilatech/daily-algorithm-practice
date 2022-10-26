// summing array elements except the lowest and highest values

function sum_array(arr){
 if(!arr || arr.length < 2) return 0
 arr.sort((a, b) => a - b)
 return arr.reduce((sum, curr, i) => {
   let added = i === 0 || i === arr.length - 1 ? 0 : curr
   return sum + added
 }, 0)
}

console.log(sum_array([6, 2, 1, 8, 10]))