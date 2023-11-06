// Implement a function that accepts a number and a callback function, and then performs a mathematical operation on the number, using the callback.
function y(x){
    var a = 4;
    x(a);
}
function x(num){                        //here is a cb func 'x' who acceptts a value from its higherorderfunction 'y' and then 'x' performs mathoppp on it
    var sum =  num * num;
    return sum;
}
y(x)