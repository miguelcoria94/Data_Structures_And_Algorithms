// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let allVowels = "aeiou"
    let count = 0

    let strArray = str.toLowerCase().split("")

    for (let i = 0; i < strArray.length; i++){
        let char = strArray[i]
        if (allVowels.indexOf(char) !== -1) {
            count++
        }
    }

    return count
}

module.exports = vowels;
