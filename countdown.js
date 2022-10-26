// function that returns an array of integers from n to 1

const reverseSeq = n => {
 const arr = []
 for(let i = n; i > 0; i--){
   arr.push(i)
 }
 return arr
};

console.log(reverseSeq(5))