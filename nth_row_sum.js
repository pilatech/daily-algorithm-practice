function rowSumOddNumbers(n) {
 // you will know the number of items in the row by n
 // the center for those numbers will be n * n
 // look for half of n to get numbers to add to the right and to the left of n
 // if it leaves a remainder, n is the center
 // otherwise both halves are evenly distributed
 // add numbers to the left as long as our counter n >= half (to get each left number, subtract count * 2 from center number)
 // add numbers to the right as long as our counter n <= half (to get each left number, add count * 2 to the center number)


// ---> loop adding the right numbers and loop adding the left numbers

const center  = n**2
const count = Math.floor(n / 2)
const isEven = center % 2 === 0
let total = isEven ? 0: center

for(let i = count; i >= 1; 
i--){
 total += isEven ? center + 3 - (i * 2) : center - (i * 2)
}
for(let j = 1; j <= count; j++){
  total += isEven ? center - 3 + (j * 2) : center + (j * 2)
}
return total
}

// return n**3 would have worked for this


console.log(rowSumOddNumbers(42))