/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
STEPS
- if(p is not 4 chars length or 6) return false
- if(pinString.Number is NaN) return false
return true
*/

function validatePIN(pin){
 if(Number(pin) % 1) return false
 if((pin.length !== 4) && (pin.length !== 6) || isNaN(Number(pin))) return false
 return true
}

console.log(validatePIN('000000'))



