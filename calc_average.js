function findAverage(arr){
 if(arr.length === 0) return 0
 const sum = arr.reduce((prev, curr) => prev + curr , 0)
 return sum / arr.length
}

console.log(findAverage([1, 2, 3, 4]))