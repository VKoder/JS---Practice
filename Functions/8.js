// 1.   Write a function that takes a number as input and returns 'Positive' if the number is greater than 0, 
//      'Negative' if it's less than 0, and 'Zero' if it's 0.

function logic(num) {
    if (num>0) {
        console.log("positive");
    }
    else if (num<0) {
        console.log("negative");
    }
    else{
        console.log("zero");
    }
}
logic(4)



// 2.Use a ternary operator to check if a number is even or odd and return 'Even' or 'Odd' accordingly.

const a =  4;
const logic2 = a % 2 == 0? "even" : "odd";
console.log(logic2)