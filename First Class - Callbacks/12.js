// 12. Develop a function that finds the sum of all elements in an array using a callback.
function hof(cb){
    var arr = [1, 5, 757, 786, 436]
    cb(arr)
}
function cb(arr){
    var done = arr.reduce((acc, curr)=>{                    // wkt reduce is an arrow functiona nd it takes 2 parametrs 
        acc += curr;
        return acc;
    })
    console.log(done)
}
hof(cb)