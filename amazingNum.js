function amazingNum (num) {
 let numAsString = String(num)
 let sum = 0
 for (let i = 0; i<numAsString.length; i++) {
    sum +=Number(numAsString[i])
 }
 let sumAsString = String(sum)
 let isAmazing = 'False'
 for (let i = 0; i <sumAsString.length; i++) {
 if (Number(sumAsString[i]) ===9) {
    isAmazing = 'True'
    break
    
 }
}
    console.log(`${num} Amazing? ${isAmazing}`);
 

}
amazingNum (1233)
amazingNum(999)