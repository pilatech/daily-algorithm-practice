// turn true and false into booleans yes and no respectively
function boolToWord( bool ){
 return bool && 'Yes' || 'No'
}

console.log(boolToWord(true))