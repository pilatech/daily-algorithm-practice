// return the highest scoring word a = 1, b = 2, c = 3 
function high(x){
 // split the words into an array
 // map over the array. for ever word
  // reduce it's values to an ascii total
 // check which one has the highest ascii total and return words[it's index]
 const alphabet = "abcdefghijklmnopqrstuvwxyz"
 const lookup = {}
 for(let i = 0; i < alphabet.length; i++){
  lookup[alphabet[i]] = i + 1
 }

 const words = x.toLowerCase().split(' ')
 const totals = words.map(word => {
  return word.split('').reduce((total, curr) => total + lookup[curr], 0)
 })
 const highest =  [...totals].sort((a, b) => a - b).pop()
 const index = totals.indexOf(highest)
 return words[index]
}

console.log(high('My name is pilate'))
console.log('a'.charCodeAt())