function countUniqueValues(array) {
    let counter = {}
    for (let i = 0; i < array.length; i++){
        if (counter[array[i]] === undefined) {
            counter[array[i]] = 1
        } else {
            counter[array[i]] += 1
        }
    }
    console.log(Object.values(counter).length)
}

countUniqueValues([1, 1, 1, 1, 1, 2])
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])