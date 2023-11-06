// Use a callback to convert an array of strings to uppercase.
function hof(cb){
    var arr = ["akshay", "saini", "sir"]
    cb(arr)                                                                      // cb ko array as a argument pass kiya
}
function cb(array){ 
    array.forEach(element => {                                                   // array ke sare elems ko select kiya by using foreach 
        var converted = element.toUpperCase();
        console.log(converted)                                                  // ab array ke har ek elem ko uppercase thats it
    });
}
hof(cb)