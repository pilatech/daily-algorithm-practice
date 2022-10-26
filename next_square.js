function findNextSquare(sq) {
 const sqrt = Math.sqrt(sq)
 if(sqrt - Math.floor(sqrt) !== 0) return -1
 return (sqrt + 1)**2
}

console.log(findNextSquare(36))