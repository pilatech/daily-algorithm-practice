/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
*/

function getChar(c){
 if(c < 0 || c > 255) return null
 return String.fromCharCode(c)
}

console.log(getChar(65))