//Write a function that takes an array and a callback function as arguments, and applies the callback to each element of the array.
function a(y){
    var data = [1,2,3,4];           
    y(data);
}
function y(data){                           //this cb function 'y' takes an array from the higherr order function 'a'
    var c = data.map((item)=>item+1)
    console.log(c)
}
a(y)

