function solve (n) {
for (let i = 97; i < 97 + Number(n); i++) {
    let firstLetter = String.fromCharCode(i);
  for (let j = 97; j < 97 + Number(n); j++) {
      let secondLetter = String.fromCharCode(j);
  for (let k = 97; k < 97 + Number(n); k++) {
      let thirdLetter = String.fromCharCode(k);
     console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
    }
 }
}
}
solve (3)