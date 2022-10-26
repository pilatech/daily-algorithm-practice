function printerErrors(s){
 if(s < 1) return false
 let err = 0
 for(let i = 0; i < s.length; i++){
  let ch = s[i].toLowerCase()
  if(ch < 'a' || ch > 'm' || ch > 'z') err++
 }
 return `${err}/${s.length}`
}

console.log(printerErrors('aaaxbbbbyyhwawiwjjjwwm'))