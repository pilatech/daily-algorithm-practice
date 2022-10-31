/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s)
{
 //let div = s.length / 2
 // if div % 1 return s[Math.floor(div)] else return "s[div-1]+s[div]"
  const center = s.length / 2
  return center % 1 ? s[Math.floor(center)] : s[center-1] + s[center]
}

console.log(getMiddle('sam'))