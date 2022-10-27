function findUniq(arr) {
// create an empty object
// loop over the arr and gather the elements as propertiess in the object. if it's alread there add else create
// check which has less count || has 1 and return it
 const lookup = {}
 for(let i = 0; i < arr.length; i++){
  lookup[arr[i]] = (lookup[arr[i]] || 0) + 1
 }
 for(key in lookup){
  if(lookup[key] === 1) return Number(key)
 }
}


console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))