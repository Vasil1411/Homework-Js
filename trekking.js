function trekking (input) {
let groupCount = Number(input[0])

let monblancCount = 0
let musalaCount = 0
let k2Count = 0
let kilimandjaroCount = 0
let everestCount = 0

let allClimbers = 0
for (let i = 1 ; i <=groupCount ; i ++) {
    let currentGroupCount = Number(input[i])
    allClimbers +=currentGroupCount
    if  (currentGroupCount <=5) {
   musalaCount +=currentGroupCount
    }
   else if  (currentGroupCount <=12) {
     monblancCount +=currentGroupCount
    }
   else if  (currentGroupCount <=25) {
kilimandjaroCount +=currentGroupCount
    }
   else if  (currentGroupCount <=40) {
  k2Count +=currentGroupCount
    }
    else {
     everestCount +=currentGroupCount
    }
}
console.log(`${((musalaCount / allClimbers) * 100).toFixed(2) }%`);
console.log(`${((monblancCount / allClimbers) * 100).toFixed(2) }%`);
console.log(`${((kilimandjaroCount / allClimbers) * 100).toFixed(2) }%`);
console.log(`${((k2Count / allClimbers) * 100).toFixed(2) }%`);
console.log(`${((everestCount / allClimbers) * 100).toFixed(2) }%`);
}
trekking (["10",

"10",

"5",

"1",

"100",

"12",
"26", "17", "37", "40", "78"])