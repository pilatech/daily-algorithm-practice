/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
STEPS 
- collect the chars in an object that counts them
- split the string, map it checking if each items has its corresponding value in the object greater than 1 if so return ')' else '('
*/

function duplicateEncode(word){
 word = word.toLowerCase()
 const counter = {}
 for(let char of word){
  counter[char] = (counter[char] || 0) + 1
 }
 return word.split('').map(char => {
  return counter[char] > 1 ? ')' : '('
 }).join('')
}

console.log(duplicateEncode("din")) // -> "((("
console.log(duplicateEncode("recede")) // -> "()()()"