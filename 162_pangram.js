/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
STEPS
- replace anything not alphabet with ''
- remove duplicates by using set
- if length is not 26 return false
- return true
*/

function isPangram(string){
 string = string.toLowerCase()
 const alphaLen = Array.from(new Set(string.replace(/[^a-z]/g, ''))).length
 return alphaLen === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.He lands head first on a rotting maple log.Knocked unconscious, fox sleeps with shallow breathuntil the lazy dog awakes and worries him to death.'))