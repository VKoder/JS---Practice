// Demonstrate how to store a function in a variable and then call it.
function b(){
    console.log("Function with a variable or I am a Function Exprression")
}
function c(d){
    var a = d;          // here we stored a parameter 'd' in a variable 'a'
   a();                 // and called it here
}   
c(b)                    // 'b' is an argument