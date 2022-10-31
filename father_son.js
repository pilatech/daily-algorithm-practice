/*
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
 // assume none passes 100 
 // loop over the ages and return when son's age is half of the father
 let diff = 0
  if(dadYearsOld - sonYearsOld < sonYearsOld)
  while(dadYearsOld / sonYearsOld !== 2){
   dadYearsOld--
   sonYearsOld--
   diff++
  } else {
   while(dadYearsOld / sonYearsOld !== 2){
   dadYearsOld++
   sonYearsOld++
   diff++
   }
  }

  return diff
}


console.log(twiceAsOld(36, 7))