function maxSubarraySum(array, num) {
    if (array.length < num) {
        return null
    }

    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < num; i++){
        maxSum += array[i]
    }

    tempSum = maxSum

    for (let i = num; i < array.length; i++){
        tempSum = tempSum - array[i - num] + array[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
console.log(maxSubarraySum([2, 3], 3))
