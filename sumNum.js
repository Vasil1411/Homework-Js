function sumNumbers (input) {
  let targetSum = input[0]
  let num = Number(input[1])
  let sum = 0 
  let index = 2

  while (targetSum > sum) {
       sum +=num
       num = Number(input[index])
       index++
  }
  console.log(sum);
}
sumNumbers (["100", "10", "20", "30", "40"])