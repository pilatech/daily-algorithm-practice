// best must start and end with the same letters as dish

function feast(beast, dish) {
 if(beast.length < 2 || dish.length < 2) return null
 if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) return true
 return false
 }

 console.log(feast("great blue heron", "garlic naan"))