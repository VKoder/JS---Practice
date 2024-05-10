//1
var x = 10;             
function y() {          
  x = 20;                //     It is a global variable                               
  console.log(x);        //     So it prints   
  var x;
}
y();
console.log(x);
//op - 20 10







//2
var x = 10;
function foo() {
  console.log(x);         // Undef
  var x = 20;            
}
foo();
console.log(x);           // 10







//3
var a = 5;
function run() {
  console.log(a);         //Undef
  var a = 10;   
  b = 15;
  console.log(a);         //10
}
run();
console.log(b);           // b=15 (As it is an gloabl variable )The variable b is declared without the var keyword







//4
function test() {
    console.log(a);        //Undef
    console.log(foo());    //2
  
    var a = 1;
    function foo() {
      return 2;
    }
  }
  test();
  





//5
    var a = 99;
    var z = 100;
    function mainouter(){
    var x = 10;
    function outer() {
    var y = 20;
  function inner() {
            console.log(x);
            console.log(a);
            console.log(y);
            console.log(z);
            }
        inner();
    }
    outer();
}
mainouter();

//THUS x ,a , y and z are accessible within the scope of the inner function due to the concept of closures.
//(it has the access of its and its parents lexical scope)




//6.1
console.log(yup)

function yup(){
  var f = "hero"
  console.log(f)
}




//6.2
console.log(yup())

function yup(){
  var f = "hero"
  console.log(f)
}