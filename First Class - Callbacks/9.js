// 9. Implement a function that sorts an array of numbers using a callback for comparison.

function hof(cb){
    let arr = [1, 3,5, 0, 2]
    cb(arr)
}
function cb(num){
    var sorted = num.sort((a, b) => a - b); // Using a comparison function to sort as numbers       // here we have to sort the array, the whole array therefore i didn't use foreach (ps- we dont want to iterate through each elem)
    console.log(sorted)
}
hof(cb)