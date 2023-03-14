function cantor(n){
    let row = 1;
    let col =1;
    let i=1;

    while (i <n) {
        if(row === 1) {
            col++;
            i++;
        }else if (col ===1){
            row++;
            i++;
        } else {
            row++
            col--;
            i++
        }
    }

    return `${row}/${col}`l
} 

// lol both mine and chatgpt fucked up. Answer from Codewars:

function cantor(n) {

    let m = Math.ceil((Math.sqrt(1 + 8 * n) - 1) / 2);
    let p = m * (m + 1) / 2;
    let d = m % 2 === 0 ? m - 1 - p + n : p - n;
  
    return (1 + d) + '/' + (m - d);
  
  }
  