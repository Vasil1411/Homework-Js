function minNumber (input) {
    let minNum = Number.MAX_SAFE_INTEGER
    let command = input [0]
    let index = 1
    
    while (command !== 'Stop') {
        let num = Number(command)
        if (num < minNum) {
            minNum = num
        }
        command = input[index]
        index++
    }
    console.log(minNum);
}
minNumber (["45", "-20", "7", "99", "Stop"])