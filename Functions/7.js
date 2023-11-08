// 7.Implement a function that finds the maximum value in an array and returns it.
const array = [1,3, 4,455, 67]
function findMax(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max > arr.[i]) {
            return max;
        }else{
            return arr[i];
        }        
    }
}
console.log(findMax(array))