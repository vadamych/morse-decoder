const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function sep(str, num) {
        let arr = [];
        let currStr = "";
        for (let i = 0; i < str.length; i++) {
            currStr += str[i]
            if (currStr.length === num) {
                arr.push(currStr)
                currStr = ""
            }
        }
        return arr;
    }

    function deleteZeros(arr) {
        return arr.map(elem => elem.replace(/^0+/, ''))
    }

    function toMorze(arr) {
        return arr.map(e => e.replace(/10/g, '.').replace(/11/g, '-').replace(/\*+/g, " "));
    }

    const sepArr = sep(expr, 10);
    const arrToDecode = deleteZeros(sepArr);
    const morzeArr = toMorze(arrToDecode)

    return morzeArr.map(elem => {
        if (elem === " ") {
            return elem;
        } else {
            for (key in MORSE_TABLE) {
                if (elem === key) {
                    return elem = MORSE_TABLE[key];
                }
            }
        }
    }).join('');
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));

module.exports = {
    decode
}