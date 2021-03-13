function minSubArrayLen(arr, num) {
    let left = 0
    let right = 1

    while (right < arr.length) {
        if (arr[right] > num) {
            return [arr[right]].length
        }
        left++
        right++

        if (arr[left] + arr[right] === num) {
            return [arr[left], arr[right]].length
        }
    }
    return 0
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 5, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))