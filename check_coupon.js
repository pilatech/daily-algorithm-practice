/*
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const cDate = new Date(currentDate).getTime()
  const eDate = new Date(expirationDate).getTime()
  return ((enteredCode === correctCode) && (cDate <= eDate))
}

console.log((checkCoupon('123','123','September 5, 2014','October 1, 2014')))