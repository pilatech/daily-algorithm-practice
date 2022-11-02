/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
STEPS
- have a vowels string
- make the string an array @ '' loop over it and if an vowels string includes the current item, splice the current items @ current index 
- join the string again and return it
*/

function shortcut (string) {
 const vowels = 'aeiou'
 return string.split('').filter((item, index) => {
  return !vowels.includes(item)
 }).join('')
}

console.log(shortcut("goodbye"))