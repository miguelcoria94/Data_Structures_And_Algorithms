function averagePair(array, average) {
    if (array.length <= 1) {
        return false
    }

    let left = 0
    let right = array.length - 1
    while (array[left] < array[right]) {
        let sum = (array[left] + array[right]) / 2
        if (sum === average) {
            return true
        } else if (sum > average) {
            right--;
        } else {
            left++;
        }
    }
    return false
  // add whatever parameters you deem necessary - good luck!
}

console.log(averagePair([1, 2], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([],4))