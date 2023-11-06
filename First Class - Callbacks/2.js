// Create a function that returns another function.
function x(){
    console.log("Ye Function as an arguement hum pass kiye hai and usko hi retuen kiye hai")
}
function y(x){         
    return x(); 
}
y(x)



function a(){
    console.log("Please give stars to repo")
}
function y(xyz){     /* this is parameter , as it cn be any variable*/
    return xyz();
}
y(a)                 /* this is argument , and this is actual function we havve to passs as an argument hence, it is called an callback or first class function */