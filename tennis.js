function tennisTable (input) {
let competitionsCount = Number(input[0])
let startPoints = Number(input[1])
let allPoints = 0
let allWins = 0

for (let i =0 ; i < competitionsCount; i++ ) {
  switch (input[i+2]) {
    case 'W':
    allPoints += 2000
    allWins += 1
    break;
    case 'F':
    allPoints += 1200
    break;
    case 'SF':
    allPoints += 720
    break;
  }
}
console.log(`Final points: ${startPoints + allPoints}`);
console.log(`Average points: ${Math.floor(allPoints / competitionsCount)}`);
console.log(`${((allWins/competitionsCount) * 100).toFixed(2)}%`);
}
tennisTable (["4",

"750",

"SF",

"W",

"SF",

"W"])