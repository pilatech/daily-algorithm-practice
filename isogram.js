/*
An isogram is a word that has not repeating letters, consecutive or none-consecutive. Implemet a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case
*/
//--steps
//collect the strings in an obj
 // loop over the string
 // if you find a letter that is already in obj return false
 // otherwise add it
 // return true

function isIsogram(s){
 let str = s.toLowerCase()
 if(str === '') return true
 const strCollector = {}
 for(let char of str){
  if(char in strCollector) return false
  strCollector[char] = 1
 }
 return true
}

console.log(isIsogram('pop'))