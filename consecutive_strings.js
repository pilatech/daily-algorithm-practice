// find longest combination of string made up of k consecutive elements in the given array

function longestConsec(strarr, k) {
 //if strarr length = 0 || k > strarr || k <= 0 "Nothing"
 // set longest to an empty string
 // loop over the first k strings in the array and concatenate to the longest each time

 //loop over the whole array.
  // create a window which starts at the current longest minus previous element (element 0) plus next element (element k) --> ie start left/start of the window as index 1 and right/end as k
  // create temp variable with that --
  // check which one is greater in length, the current longest and what's in the current window (tmp). Make that one the longest
 
 // if(k > strarr.length || k <= 0) return ""
 // let longest = ''
 // for(let i = 0; i < k; i++){{
 //  longest += strarr[i]
 // }}

 // for(let start = 0, end = k; end < strarr.length; end++){
 //   let tmp = longest.slice(start + strarr[start].length) + strarr[end]
 //   if(tmp.length > longest.length) {
 //    longest = tmp
 //   }
 //   start++
 // }
 // return longest
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))// "ixoyx3452zzzzzzzzzzzz"