// write a function that accepts an integer n and a string s as params and returns a strong of s repeated n times

function repeatStr(s, n){
 let newStr = ''
 for(let i = 0; i < n; i++){
  newStr += s
 }
 return newStr
}

console.log(repeatStr('I', 6))