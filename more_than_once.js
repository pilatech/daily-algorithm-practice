/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text){
 // create count
 //gather the frequencies in an object
 //loop over the obj and add one for an key that has a value more than 1
 // return count
 let count = 0
 const col = {}
 for(let char of text.toLowerCase()){
  col[char] = (col[char] || 0) + 1
 }
 for(let key in col){
  if(col[key] > 1) count++
 }
 return count
}

console.log(duplicateCount("aabBcde"))