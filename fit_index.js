/*
create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

function gimme (triplet) {
  let [_,mid, __] = [...triplet].sort((a, b) => a - b)
  return triplet.indexOf(mid)
}

console.log(gimme([2, 3, 1])) // => 0