// 10. Write a function that accepts a string and a callback to remove any special characters from the string.
// #solved by chatgpt

function hof(cb) {
    var str = "vivek#";
    cb(str);
}

function cb(str) {
    var removed = str.replace(/[^a-zA-Z0-9]/g, ''); // using regex to remove special characters
    console.log(removed);
}

hof(cb);



// In the cb function, the replace method is used with a regular expression [^a-zA-Z0-9] to match any character that is not alphanumeric.
//  The g flag is added to replace all occurrences. This results in removing all special characters from the string.