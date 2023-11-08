// 6.Write a function that calculates the average of an array of numbers.
const arr = [1,2,3,4]
function avg(array){
   
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    let average = sum/array.length;
    
    return average;

}
console.log(avg(arr))