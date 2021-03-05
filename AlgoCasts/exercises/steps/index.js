// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let counter = 1
    let tempString = ""

    for (let i = 0; i < n; i++) {
        tempString = "#".repeat(counter) + " ".repeat(n - counter)
        counter++
        console.log(tempString)
    }
}

module.exports = steps;