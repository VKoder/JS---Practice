// 5)Write a function that takes an array of numbers as input and returns the sum of all the numbers.

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];       
    }
    return sum;
}
const a = [10, 80, 90, 30]
console.log(sum(a));