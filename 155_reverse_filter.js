/*
Given a string str, reverse it and omit all non-alphabetic characters.
*/

function reverseLetter(str) {
 return str.replace(/[^a-z]/gi, '').split('').reverse().join('')
}

console.log(reverseLetter('ultr53o?n'))