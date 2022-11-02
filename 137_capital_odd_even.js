/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
*/

function capitalize(s){
 const [a, b] = s.split('').reduce((arr, item, i) => {
  const [ odd, even ] = arr
  if(!(i % 2)){
   odd.push(item.toUpperCase())
   even.push(item)
  } else {
   even.push(item.toUpperCase())
   odd.push(item)
  }
  return arr
 },[[],[]])
 return [ a.join(''), b.join('')]
};

console.log(capitalize("abcdef")) // = ['AbCdEf', 'aBcDeF']