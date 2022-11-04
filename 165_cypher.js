/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
STEPS
- split the string at ''
- map over the array
- if char is not in alpha return char
 - if char is uCase lowercase it [do stuff] return it back as upperase
 - otherwis just [do stuff and return]

 [do stuff]
 - take in char and check if (26 - [charCodeAt() - 96] < 13) => add 13 + 96 otherwise say 13 - (26 - charCode )
*/

function rot13(message){
 return message.split('').map(char => {
  if(char.toUpperCase() === char){
   return rotate(char.toLowerCase()).toUpperCase()
  }
  return rotate(char)
 }).join('')

 function rotate(char){
  const code = char.charCodeAt() - 96
  if(code < 0 || code > 26) return char
  if(code < 13) return String.fromCharCode(code + 13 + 96)
  return String.fromCharCode((13 - (26 - code)) + 96)
 }
}

console.log(rot13('Z %z'))