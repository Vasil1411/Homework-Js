function solve (num) {
   let isPrime = true
   let divider = 2
   let maxDivider = Math.floor(Math.sqrt(num))

   while (isPrime && divider <= maxDivider) {
    if (num % divider == 0) {
        isPrime = false
    }
    divider ++
   }
   console.log(isPrime);
}
solve(81)