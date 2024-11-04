//difference between function scope and block scope

/*  Function Scoped
Definition: Variables declared with var are function-scoped, meaning they are accessible within the entire function in which
they are declared. If declared outside any function, they are globally scoped.
Behavior: A variable declared with var inside a function is available anywhere within that function, regardless of where it 
is declared.
*/
//EXAMPLE1:-

function myFunction() {
    var x = 10; // x is function-scoped
    console.log(x); // Outputs: 10
}

myFunction();

console.log(x); // Error: x is not defined (x is not accessible outside the function)


/* Block Scoped
Definition: Variables declared with let and const are block-scoped. This means they are only accessible within the 
nearest enclosing block (e.g., within {}), including loops and conditionals.
Behavior: A variable declared with let or const inside a block is not accessible outside of that block.
*/

//EXAMPLE2:-

if (true) {
    let y = 20; // y is block-scoped
    console.log(y); // Outputs: 20
}

console.log(y); // Error: y is not defined (y is not accessible outside the if block)

/*

//Here’s an example that demonstrates both function scope and block scope:
//EXAMPL3:-

var a = 5; // Global variable

function testScopes() {
    var a = 10; // Function-scoped variable
    console.log(a); // Outputs: 10 (local a)

    if (true) {
        let b = 20; // Block-scoped variable
        console.log(b); // Outputs: 20 (local b)
    }

    // console.log(b); // Error: b is not defined (b is not accessible here)
}

testScopes();

console.log(a); // Outputs: 5 (global a remains unchanged)
