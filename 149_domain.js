/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
STEPS
 - split the string at //
 - take the the second index and replace www. with nothing
 - slice it upt the indexOf .
*/


function domainName(url){
 let domain = url.split('//')[1]?.replace('www.','') || url.replace('www.','')
 return domain.slice(0, domain.indexOf('.'))
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))