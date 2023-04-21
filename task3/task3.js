const randomItem = length => Math.floor(Math.random() * length);

function insertSeparator(separators, password) {
    let separator = separators[randomItem(separators.length)];

    let indexToInsertSeparator = randomItem(password.length);

    const leftString = password.slice(0, indexToInsertSeparator);
    const rightString = password.slice(indexToInsertSeparator, password.length - 1)

    return leftString + separator + rightString;
}

const handleCreateRandomPassword = () => {
    const sizeValue = document.getElementById("size").value
    let password = '';
    let passwordLength = Number(sizeValue)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    const separators = '@$!?'.split('');

    for(let i = 0; i < passwordLength; i++) {
        const letterIndex = randomItem(letters.length);
        password += letters.charAt(letterIndex);
    }

    for(let i = 0; i < separators.length; i++) {
        password = insertSeparator(separators, password);
    }
    document.getElementById("password").value = password;
}