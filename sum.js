function sum (input) {
 let startNum= Number(input[0])
 let endNum= Number(input[1])
 let magicNum = Number(input[2])
 let magicPair = false
 let pairChecked = 0

 for (let i =startNum ; i <=endNum ; i++) {
    for (let j = startNum ; j <=endNum ; j++) {
        pairChecked ++;

        if (i + j === magicNum) { 
            console.log(`Combination N:${pairChecked} (${i} + ${j} = ${magicNum})`);
            magicPair = true
            break;
        }
    }
    if (magicPair) {
        break;
    }
 }

 if (magicPair=== false) {
    console.log(`${pairChecked} combinations - neither equals ${magicNum}`);
 }
}
sum (["1",

"10",

"5"])