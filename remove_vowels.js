function disemvowel(str) {
 let newStr = ""
 const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5}
 for(let char of str){
  if(!(char.toLowerCase() in vowels)){
    newStr+= char
  }
 }
 
 return newStr
}

console.log(disemvowel("This website is for losers LOL!"))