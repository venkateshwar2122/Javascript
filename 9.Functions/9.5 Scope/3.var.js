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



