function oscars (input) {
let actorName = input [0]
let points = Number(input[1])
let jury = Number(input[2])
let allPoints = points

for (i = 1 ; i < jury * 2 ; i +=2 ) {
    let juryName = input[ i + 2]
    let juryPoins = Number(input [i + 3])
    allPoints += (juryName.length * juryPoins) / 2

    if (allPoints > 1250.5) {
        break;
    }
}

if (allPoints > 1250.5) {
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${allPoints.toFixed(1)}!`);
}
else {
    console.log(`Sorry, ${actorName} you need ${(1250.5 - allPoints).toFixed(1)} more!`);
}

}
oscars (["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])