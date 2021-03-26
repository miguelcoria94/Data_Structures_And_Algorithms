function countDown(num) {
    if (num <= 0) {
        console.log("All Done!!")
    } else {
        console.log(num)
        countDown(num - 1)
    }
}

countDown(5)