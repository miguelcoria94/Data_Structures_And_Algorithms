// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let counter = 1
    let tempString = ""

    for (let i = 0; i < (n + 1); i++) {
        tempString = " ".repeat(n - (counter)) + "#".repeat(counter) + " ".repeat(n - counter)
        counter++
        console.log(tempString)
    }
}

module.exports = pyramid;