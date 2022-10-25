function areYouPlayingBanjo(name){
 if(!(typeof name === 'string')) return null
 if(name[0].toLowerCase() === 'r') {
  return `${name} plays banjo`
 }
 return `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('rilate'))