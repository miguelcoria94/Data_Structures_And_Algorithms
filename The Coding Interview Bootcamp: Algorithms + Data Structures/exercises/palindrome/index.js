// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    reverseStr = str.split("").reverse()

    regularStr = str.split("")

    for (let i = 0; i < reverseStr.length; i++){
        if (reverseStr[i] !== regularStr[i]) {
            return false
        }
    }
    return true

}

palindrome("hello")

module.exports = palindrome;
