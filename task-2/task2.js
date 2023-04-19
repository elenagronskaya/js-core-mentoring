const condition = code => (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt())

const getLettersAndSymbols = function (str) {
    return [...str].reduce((indexObj, item, index) => {
        let code = item.charCodeAt();
        if(condition(code)) {
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
        if (condition(code)) {
            revOrder[indexObj.words.pop()] = item
        } else {
            revOrder[indexObj.symbols.shift()] = item
        }
        return revOrder;
    }, []).join('')
}

const randomItem = length => Math.floor(Math.random() * length);

function insertSeparator(separators, resultRandomString) {
    let separator = separators[randomItem(separators.length)];

    let indexToInsertSeparator = randomItem(resultRandomString.length);

    const leftString = resultRandomString.slice(0, indexToInsertSeparator);
    const rightString = resultRandomString.slice(indexToInsertSeparator, resultRandomString.length - 1)

    return leftString + separator + rightString;
}

const randomString = (length) => {
    let resultRandomString = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const separators = '@$,!'.split('');

    for(let i = 0; i < length; i++) {
        const letterIndex = randomItem(letters.length);
        resultRandomString += letters.charAt(letterIndex);
    }

    for(let i = 0; i < separators.length; i++) {
        resultRandomString = insertSeparator(separators, resultRandomString);
    }
    return resultRandomString
}
console.log(stringReverse(randomString(10)))