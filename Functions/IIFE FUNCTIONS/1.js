// IIFE - IIFE Functions are the common ways to prevent polluting the global scope in js

//Named Function in IIFE:

    (function first(){
        console.log("I am Named and I am immediately Invoked")
    })();                                                              //remember the semicolon is imp to end the session



//Arrow Function in IIFE:

    (()=>{
        console.log("I am Arrow and I am immediately Invoked")
    })();


//Arrow with arguments:

    ((namePlz)=>{
        console.log("Welcome " + namePlz)
    })("vivekkkkkk");