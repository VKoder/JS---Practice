// 1. Use array methods like map, filter, and reduce to manipulate an array of numbers.
const array = [2, 4, 6, 8, 9];
const map = array.map(item => (item * 2))
console.log(map)
const filter = array.filter(item => (item % 2 ==0))
console.log(filter)
const reduce = array.reduce((acc, curr)=>{
    acc +=curr
    return acc;
},0)
console.log(reduce)