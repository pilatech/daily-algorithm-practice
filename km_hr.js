/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
*/

function cockroachSpeed(s) {
 //changes hr into second
 // change km into cm
 const sec = 60 * 60
 const cm = s * 1000 * 100
 return Math.floor(cm / sec)
}

console.log(cockroachSpeed(1.08)) // 30