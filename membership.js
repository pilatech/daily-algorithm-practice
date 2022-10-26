
//map over the data.
 // for each item
  // - check if sub-item 0's value >= 55
  // - check if sub-item 1's value > 7
// --- if that's true return "Senior" otherwise "Open"

const openOrSenior = d => d.map(m => ((m[0] >= 55) && (m[1] > 7)) ? "Senior" : "Open")
// This is probably a bad way of writing code from the readability standpoint

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))