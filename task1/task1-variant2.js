const reverseString = (str) => {
    const words = [];
    let temp = '';
    const separators = []
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if((code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt())) {
            temp += str[i]
        }else{
            if(temp !== '') {
                words.push(temp)
            }
            temp = ''
        }
    }
    if(temp !== '') {
        words.push(temp)
    }
    words.reverse()

    temp = ''
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if((code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) || (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt())) {
            if(temp !== '') {
                separators.push(temp)
            }
            temp = ''
        }else{
            temp += str[i]
        }
    }
    if(temp !== '') {
        separators.push(temp)
    }

    let result = '';
    for(let i = 0; i < words.length; i++) {
        result = result + words[i].split('').reverse().join('') + (i < separators.length ?  separators[i] : '');
    }
    return result
}

console.log(reverseString('@fe,;ba'));
console.log(reverseString('a,b$c'));
console.log(reverseString('Ab,cd$ef'));
