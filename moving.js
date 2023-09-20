function moving (input) {
let width = Number(input[0])
let length = Number(input[1])
let height = Number(input[2])
let roomSize = width * height * length
let usedSize = 0
let index = 3

while (usedSize < roomSize) {
    if (input[index] === 'Done') {
        break;
    }
    usedSize += Number(input[index])

    index++
}
if (usedSize < roomSize) {
    console.log(`${roomSize - usedSize} Cubic meters left.`);
}
else {
    console.log(`No more free space! You need ${usedSize - roomSize} Cubic meters more.`);
}
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])
