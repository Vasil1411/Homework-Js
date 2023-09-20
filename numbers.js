function numbers (input) {
let startNum = Number(input[0])
let endNum = Number (input[1])
let sum = 0
let validNums = "";

for (let currNum = startNum ; currNum <= endNum ; currNum ++) {
    if (currNum % 9 === 0) {
        sum += currNum
        validNums += currNum + '\n'
    }
}
console.log(`The sum: ${sum}`);
console.log(validNums);
}
numbers (["100", "200"])