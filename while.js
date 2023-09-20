function words (input) {
let text = input [0]
let index = 1

while (text !== 'Stop') {
 console.log(text);
 text = input[index]
 index++;
}
}
words (["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])