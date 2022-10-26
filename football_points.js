// calculate the points of our football team x --> given match results as array(games) of strings with x:y as results x being our team result and y the opponent's

function points(games) {
 //map over the array and give array of points
 //reduce to get the total points
 const points = games.map(result => {
   const ours = parseInt(result[0])
   const opp = parseInt(result[2])
   if(ours > opp) return 3
   if(ours === opp) return 1
   return 0
 })
 return points.reduce((total, curr) => total + curr, 0)
}

// --> looking back, I could just have used map only, reduce only or classic single loop

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))