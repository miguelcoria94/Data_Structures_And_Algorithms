class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
}

const newArr = new MyArray();

newArr.push("ds")
newArr.pop()
console.log(newArr)