const getLettersAndSymbols = function (str) {
    return [...str].reduce((indexObj, item, index) => {
        let code = item.charCodeAt();
        if((code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt())) {
            indexObj.words.push(index)
        } else {
            indexObj.symbols.push(index)
        }
        return indexObj;
    }, {words: [], symbols: []})
}

const stringReverse = function (str) {
    console.log(str)
    let indexObj = getLettersAndSymbols(str);
    return [...str].reduce((revOrder, item) => {
        let code = item.charCodeAt();
        if ((code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt())) {
            revOrder[indexObj.words.pop()] = item
        } else {
            revOrder[indexObj.symbols.shift()] = item
        }
        return revOrder;
    }, []).join('')
}

const randomString = (length) => {
    let randomStringChar = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const symbols = '@$,!'
    for(let i = 0; i < length; i++) {
        randomStringChar += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    const symbolsArr = symbols.split('')

    for(let i = 0; i < symbolsArr.length; i++) {
        let symbolsRandom = symbolsArr[Math.floor(Math.random() * symbols.length)];

        let randomCharStringIndex = Math.floor(Math.random() * randomStringChar.length);

        randomStringChar = randomStringChar.slice(0, randomCharStringIndex) + symbolsRandom + randomStringChar.slice(randomCharStringIndex, randomStringChar.length-1)
    }
    return randomStringChar
}

console.log(stringReverse(randomString(10)))