/*
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array
*/

function warnTheSheep(queue) {
  const last = queue.length - 1
  const wolf = queue.indexOf('wolf')
  if(wolf === last) return 'Pls go away and stop eating my sheep'
  return `Oi! Sheep number ${queue.length - (wolf + 1)}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]))