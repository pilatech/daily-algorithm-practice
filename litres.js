/*
Nathan loves cying.
Because Nathan knows it is import to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to retru nthe number of litres Nathan will drink rounded to the smallest value
*/

function litres(time){
 return Math.floor(time * .5)
}

console.log(litres(3)) // 1
console.log(litres(6.7)) // 3