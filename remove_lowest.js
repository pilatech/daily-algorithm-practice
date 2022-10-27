// remove lowest item on the array. 
// Caution: Do not mutate the original array

function removeSmallest(numbers) {
 //create a copy of the numbers array
 // use sort method on it and sort inversely
 // use pop on the sorted array and take the return value.
 // return the 'original' array with spliced item at index of the poped item
 if(!numbers.length) return []
 const lowest = [...numbers].sort((a,b) => b - a).pop()
 const arr = [...numbers]
 arr.splice(arr.indexOf(lowest), 1)
 return arr
}


console.log(removeSmallest([5, 3, 2, 1, 4]))