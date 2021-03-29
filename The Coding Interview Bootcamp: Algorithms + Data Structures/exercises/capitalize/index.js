// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function capitalize(str) {
    const newString = []

    const stringArray = str.split(" ")

    stringArray.forEach(element => {
        newString.push(titleCase(element))
    });

    return newString.join(" ")
}

module.exports = capitalize;