function vacation (input) {
  let neededMoney = Number(input[0])
  let currentMoney = Number(input[1])

  let index = 2
  let spendMoneyDays = 0
  let daysCount = 0
  while (neededMoney > currentMoney) {
    let action = input[index]
    let sum = Number(input[index+1])
     daysCount +=1
    if (action==='spend') {
        spendMoneyDays +=1
        currentMoney -= sum
    }
    if (action ==='save') {
        spendMoneyDays = 0
        currentMoney +=sum
    }
    if (currentMoney < 0) {
        currentMoney = 0
    }
    
    index+=2
    if (spendMoneyDays >= 5) {
        break;
    }
  }
  if (spendMoneyDays >= 5) {
    console.log(`You can't save the money.`);
    console.log(`${daysCount}`);
  }
  else {
    console.log(`You saved the money for ${daysCount} days.`);
  }
}
vacation (["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
