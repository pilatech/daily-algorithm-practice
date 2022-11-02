/*
 you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
--STEPS
 - create new compy of the string
 - loop over it and check if it's alpha and replace with it's position otherwise replace with nothing
*/

function alphabetPosition(text) {
  text = text.toLowerCase()
  let text2Digit = ''
  for(let i = 0; i < text.length; i++){
   if(text[i].search(/[a-z]/) !== -1) {
    let replacer = `${text[i].replace(text[i], text[i].charCodeAt() - 96)} `
   text2Digit += replacer
   }
   
  }
  return text2Digit.trim()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")
)