/*Return a new array consisting of elements which are multiple of their own index in input array (length > 1).*/

function multipleOfIndex(array) {
 return array.filter((item, index) => {
  return index && !(item % index)
 })
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // =>  [-6, 32, 25]