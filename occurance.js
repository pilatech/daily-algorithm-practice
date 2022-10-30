/*
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
*/
function strCount(str, letter){
 str = str.toLowerCase()  
 letter = letter.toLowerCase()  
 const first = {}
 for(let i = 0; i < str.length; i++){
  first[str[i]] = (first[str[i]] || 0) + 1
 }
  return first[letter] || 0
}

console.log(strCount("Hello", "l"))