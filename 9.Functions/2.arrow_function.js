//Arrow functions provide a shorter syntax compared to traditional function expressions,
//this can make your code cleaner and easier to read.

//without braces{})
//no return required

let add = (a,b) => a+b
console.log(add(5,3))

//with braces({})
//When you use arrow functions with a block body(with braces), you need to 
//include the return statement explicitly if you want to return a value. 

let add = (a, b) => {
    let result = a + b; // perform the addition
    return result;        // return the result
};

console.log(add(4, 5)); // Output: 9
