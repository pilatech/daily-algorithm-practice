// sum both strings and integers in an array

function sumMix(x){
   return x.reduce((sum, curr) => {
     return sum + Number(curr)
   }, 0)
}

console.log(sumMix([9, 3, '7', '3']))