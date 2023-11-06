// 13. Use a callback to find the maximum value in an array of numbers.
function hof(cb){
    var arr = [3, 5476, 437954983, 37436, 21987636984, 436549856498, 23546396]
    cb(arr)
}
function cb(arr){
    var solved = arr.reduce((acc, curr)=>{
        if (curr > acc) {              
            return curr;
        }
        else{
            return acc;
        }
    })
    console.log(solved)
}
hof(cb)