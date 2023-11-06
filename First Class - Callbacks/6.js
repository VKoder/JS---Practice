// Create a higher-order function that takes a function and a number as arguments and calls the function multiple times based on the number passed.
function hof(cb, num){
    for (let i = 0; i <= num ; i++) {
        cb()        
    }
}
function cb(){
    console.log("Namaste Javascript")
}
hof(cb, 44)



//   hof() is a higherOrderFunction and it takes 2 arg 1st a funtion and 2nd a num ps- the num should represent how many times a function should call