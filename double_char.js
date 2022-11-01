/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str) {
 return str.split('').map(item => item+item).join('')
}

console.log(doubleChar("Hello World"))
