class MyArray {
    constructor() {
        this.lengh = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }
}

const newArr = new MyArray()