function vowelsSum (input) {
 
let word = input [0]
let sum = 0

for (let i = 0 ; i < word.length ; i ++) {
    let curChar = word.charAt(i)

    switch (curChar) {
        case 'a' :
            sum +=1
            break;
            case 'e' :
            sum +=2
            break;
            case 'i' :
            sum +=3
            break;
            case 'o' :
            sum +=4
            break;
            case 'u' :
            sum +=5
            break;
    }
    
}
console.log(sum);
}
vowelsSum (["hello"])