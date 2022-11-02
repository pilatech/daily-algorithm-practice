/*
Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
*/

function pipeFix(numbers){
  const ordered = []
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  for(let i = min; i <= max; i++){
   ordered.push(i)
  }
  return Array.from(new Set(ordered.sort((a, b) => a - b)))
}

console.log(pipeFix([-1,4]))