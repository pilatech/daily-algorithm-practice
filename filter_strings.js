//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// use .filter method and return where type of current item is not a 'string'

function filter_list(l) {
 return l.filter(item => typeof item !== 'string')
}

console.log(filter_list([1,2,'aasf','1','123',123]))



