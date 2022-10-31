/* 
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
*/

function checkExam(array1, array2) {
 // let score
 // loop over the first array
 // compare current item with item at array2[currentItemofArray1]
 let score = 0
 for(let i = 0; i < array1.length; i++){
 if(array2[i] && array1[i] === array2[i]) score+= 4
 else if(array2[i] && array1[i] !== array2[i]) score -= 1
 }
 if(score < 0) return 0
 return score
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))