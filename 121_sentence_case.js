/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Rephrase --> function that returns a setence capitalized except for minor words (2nd arg) if available - these's case should be ignored.
STEPS
- change the title to lowercase
- split it 
- map over it and replace the first letter with it's capital if it's index is above 0 and minor words are available and the current item is not in minor words
- join and the array and return string
*/


function titleCase(title, minorWords) {
 if(!title) return ''
 minorWords = minorWords?.toLowerCase()
  return title.toLowerCase().split(' ').map((word, index) => {
    const cWord = word[0].toUpperCase() + word.slice(1)
    if((index !== 0) && minorWords && (minorWords.split(' ').includes(word))) return word
    return cWord
  })
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings'


















