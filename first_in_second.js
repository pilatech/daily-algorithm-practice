// is first argument the last part of the second?

function solution(str, ending){
  //return first string == slice/substring of second string from minus first string length
  if(ending === '') return true
  return ending === str.slice(-ending.length)
}

console.log(solution('abc', 'bc'))