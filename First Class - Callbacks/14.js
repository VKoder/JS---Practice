// 14. Implement a function that performs an asynchronous operation and uses a callback to handle the result.

function hof(cb){
   setTimeout(() => {
        console.log("Namaste")
        cb()
   }, 2000);
}
function cb(){
    console.log("Javascript")
}
hof(cb)