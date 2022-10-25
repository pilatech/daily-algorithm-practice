const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
return distanceToPump <= (fuelLeft * mpg)
};

console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))