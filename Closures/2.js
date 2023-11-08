function outer(){
    let a = "Namaste Javascript";
    function inner(){
        console.log(a);
    }
    return inner;           // it passes the ref of inner directly to outer 
}
const myFunc = outer();     // if we directly prints the outer ..it will gone thenit doesn't have inner access to its parent therefore we have to assign a new variable which will store the value in it 
console.log(myFunc)