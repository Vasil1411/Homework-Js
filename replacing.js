function rightPlace (string, symbol, string2) {
    let newString = string.replace('_', symbol);
    if (newString == string2) {
        console.log('Matched');
    }
    else {
        console.log("Not Matched");
    }
}
rightPlace 