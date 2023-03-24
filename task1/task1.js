const reverseString = (str) => {
    const words = str.split(/\W+/).reverse();
    const chars = str.split(/\w+/);

    let result = '';
    for(let i = 0; i < words.length; i++) {
        result = result + words[i].split('').reverse().join('') + chars[i];
    }
    return result
}

console.log(reverseString('Ab,c,de$!'));