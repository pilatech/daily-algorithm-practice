/*

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

const isAnagram = (test, original) => {
 if(test.length !== original.length) return false
 const a = {}
 const b = {}
 for(let el of test.toLowerCase()){
  a[el] = (a[el] || 0) + 1
 }

 for(let el of original.toLowerCase()){
  b[el] = (b[el] || 0) + 1
 }
 for(let key in a){
  if(!(key in b)) return false
  if(a[key] !== b[key]) return false
 }
 return true
};


console.log(isAnagram("foefet", "toffee"))
