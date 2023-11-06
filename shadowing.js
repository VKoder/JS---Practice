// FOR VAR
var a = 100;
{
    var a = 1; //This Variable shadows the uppar wala 
    let b = 10;
    const c = 98;
    console.log(a);
}
console.log(a);

//FOR LET AND CONST
let b = 100;
{
    var a = 1; 
    let b = 10; //This Variable shadows the uppar wala
    const c = 98;
    console.log(b); // This will print 10
}
console.log(b); // This will print 100
// Example for : is because the let and const are block scoped we cant access them outside the block 
                                        //or
// Example: Since 'let' and 'const' are block-scoped, we can't access the inner block variables outside the block.
