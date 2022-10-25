// There was a test in your class and you passed it. Congrats. But you are an ambitious person. You wnat to know if you're better than the average student in your class

// You receive an array with your peers' scores.
// Calculate the average and compare with yours
// return true if you're better and false otherwise

function betterThanAverage(classPoints, yourPoints){
 const allPoints = [...classPoints, yourPoints]
 const allPointsTotal = allPoints.reduce((prev, curr) => {
   return prev + curr
 }, 0)
 const classAverage = allPointsTotal / allPoints.length
 if(yourPoints > classAverage) return true
 return false
}

console.log(betterThanAverage([2,3], 5))