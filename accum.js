// function should work like this
/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
 // make the string all lowercase
	// split the string
 // map it,repeat (index times + 1), uppercasing the first letter and then join it back with dash
 s = s.toLowerCase()
 return s.split('').map((item, index) => {
   return `${item.toUpperCase()}${item.repeat(index)}`
 }).join('-')
}

console.log(accum("abcd"))