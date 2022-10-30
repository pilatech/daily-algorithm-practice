/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

function reverseWords(str) {
 // split the string @ spaces
 // use map on each word 
 // split each word and use .reverse then join back
 return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reverseWords("This is an example!"))