function password (input) {
  let name = input [0]
  let password = input [ 1]
  let guessPass = input [2]
  let index = 3 

  while (guessPass === password) {
     guessPass = input[index]
    index++
  }
   console.log(`Welcome ${name}!`);
}
password (["Nakov",

"1234",

"Pass",

"1324",

"1234"])