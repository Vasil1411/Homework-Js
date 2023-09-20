function sumOfPrime (input) {
    let index = 0
    let allPrimesSum = 0
    let allNonPrimesSum = 0

    while (input[index] !== 'stop') {
        let currNum = Number(input[index])

        if (currNum < 0) {
            console.log('Number is negative.');
        }
        else if (currNum === 0 || currNum === 1)  {
        allNonPrimesSum += currNum
        }
        else {
        let isNonPrime = false
        

        for (let j = 2 ; j < currNum ; j ++) {
            if (currNum % j === 0) {
                isNonPrime = true
                break;
            }

        }
    
    if (isNonPrime) {
        allNonPrimesSum +=currNum
    }
    else {
        allPrimesSum +=currNum
    }
}
index ++
}
console.log(`Sum of all prime numbers is: ${allPrimesSum}`);
console.log(`Sum of all non prime numbers is: ${allNonPrimesSum}`);
}
sumOfPrime (["3",

"9",

"0",

"7",

"19",

"4",

"stop"])