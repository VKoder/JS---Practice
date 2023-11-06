// NORMAL FUNCTION WITH ARGUMENTS
var a = function abc(a, b, c) {
    var sum = a + b + c; // Declare 'sum' using 'var', 'let', or 'const'
    return sum;   // Return the calculated sum as the result of the function
}
console.log(a(2, 2, 4));




// ARROW FUNCTIONS WITH ARGUMENTS
const abc = (a, b, c) =>{
    var sum = a * b * c;
    return sum;
}
console.log(abc(2, 66, 997));


// FUNCTTION EXPRESSSIONS
var greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("John")); // Output: Hello, John!
