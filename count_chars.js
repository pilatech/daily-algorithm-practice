/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
  const frq = {}
  for(let char of string){
   frq[char] = (frq[char] || 0) + 1
  }
  return frq
}

console.log(count('aba'))