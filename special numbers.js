function specialNumbers (input) {
    let num = Number(input[0])
    let output = ''
    for (let row = 1111; row <= 9999 ; row ++) {
        let rowNumberToString = `${row} `
         
        for (let col = 0 ; col < 4 ; col ++) {
            let currNum = Number(rowNumberToString[col])
            if (num % currNum !== 0) {
                rowNumberToString = ''
            }
        }
        output += rowNumberToString
    }
    console.log(output);
}
specialNumbers (['3'])