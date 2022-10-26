// smash words in an array together to form a sentence
function smash(words) {
 return words.join(' ')
 // let sentence = ''
 // for(let i = 0; i < words.length; i++){
 //  sentence += i === 0 ? words[i] : ` ${words[i]}`
 // }
 // return sentence
};


console.log(smash(['hello', 'world', 'this', 'is', 'great']))