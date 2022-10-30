/*
Complete the solution so that the function will break up camel casing, using a space between words.

*/

// complete the function
function solution(string) {
    //let's loop over the string
    // when we find an uppercase, let's put a space before it
    let newString = ''
    for(let i = 0; i < string.length; i++){
     const char = string[i]
     newString += char.toUpperCase() === char ? ` ${char}` : char
    }
    return newString
}

console.log(solution('camelCasingTest'))
