function reverse(str) {
    const strArr = str.split("")
    
    const reverseArr = []

    for (let i = strArr.length - 1 ; i >= 0; i--) {
        reverseArr.push(strArr[i])
    }

    return reverseArr.join("")
}

console.log(reverse("miguel"))