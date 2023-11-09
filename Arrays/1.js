// 1.Write a function that prints the elements of an array in reverse order.
const arr = [2.34, 43.3 , 4542.34, 2.3]
function arrRev(arr) {
    return arr.reverse();    
}
const run = arrRev(arr);
console.log(run);

// 2.Use a loop to calculate the sum of all numbers from 1 to a given number.

let sum = 0;
for (let i = 0; i < 11; i++) {
    sum += i;
}
console.log(sum)
