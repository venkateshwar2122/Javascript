/*
difference between var,let,const:

In JavaScript, var, let, and const are used to declare variables, but they behave differently:

1. var
Scope: Function-scoped (not block-scoped).
Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
Re-declaration: Can be re-declared and updated within the same scope.

function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // same variable
        console.log(x); // 20
    }
    console.log(x); // 20 (x was overwritten)
}
exampleVar();

2. let
Scope: Block-scoped (limited to the block where it is defined).
Hoisting: Variables declared with let are hoisted but not initialized (accessing them before declaration results in a ReferenceError).
Re-declaration: Cannot be re-declared in the same scope, but can be updated.

function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20; // new variable within this block
        console.log(x); // 20
    }
    console.log(x); // 10 (outer scope variable)
}
exampleLet();


3. const
Scope: Block-scoped (like let).
Hoisting: Variables declared with const are also hoisted but not initialized (using them before declaration throws a ReferenceError).
Re-declaration and Update: Cannot be re-declared or updated. const is used for constants whose value won’t change.
Mutable Objects: If the const is an object or array, its properties or items can be changed, but you cannot reassign the variable itself.

function exampleConst() {
    const x = 10;
    console.log(x); // 10

    // x = 20; // Error: Assignment to constant variable

    const y = { name: "Alice" };
    y.name = "Bob"; // Allowed (changing property)
    console.log(y.name); // Bob
}
exampleConst();



*/


/* note : var is function scoped and NOT block scoped
*/

//example1

var b = 10;
console.log(b); // Outputs: 10

if (true) {
    var b = 20; // Same variable as above
    console.log(b); // Outputs: 20
}

console.log(b); // Outputs: 20 (var is function-scoped and not block scoped, so it affects the outer scope)

//example2

var y = 20; // Global variable

function anotherExample() {
    console.log(y); // Outputs: 20 (accessing the outer variable)

    var y = 30; // This y is scoped to the function

    console.log(y); // Outputs: 30 (this y shadows the outer y)
}

anotherExample();

console.log(y); // Outputs: 20 (global y is unchanged)



