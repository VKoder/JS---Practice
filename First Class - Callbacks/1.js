// Write a function that takes another function as an argument and calls it.
function x(){
    console.log("Namaste Javascript");
}
function y(x){
    console.log("Namaste Devs");
    x();
}
y(x)