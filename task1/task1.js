const reverseString = (str) => {
    const words = str.split(/\W+/).reverse().filter((item) => item !== '');

    const separatorsResult = str.matchAll(/\W+|_/g);
    const separators = Array.from(separatorsResult);

    let result = '';
    for(let i = 0; i < words.length; i++) {
        result = result + words[i].split('').reverse().join('') + (i < separators.length ?  separators[i] : '');
    }
    return result
}

console.log(reverseString('Ab,c,de$!'));
console.log(reverseString('a,b$c'));
