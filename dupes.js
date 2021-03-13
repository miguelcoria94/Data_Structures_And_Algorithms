function areThereDuplicates(...args) {
    let counter = {}

    for (let i = 0; i < args.length; i++){
        if (counter[args[i]] === undefined) {
            counter[args[i]] = 1
        } else {
            counter[args[i]] += 1
        }
    }

    console.log(counter)
    for (let prop in counter) {
        if (counter[prop] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
