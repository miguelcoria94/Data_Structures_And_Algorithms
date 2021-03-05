// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Test

function normalizeString(string) {
    return string.replace(/[^\w]/g, "").toLowerCase()
}

function anagrams(stringA, stringB) {
    const refinedA = normalizeString(stringA).split("")
    const refinedB = normalizeString(stringB).split("")
    const mapone = {}
    const maptwo = {}

    refinedA.forEach(element => {
        if (mapone[element] === undefined) {
            mapone[element] = 1
        } else {
            mapone[element] += 1
        }
    });

    refinedB.forEach(element => {
        if (maptwo[element] === undefined) {
            maptwo[element] = 1
        } else {
            maptwo[element] += 1
        }
    });
    console.log(mapone)
    console.log(maptwo)

}

module.exports = anagrams;