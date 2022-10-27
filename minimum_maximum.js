function minMax(arr){
 return [Math.min.apply(this, arr), Math.max.apply(this, arr)]
}


console.log(minMax([1,2,3,4,5]))