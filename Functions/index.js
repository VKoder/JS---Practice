//1) Write a function that takes two numbers as parameters and returns their sum.
// function add(a, b){
//     let sum = a + b;
//     return sum;
// }
// console.log(add(2, 2));



//2)Create a function that checks if a given number is even or odd.
// function isPrime(a){
//     if (a % 2 == 0) {
//         return a + " is even";
//     }
//     else{
//         return a + " is odd";
//     }
// }
// console.log(isPrime(3))



// 3)Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];       
    }
    return sum;
}
const a = [10, 80, 90, 30]
console.log(sum(a));