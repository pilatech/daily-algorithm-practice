// Do we have same amounts of x and o
function XO(str) {
  // gather xs and os in an object
  // check if keys are even available
  // check if they have equal frequncy
  str = str.toLowerCase()
 if(str.indexOf('x') === str.indexOf('o')) return true
  const lookup = {}
  for(let char of str){
   if(char === 'x' || char === 'o'){
    lookup[char] = (lookup[char] || 0) + 1
   }
  }
 return lookup['x'] === lookup['o']
}

console.log(XO("ooxXm")) // true