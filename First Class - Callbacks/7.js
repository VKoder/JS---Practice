// Develop a function that uses a callback to check if a given number is even or odd.
function check(cb){
    var a = 44;
    cb(a)
}
function cb(num){
    if (num % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

check(cb)