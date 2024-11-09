/*
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing 
scope during the compilation phase, before the code is executed. This means that you can use variables and functions 
before you declare them in the code. However, it’s important to understand how hoisting works for different types of 
declarations.

How Hoisting Works

Variable Hoisting:
var: When you declare a variable using var, the declaration is hoisted to the top of its function scope (or global scope 
if declared outside a function). However, the initialization remains in its original place.
let and const: These declarations are also hoisted, but they are not initialized. Accessing them before their
declaration results in a ReferenceError.

Function Hoisting:
Function declarations are hoisted in their entirety, meaning you can call a function before it is defined in the code.
Function expressions (like those defined using let or const) are not hoisted in the same way. If you try to call them before 
they are defined, it will result in an error.



Examples of Hoisting


1.Example with var:

console.log(a); // Outputs: undefined (hoisted declaration). NOTE: it should be error but it's undefined because of hoisting
var a = 5;
console.log(a); // Outputs: 5 (initialization)

summary of above code:
The declaration var a; is hoisted to the top, so the first console.log outputs undefined (because a is declared but 
not yet initialized).
The initialization happens after the first log, setting a to 5.



2.Example with let and const:

// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10; // b is hoisted but not initialized
console.log(b); // Outputs: 10

summary of above code:-
The declaration let b; is hoisted, but b is not initialized until the assignment b = 10;. Trying to access b before its 
declaration results in a ReferenceError.



3.Example with Function Declarations:-

console.log(myFunction()); // Outputs: "Hello!"

function myFunction() {
    return "Hello!";
}

summary of above code:-
The entire function declaration is hoisted, so you can call myFunction before its definition.



4..Example with Function Expressions:

// console.log(myFunc()); // Error: myFunc is not a function
var myFunc = function() {
    return "Hi!";
};

summary of above code:-
The variable myFunc is hoisted, but the function assignment is not. Therefore, trying to call myFunc() 
before the assignment results in a TypeError because myFunc is undefined at that point.

*/




