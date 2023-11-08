// 4.Create an object with properties for username and price and log the values to the console using a function

const obj = {
    username: "shoes",
    price: 44
}
function myObj(whichObj){
    return `The Username is ${whichObj.username} and its price is ${whichObj.price}`
}
console.log(myObj(obj))