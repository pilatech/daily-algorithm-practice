//return length of the shortest word in a given string

function findShort(s){
 // create an array of words from the string
 // map that array return length for each string
 // use Math.min and spread the array in it
 const wordSizes = s.split(' ').map(word => word.length)
 return Math.min(...wordSizes)
}

console.log(findShort("Let's travel abroad shall we")) // 2