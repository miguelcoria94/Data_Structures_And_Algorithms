function sameFrequency(num1, num2) {
    let num1String = num1.toString()
    let num2String = num2.toString()
    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < num1String.length; i++){
        if (obj1[num1String[i]] === undefined) {
            obj1[num1String[i]] = 1
        } else {
            obj1[num1String[i]] += 1
        }
    }

    for (let i = 0; i < num2String.length; i++) {
      if (obj2[num2String[i]] === undefined) {
        obj2[num2String[i]] = 1;
      } else {
        obj2[num2String[i]] += 1;
      }
    }

    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        } else {
            return true
        }
    }
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));