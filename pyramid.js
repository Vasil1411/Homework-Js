function pyramid (input) {
    let num = Number(input[0])
    let currNum = 0
    for (let rows = 0 ; rows<=num ; rows ++) {
        let printRow = ''
        for (let col = 0 ; col <=rows ; col ++) {
            currNum+=1
            printRow += `${currNum} ` 
            if (currNum >= num) {
                break;
            }
        }
        console.log(printRow);
        if (currNum >= num) {
            break;
        }
    }

}
pyramid (['7'])