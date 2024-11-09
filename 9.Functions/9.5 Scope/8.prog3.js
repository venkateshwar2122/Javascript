/* you can change var , let variables */

/* allowed
var x = 10
x = 20
x = [4,6,8]

*/

/* u cannot reinitialse const variables. const variables shoul;d be initialised at the time of variable declaration itself */

/* not allowed , it will give typeerror

const a = 7
a = 356   // error
console.log(a)   

*/

/*  NOTE:


. const
Scope: Block-scoped (like let).
Hoisting: Variables declared with const are also hoisted but not initialized (using them before declaration throws a ReferenceError).
Re-declaration and Update: Cannot be re-declared or updated. const is used for constants whose value won’t change.
Mutable Objects: If the const is an object or array, its properties or items can be changed, but you cannot reassign the variable itself.

*/

/* note : reinitaiseation of const is not allowed , but it's modification is allowed if it's an array or object only*/

/* allowed:

const a = [6,8,3,4,6,8]
a[2] = 23
a.push(28)
console.log(a)

output: [6,8,23,4,6,8,28]

*/

/* not allowed : in below code u are reinitaialising a object..it willl give type error


const a = [6,8,3,7,9]
a = [...a , 67]

*/

