/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

function order(words){
 // split the words at space
 //map them to produce sub arrays with number and string --> split the string, filter it to be left with just a number, join it back and put it into the array
 // sort the string based on that number
 // map again to retain only strings
 // join back
 return words.split(' ').map(el => {
  const num = el.split('').filter(item => Number(item)).join('')
  return [el, Number(num)]
 }).sort((a, b) => a[1] - b[1]).map(el => el[0]).join(' ')
}


console.log(order("is2 Thi1s T4est 3a" ))