let x = 10
console.log(x,a)
{
    var a = 20       // var a is hoisted before line 1 itself, therefore line2 'a' value is coming undefined instead of error
    console.log(x,a)
    let x = 20
}
console.log(x,a)

/* output:
10 undefined
10 20
10 20
*/

/*
The main points to take away from this example are:

Hoisting: The variable a is hoisted, but because it is declared with var, it can be accessed after the block,
affecting how you see its value.
Block Scope: 'let' creates block scope for x, while var does not create a block scope for a, allowing it to be
accessed outside the block where it was declared.

*/

/*example2 */

let x = 10
console.log(x,a)
{
    var a = 20
    console.log(x,a)
    let x = 50                  // this line was added extra
    
}
console.log(x,a)

/*
output:-
10 undefined
ERROR!
/tmp/C5j1O6Ohor.js:5
    console.log(x,a)
                ^

ReferenceError: Cannot access 'x' before initialization
*/
  
