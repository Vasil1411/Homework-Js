function travelling (input) {
  let command = input [0]
  let index = 1
  

  while (command !== 'End') {
    let destination = command
    let budget = Number(input[index])
    index++;

    let savedMoney = 0

    while (savedMoney < budget) {
        let curMoney = Number(input[index])
        index++;

        savedMoney += curMoney
    }
    console.log(`Going to ${destination}!`);

    command = input[index]
    index++
  }
}
travelling (["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])