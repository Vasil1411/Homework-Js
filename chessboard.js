function solve(n) {
    let result = '';
    result+= '<div class="chessboard">\n'
    for (let i = 0; i < n; i ++) {
        let row ='';
        row+= '<div>\n';
        for (let j = 0; j < n; j++) {
            let colour = (i+j) % 2 ? 'white': 'black';
            row += ` <span class="${colour}"></span>\n`
        }
        row += `</div>\n`
        result +=row
    }
    result += '</div>'
    console.log(result);

    
}
solve (3)