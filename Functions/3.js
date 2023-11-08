// 3.Develop a function that takes an array of numbers and returns the total sum of the elements
function calculateSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const totalSum = calculateSum(numbers);
console.log("The total sum is:", totalSum);
