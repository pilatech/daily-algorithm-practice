// array pair elements represent people who got into the bus [0] and people who got out [0]
// return the number of people left in the bus after the last bus stop

const number = busStops => {
 // use reduce to add all the people who got into the bus and subtract all that got out
 return busStops.reduce((left, stop) => {
  return left + stop[0] - stop[1]
 }, 0)
}

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // 17