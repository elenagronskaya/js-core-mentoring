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

export const stringReverse = function (str) {
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

console.log(stringReverse('Ab,c,de$!'));
console.log(stringReverse('a,b$c'));
