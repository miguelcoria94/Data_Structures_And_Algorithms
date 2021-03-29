// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let stringArray = str.split("")
    let counter = {}
    for (let i = 0; i < stringArray.length; i++){
        if (!counter[stringArray[i]]) {
            counter[stringArray[i]] = 1
        } else {
            counter[stringArray[i]] += 1;
        }
    }

    let max = Math.max(...Object.values(counter))



    return Object.keys(counter).find(key => counter[key] === max)
}

module.exports = maxChar;
