function wave(str){
 // create an array of length === str, each element === str(lowercased) and element position should be capitalized on each element
 return str.toLowerCase().split('').map((el, index) => {
   return str.split(' ')
 })
}

console.log(wave("Two words")) // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
