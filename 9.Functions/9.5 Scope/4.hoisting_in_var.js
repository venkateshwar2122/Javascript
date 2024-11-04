//example 1

function anotherExample() {
    console.log(y); // Outputs: undefined

    var y = 30; // This y is hoisted in beginning of function scope

    console.log(y); // Outputs: 30 (this y shadows the outer y)
}


/* above code after hoisting will look like below code of example 2 */
//example 2

function anotherExample() {
    var y; // Declaration is hoisted
    console.log(y); // Outputs: undefined (due to hoisting, y is declared but not yet assigned)
    
    y = 30; // Now assigning 30 to y
    console.log(y); // Outputs: 30
}
