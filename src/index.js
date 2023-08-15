const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    const exprArrOfLetters = expr.match(/.{1,10}/g);
    
    exprArrOfLetters.forEach(letter => {
        const symbols = letter.match(/.{1,2}/g);
        const arr2 = [];
        for (let i = 0; i < symbols.length; i++) {
            if (symbols[i] === '00') arr2.push('');
            if (symbols[i] === '10') arr2.push('.');
            if (symbols[i] === '11') arr2.push('-');
            if (symbols[i] === '**') arr2.push(' ');
        }
        arr.push(arr2.join(''));
    })
    const arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '     ') arr3.push(' ');
        if (MORSE_TABLE[arr[i]]) arr3.push(MORSE_TABLE[arr[i]]);
    }
    return arr3.join('');
}

module.exports = {
    decode
}