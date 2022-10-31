/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

function removeUrlAnchor(url){
 //split, splice, join the url
 //OR slice 0 to #
 if(url.indexOf('#') === -1) return url
 return url.slice(0, url.indexOf('#'))
}

console.log(removeUrlAnchor("www.codewars.com?page=1"))