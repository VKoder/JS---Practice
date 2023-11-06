// 11. Create a function that filters an array of objects based on a condition provided in a callback.


function hof(cb){
    var a = [{name: 'vivek' , no: 4}, {name: 'akshay', no: 11}, {name:'harry', no: 29}];
    cb(a);
}
function cb(arr){
    var solved = arr.filter((item)=> item.no > 4);
    console.log(solved);
}
hof(cb)