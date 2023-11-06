function x(){
    var a = 10;
    setTimeout(function(){
        console.log(a)
    }, 2000)
    console.log("Namaste Js & this will print first");
}
x();


// by using var
function x(){
    for (var i = 1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i * 1000)
    }
    console.log("Namaste Js & this will print first");
}
x();


// by using let
function x(){
    for (let i = 1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i * 1000)
    }
    console.log("Namaste Js & this will print first");
}
x();

// So, the difference in output is due to the scoping behavior of var and let, where var creates
//  a single shared variable for the entire function, while let creates a 
//  new variable with each iteration of the loop.




//      BUT THERE IS ALSO DIFFERNT OPTION WE CAN USE VAR TO PRINT 1 2 3 4 5


function x(){
    for (var i = 1; i <= 5; i++) {
        function cass(ss){       // yaha se argument pass horaha hai 1 2 3 4 5 jese jese i increment horha ie. loop iteration
            setTimeout(function(){
                console.log(ss)  // nd vese vese jo i yaha print horha hai
            },ss * 1000)
        } 
        cass(i) 
    }
    console.log("Namaste Js");
}
x()