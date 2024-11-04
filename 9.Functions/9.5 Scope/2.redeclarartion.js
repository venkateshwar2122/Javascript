/*
 When using var, you can redeclare the same variable within the same function scope without any error.
 This is one of the key characteristics of var
*/
//example1
function redeclarationExample() {
    var x = 10;
    console.log(x); // Outputs: 10

    var x = 20; // Redeclaring the same variable
    console.log(x); // Outputs: 20 (the value is updated)
}

redeclarationExample();

/* Redeclaration Outside of Functions
Redeclaration with var is also allowed in the global scope:
*/
//example2

var y = 30;
console.log(y); // Outputs: 30

var y = 40; // Redeclaring the same variable
console.log(y); // Outputs: 40 (the value is updated)


/* In contrast, both let and const do not allow redeclaration in the same scope. Attempting to redeclare a variable 
with either will result in an error.
*/

//example3  Example with let:

let z = 50;
console.log(z); // Outputs: 50

// let z = 60; // Error: Identifier 'z' has already been declared


//example4 Example with const:

const w = 70;
console.log(w); // Outputs: 70

// const w = 80; // Error: Identifier 'w' has already been declared


/* 

Summary
var: Redeclaration is allowed within the same function or global scope. It can lead to confusion or bugs if not managed properly.

let and const: Redeclaration is not allowed within the same scope, promoting cleaner and more predictable code.

Using let and const is generally recommended in modern JavaScript to avoid issues associated with the redeclaration of variables and to encourage
clearer variable management.

*/
