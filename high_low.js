// given numbers seperated by space as a string, return a string with highest and lowest of the two seperated by a space

function highAndLow(numbers){
 const numArr = numbers.split(" ").map(num => Number(num) )
 return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

console.log(highAndLow("1 2 -3 4 5")) // '5 -3'