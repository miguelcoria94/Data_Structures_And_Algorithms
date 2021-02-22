function mergeSortedArrays(arr1, arr2) {
    const mergeArray = []

    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let i = 1
    let j = 1
    
    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item ) {
            mergeArray.push(array1Item)
            array1Item = arr1[i];
            i++
        }
        else {
            mergeArray.push(array2Item);
            array2Item = arr2[j];
            j++
        }
    }

    return mergeArray
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))