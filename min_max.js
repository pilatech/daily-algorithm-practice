// function that returns minimum and another that returns maximum

const min = list => list.sort((a, b) => a - b)[0]
const max = list => list.sort((a, b) => a - b)[list.length - 1]

console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))