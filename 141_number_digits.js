/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Rephrase ==> functions takes a number. Square every number between 0 and the number (inclusive). Count the digit - (d arg) in the numbers
STEPS
- create an empty arr
- loop(let i = 0; i <= n; i++)
- push(i*i) to the array
- join the array with ''
- split again
- filter leaving d
- check the length
- return
*/
0
function nbDig(n, d) {
 let squares = ''
 for(let i = 0; i <= n; i++){
  squares+= i*i
 }
 return squares.split('').filter(n => n === String(d)).length
}

console.log(nbDig(10, 1))