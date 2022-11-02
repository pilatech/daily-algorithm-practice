/*
You will be given a number and you will need to return it as a string in Expanded Form.
STEPS
- make it string then array and check the 
- loop over the the the array and repeating 0s on every item (length - 1 - index) 0s
- map over these and make them numbers to git rid of all zeros
join them back with " + "
*/
function expandedForm(num) {
 const len = num.toString().length
 return num.toString().split('').map((first, index) => {
  return (first === '0') ? '' : `${first}${'0'.repeat((len - 1 - index))}`
 }).filter(item => item).join(' + ')
}

console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'