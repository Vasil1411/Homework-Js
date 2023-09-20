function sequence (input) {
 let startNum = 1
 let endNum = Number(input[0])


 while (startNum<=endNum) {
    console.log(startNum);
    startNum = startNum * 2 + 1
 }

}
sequence (["31"])