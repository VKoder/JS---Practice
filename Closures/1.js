function outer(){
    let a = 444;
    function inner(){               // it has the access of its parent lexical scope 
        console.log(a)
    }
    inner();
}
outer()